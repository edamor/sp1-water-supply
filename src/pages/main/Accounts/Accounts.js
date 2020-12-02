import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { AccountDetailsModal } from "../../../components/AccountDetailsModal/AccountDetailsModal";
import { AccountsListing } from "../../../components/AccountsListing/AccountsListing"
import Loader from "../../../components/Loader/Loader";
import { PopupNotif } from "../../../components/PopupNotif/PopupNotif";
import { useFetch } from "../../../hooks/useFetch";
import { deleteAccountApi } from "../../../utils/AccountsApiMethods";


export const Accounts = () => {
  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  const history = useHistory();
  const {path} = useRouteMatch();

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
    })
    .catch(e => {
      console.log(e)
      setDeleteLoading(false)
      setDeletePopup({title: "Failed", 
      message: "There was a problem deleting this account. \n\nRefresh the page and try again."})
    });
  };

  function openPopup(acctNo) {
    setShowPopup(true)
    setDeleteThis(acctNo)
  }

  function hidePopup() {
    setShowPopup(false);
    history.replace(path);
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
  

  

  return (
    <>
      <div className="container h-100">
        {showConfirmation(deletePopup.title, deletePopup.message, hidePopup, handleDelete, deleteThis, deleteLoading)}
        {showModal && <AccountDetailsModal account={viewAccount} setShowModal={setShowModal}  />}
        <p className="display-5 text-center py-3">
          Accounts
        </p>
        {
          !data ?
          <div className="row py-4 h-50">
            <Loader />
          </div>
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <AccountsListing 
                accounts={data} 
                setShowModal={setShowModal} 
                selectAccount={setViewAccount}
                openPopup={openPopup}
              />
            </div>
          </div>
        }
      </div>
    </>
  )
}