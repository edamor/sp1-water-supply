import { useAccountsContext } from "../../../contexts/AllAccountsContext";
import { useBillingDate } from "../../../contexts/BillingDateContext";
import { useConsumptionAmount } from "../../../hooks/useConsumptionAmount";
import "./style.css";


export const IssueBillModal = ({payload, setPayload, setShowModal}) => {
  
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
    if (e.target.value.length < 4) {
      setPayload({
        ...payload,
        readingPresent: parseInt(e.target.value)
      })
    } else e.target.value.trim()
  }

  const charges = useConsumptionAmount({
    consumption: (payload.readingPresent - foundAccount.lastBillReading)
  })

  console.log(foundAccount);
  console.log(payload);
  console.log(charges);

  return (
    <div className="issue-bill-modal">
      <div className="modal-dialog modal-lg p-4">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {`Account No. ${foundAccount.accountNumber}`}
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleClose}
              ></button>
          </div>
          <div className="modal-body">
            <div className="col d-flex justify-content-between">
              <p className="h5 font-weight-normal">
                Statement of Account
              </p>
              <p className="h5 font-weight-normal">
                {billingDate.label}
              </p>
            </div>
            
            <div className="row g-2">
              <div className="col-8 p-2 mt-3 mx-auto">
                <p className="h5 font-weight-normal">Meter Reading in Cu. Meters</p>
                <div className="d-flex justify-content-between my-0 py-0">
                  <p className="font-weight-bold my-0 py-0">Previous: </p>
                  <p className="my-0 py-0"> {foundAccount.lastBillReading} </p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="col-auto  my-0 py-0">
                    <label htmlFor="presentReading" className="col-form-label font-weight-bold">Present:</label>
                  </div>
                  <div className="col-4">
                    <input 
                      type="number" 
                      id="presentReading"
                      className="form-control"
                      value={payload && payload.readingPresent} 
                      aria-describedby="passwordHelpInline" 
                      onChange={handlePresentReading}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div className="col-auto  my-0 py-0">
                    <label htmlFor="otherCharges" className="col-form-label font-weight-bold">Other Charges:</label>
                  </div>
                  <div className="col-4">
                    <input 
                      type="number" 
                      id="otherCharges"
                      className="form-control"
                      value={payload && payload.chargeOthers} 
                      aria-describedby="passwordHelpInline" 
                      onChange={(e) => {
                        if (e.target.value.length < 4) {
                          setPayload({
                            ...payload,
                            chargeOthers: parseInt(e.target.value)
                          })
                        }
                      }}
                    />
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <p className="font-weight-bold my-0 py-0">Used in Cu. Meters: </p>
                  <p className="my-0 py-0"> {bill.cumUsed} </p>
                </div> */}
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
                  <p className="h6">0 - 10 CU.M: </p>
                  <p className="">PHP 50.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="h6">Above 10 CU.M: </p>
                  <p className="">PHP 11.00 / CU.M</p>
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
            <hr className="my-1" />
            <div className="row g-1">
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
              className="btn btn-secondary" 
              onClick={handleClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
            >
              View Accounts
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}