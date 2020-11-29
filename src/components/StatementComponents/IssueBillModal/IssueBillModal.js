import { useAccountsContext } from "../../../contexts/AllAccountsContext";
import { useBillingDate } from "../../../contexts/BillingDateContext";
import { useConsumptionAmount } from "../../../hooks/useConsumptionAmount";
import "./style.css";


const ISSUE_BILL_URI = "https://sp1-blue-sparrow.herokuapp.com/api/v1/bill-management/bills/issue"

export const IssueBillModal = ({payload, setPayload, setShowModal}) => {
  const TOKEN = localStorage.getItem("token");

  const { accounts } = useAccountsContext();
  const foundAccount = accounts.find(item => item.accountNumber === payload.accountNumber);
  const months = useBillingDate();
  const billingDate = months.find(item => item.value.periodTo === payload.periodTo)

  
  function handleClose() {
    setPayload({
      ...payload,
      accountNumber: "",
      readingPresent: 0,
      chargeOthers: 0
    })
    setShowModal(false);
  }
  
  function handlePresentReading(e) {
    if (e.target.value.length < 4 && e.target.value.length > 0) {
      setPayload({
        ...payload,
        readingPresent: parseInt(e.target.value)
      })
    } else e.target.value.trim()
  }

  const charges = useConsumptionAmount({
    consumption: (payload.readingPresent - foundAccount.lastBillReading)
  })

  function handleSubmit() {
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
      alert(data);
      setShowModal(false);
      setPayload({
        ...payload,
        accountNumber: "",
        readingPresent: 0,
        chargeOthers: 0
      })
    })
    .catch(e => {
      console.log(e);
      alert("Oops.. Something went wrong...")
    })
  }


  return (
    <div className="issue-bill-modal">
      <div className="modal-dialog modal-lg modal-dialog-scrollable p-4">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title col d-flex justify-content-between">
              <p className="font-xl m-0 p-0">
                Statement of Account
              </p>
              <p className="font-xl m-0 p-0 pr-5">
                {`${billingDate.label} 2020`}
              </p>
            </div>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleClose}
              ></button>
          </div>
          <div className="modal-body">
            <p className="font-xl m-0 p-0" id="exampleModalLabel">
              {`Account No. ${foundAccount.accountNumber}`}
            </p>
            
            <div className="row">
              <p className="font-xl text-center">Meter Reading</p>
              <div className="col-md-4 my-0 py-0 text-center">
                <p className="font-weight-bold">Previous: </p>
                <div className="row align-items-center h-50">
                  <p className="my-0 py-0"> 
                    {`${foundAccount.lastBillReading} Cu. Meters`}
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-0 py-0 text-center">
                <p className="font-weight-bold">Present:</p>
                <div className="row align-items-center d-flex flex-row justify-content-center">
                  <div className="col-5">
                    <input 
                      type="number" 
                      id="inputPassword6" 
                      className="form-control text-right" 
                      aria-describedby="passwordHelpInline"
                      value={payload.readingPresent || 0} 
                      onChange={handlePresentReading}  
                    />
                  </div>
                  <div className="col-5">
                    <span id="passwordHelpInline" className="">
                      Cu. Meters
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-0 py-0 text-center">
                <p className="font-weight-bold">Used: </p>
                <div className="row align-items-center h-50">
                  <p className="my-0 py-0"> 
                    {`${payload.readingPresent - foundAccount.lastBillReading} Cu. Meters`} 
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-2">
              <p className="h5 font-weight-normal">Consumption</p>
              <div className="col-8 m-auto">
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold">Charges</p>
                  <p className="font-weight-bold">Rates</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="h6">0 - 10 Cu. M: </p>
                  <p className="">PHP 50.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="h6">Above 10 Cu. M: </p>
                  <p className="">PHP 11.00 / Cu. M</p>
                </div>
                <div className="d-flex justify-content-start">
                  <p className="h6">Others: </p>
                </div>
              </div>
              <div className="col-4 m-auto">
                <p className="font-weight-bold text-right">Amount</p>
                <div className="d-flex justify-content-end">
                  <p className="">50.00</p>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="">
                    {`${charges.chargeAboveTen}.00`}
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <p className="">
                    {`${payload.chargeOthers}.00`}
                  </p>
                </div>
              </div>
            </div>
            <hr className="" />
            <div className="row">
              <div className="col-6 ml-auto d-flex justify-content-between">
                <p className="h5 font-weight-normal">Total Amount</p>
                <p className="h5 font-weight-normal">
                  {`PHP ${charges.total}.00`}
                </p>
              </div>
            </div>



          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-outline-secondary" 
              onClick={handleClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit New Statement
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}