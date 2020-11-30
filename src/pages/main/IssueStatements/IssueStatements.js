import { useEffect, useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { ImportantNotes } from "../../../components/StatementComponents/ImportantNotes";
import { NewBillModal } from "../../../components/StatementComponents/NewBillModal/NewBillModal";
import { PeriodSelectField } from "../../../components/StatementComponents/PeriodSelectField";
import { StatementsListing } from "../../../components/StatementsListing/StatementsListing";
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


  const monthIndex = d.getMonth() - 1;
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

      <ImportantNotes />

      <PeriodSelectField 
        payload={payload} 
        setPayload={setPayload}
        monthIndex={monthIndex} 
      />

      {
        !data ? 
        <Loader />
        :
        <StatementsListing 
          accounts={filteredArr} 
          setShowModal={setShowModal}
          payload={payload}
          setPayload={setPayload}
        />
      }
      
    </div>
  )
}