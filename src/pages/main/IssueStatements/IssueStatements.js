import { useEffect, useState } from "react";
import { DataTable } from "../../../components/DataTable/DataTable";
import Loader from "../../../components/Loader/Loader";
import { NewBillModal } from "../../../components/StatementComponents/NewBillModal/NewBillModal";
import { PeriodSelectField } from "../../../components/StatementComponents/PeriodSelectField";
import { useAccountsForBillingContext } from "../../../contexts/AccountsForBillingContext";
import { useBillingDate } from "../../../contexts/BillingDateContext";
import { useFetch } from "../../../hooks/useFetch";
import { useTableFilter } from "../../../hooks/useTableFilter";



const d = new Date();  

export const IssueStatements = () => {
  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  const {accounts, setAccounts } = useAccountsForBillingContext();


  const monthIndex = d.getMonth() < 1 ? 0 : (d.getMonth() - 1);
  const months = useBillingDate();
  
  const [payload, setPayload] = useState({
     accountNumber: "",
     periodFrom: months[monthIndex].value.periodFrom,
     periodTo: months[monthIndex].value.periodTo,
     readingPresent: 0,
     chargeOthers: 0
  })
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data) {
      setAccounts(data)
    }
  }, [data, setAccounts])

  
  
  const { filteredArr } = useTableFilter({
    data: accounts || [],
    filter: payload.periodTo
  });


  function issueStatementCallback(account) {
    setPayload({
      ...payload,
      accountNumber: account.accountNumber
    });
    setShowModal(true);
  }

  const columns = [
    {
      id: "accountNumber",
      title: "Account No.",
      width: "25",
      className: "my-0 py-0"
    },
    {
      id: "fullName",
      title: "Name",
      width: "30",
      className: "my-0 py-0"
    },
    {
      id: "address",
      title: "Barangay",
      width: "25",
      className: "my-0 py-0"
    },
    {
      id: "actions",
      title: "",
      width: "20",
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
      id: "actions",
      type: "action",
      className: "text-center",
      actions: [
        {
          label: `${window.innerWidth < 768 ? "Issue" : "Issue Statement"}`,
          className: "btn-primary px-2 mx-1",
          callback: issueStatementCallback
        }
      ]
    }
  ];

  


  return (
    <div className="container">
      {
        showModal && 
        <NewBillModal 
          payload={payload}
          setPayload={setPayload}
          setShowModal={setShowModal}
        /> 
      }
      <p className="display-5 text-center py-3">
        Issue Statements
      </p>

      <PeriodSelectField 
        payload={payload} 
        setPayload={setPayload}
        monthIndex={monthIndex} 
      />

      {
        !data ? 
        <Loader />
        :
        <DataTable 
          columns={columns}
          rows={rows}
          data={filteredArr}
        />
      }
      
    </div>
  )
}