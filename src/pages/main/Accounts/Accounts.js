import { useEffect, useState } from "react";
import { AccountDetailsModal } from "../../../components/AccountDetailsModal/AccountDetailsModal";
import { DataTable } from "../../../components/DataTable/DataTable";
import Loader from "../../../components/Loader/Loader";
import { PopupNotif } from "../../../components/PopupNotif/PopupNotif";
import { useAccountsListContext } from "../../../contexts/AccountsListContext";
import { useFetch } from "../../../hooks/useFetch";
import { deleteAccountApi } from "../../../utils/AccountsApiMethods";
import { TrashCan } from "./SvgIcons";


export const Accounts = () => {
  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  const { accountList, setAccountList } = useAccountsListContext();

  useEffect(() => {
    if (data) {
      setAccountList(data)
    }
  }, [data, setAccountList])


  const [showModal, setShowModal] = useState(false);
  const [viewAccount, setViewAccount] = useState({});


  const [showPopup, setShowPopup] = useState(false);
  const [deleteThis, setDeleteThis] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deletePopup, setDeletePopup] = useState({
    title: "Delete Account",
    message: "Please be reminded that once deleted, all account information, including old statements, cannot be restored. \n\nPress 'Confirm' to continue."
  })

  function handleDelete(accountNumber) {
    setDeleteLoading(true);
    deleteAccountApi(TOKEN, accountNumber)
    .then(response => {
      if (response === "ACCOUNT DELETED") {
        setDeleteLoading(false)
        setDeletePopup({title: "Success", 
        message: `Account with Account No. ${accountNumber} has been deleted.`});
      }
       setAccountList(accountList.filter(item => (item.accountNumber !== accountNumber)))
    })
    .catch(e => {
      console.log(e)
      setDeleteLoading(false)
      setDeletePopup({title: "Failed", 
      message: "There was a problem deleting this account. \n\nRefresh the page and try again."})
    });
  };


  function hideDeleteCallback() {
    setShowPopup(false);
    setDeletePopup({
      title: "Delete Account",
      message: "Please be reminded that once deleted, all account information, including old statements, cannot be restored. \n\nPress 'Confirm' to continue."
    });
  }

  

  const showConfirmation = (title, message, hide, confirmAction, refNumber, loading) => {
    return (showPopup && 
      <PopupNotif 
        title={title}  
        message={message}
        hide={hide}
        confirmAction={confirmAction}
        refNumber={refNumber}
        loading={loading}
      />  
    )
  }
  

  function viewAccountCallback(account) {
    setShowModal(true);
    setViewAccount(account)
  };
  function showDeleteCallback(account) {
    setShowPopup(true)
    setDeleteThis(account.accountNumber)
  };

  const columns = [
    {
      id: "accountNumber",
      title: "Account No.",
      width: "17",
      className: "my-0 py-0"
    },
    {
      id: "fullName",
      title: "Name",
      width: "22",
      className: "my-0 py-0"
    },
    {
      id: "address",
      title: "Address",
      width: "16",
      className: "my-0 py-0"
    },
    {
      id: "lastBillReading",
      title: "Reading",
      width: "13",
      className: "my-0 py-0"
    },
    {
      id: "lastBillPeriodTo",
      title: "Month",
      width: "13",
      className: "my-0 py-0"
    },
    {
      id: "actions",
      title: "",
      width: "19",
      className: ""
    },
  ];

  const rows = [
    {
      id: "accountNumber",
      type: "string",
      className: "",
    },
    {
      id: "fullName",
      type: "string",
      className: "",
    },
    {
      id: "address",
      type: "barangay",
      className: "",
    },
    {
      id: "lastBillReading",
      type: "number",
      className: "",
    },
    {
      id: "lastBillPeriodTo",
      type: "longDate",
      className: "",
    },
    {
      id: "actions",
      type: "action",
      className: "text-center",
      actions: [
        {
          label: `${window.innerWidth < 768 ? "View Details" : "View"}`,
          className: "btn-primary px-2 mx-1",
          callback: viewAccountCallback
        },
        {
          label: <TrashCan />,
          className: "btn-danger mx-1",
          callback: showDeleteCallback
        }
      ]
    }
  ];

  

  return (
    <div className="container h-100">
      {showConfirmation(deletePopup.title, deletePopup.message, hideDeleteCallback, handleDelete, deleteThis, deleteLoading)}
      {showModal && <AccountDetailsModal account={viewAccount} setShowModal={setShowModal}  />}
      <p className="display-5 text-center py-3">
        Accounts
      </p>
      {
        !data ||!accountList ?
        <div className="row py-4 h-50">
          <Loader />
        </div>
        :
        <div className="row pt-2">
          <div className="col-12 col-md-10 m-auto">
            <DataTable 
              columns={columns}
              rows={rows}
              data={accountList}
            />
          </div>
        </div>
      }
    </div>
  )
}