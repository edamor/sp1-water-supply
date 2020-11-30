import { useEffect, useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { ImportantNotes } from "../../../components/StatementComponents/ImportantNotes";
import { IssueBillModal } from "../../../components/StatementComponents/IssueBillModal/IssueBillModal";
import { NewBillModal } from "../../../components/StatementComponents/NewBillModal/NewBillModal";
import { PeriodSelectField } from "../../../components/StatementComponents/PeriodSelectField";
import { StatementsListing } from "../../../components/StatementsListing/StatementsListing";
import { useAccountsContext } from "../../../contexts/AllAccountsContext";
import { useBillingDate } from "../../../contexts/BillingDateContext";
import { useFetch } from "../../../hooks/useFetch";
import { useTableFilter } from "../../../hooks/useTableFilter";


  

export const IssueStatements = () => {
  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  const {accounts, setAccounts} = useAccountsContext();

 

  const [loading, setLoading] = useState(true);

  const months = useBillingDate();

  const d = new Date();
  const monthIndex = d.getMonth() - 1;

  const [payload, setPayload] = useState({
     accountNumber: "",
     periodFrom: months[monthIndex].value.periodFrom,
     periodTo: months[monthIndex].value.periodTo,
     readingPresent: 0,
     chargeOthers: 0
  })

  const [showModal, setShowModal] = useState(false);

  
  
  const {filteredArr} = useTableFilter({
    data: accounts,
    filter: payload.periodTo
  });

  useEffect(() => {
    setTimeout(() => {
      if (data !== null) {
        setAccounts(data);
      }
      setLoading(false)
    }, 1500);
  }, [data, setAccounts])


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
        loading ? 
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