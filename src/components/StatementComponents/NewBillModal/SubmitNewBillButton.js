import { useAccountsForBillingContext } from "../../../contexts/AccountsForBillingContext";
import { validateStatement } from "./NewBillValidationRules";




export const SubmitNewBillButton = ({
  payload, 
  account, 
  isLoading, 
  setIsLoading, 
  errors, 
  setErrors, 
  setShowModal}) => {
  const ISSUE_BILL_URI = "https://sp1-blue-sparrow.herokuapp.com/api/v1/bill-management/bills/issue"
  const TOKEN = localStorage.getItem("token");

  const { accounts, setAccounts } = useAccountsForBillingContext();

  function onMouseDown() {
    setErrors(validateStatement(payload, account)) 
  }

  function onMouseUp() {
    setIsLoading(true)
    if (Object.keys(errors).length > 0) {
      setIsLoading(false)
      return false
    } else {
      fetch(ISSUE_BILL_URI, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": TOKEN
        },
        body: JSON.stringify(payload)
      })
      .then(res => res.text())
      .then(data => {
        if (data === "FIRST" || data === "SUCCEEDING") {
          setIsLoading(false)
          setAccounts(accounts.filter(item => (item.accountNumber !== payload.accountNumber)))
          alert("Statement was successfully issued. Click Ok to continue.");
          setShowModal(false);
        }
      })
      .catch(e => {
        console.log(e);
        alert("Oops.. Something went wrong...")
        setIsLoading(false)
      })
    }
  }

  return (
    <button 
      type="button" 
      className="btn btn-success col-3"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      disabled={isLoading}
    >
      {
        isLoading ?
        <span>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="visually-hidden">Loading...</span>
        </span>
        :
        <span>Submit New Statement</span>
      }
    </button>
  )
}