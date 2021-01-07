import { useConsumptionAmount } from "../../hooks/useConsumptionAmount";
import "./style.css"


export const AccountDetailsModal = ({account, setShowModal}) => {

  function handleClose() {
    setShowModal(false)
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const {total} = useConsumptionAmount(account.lastBillReading);

  return (
    <div className="account-details-modal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title h4" id="account-details-modal">
              {`Account No.: ${account.accountNumber}`}
            </p>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleClose}
              ></button>
          </div>
          <div className="modal-body p-4">
            <div className="row g-4">
              <div className="col-10 h4 font-weight-normal">Account Information</div>
              <div className="col-md-5 d-flex justify-content-between mr-auto">
                <span className="font-weight-bold">Full Name:</span>
                <span>{account.fullName}</span> 
              </div>
              <div className="col-md-5 d-flex justify-content-between">
                <span className="font-weight-bold">Address: </span>
                <span> {account.address} </span>
              </div>
              <div className="col-md-5 d-flex justify-content-between mr-auto">
                <span className="font-weight-bold">Mobile No.: </span>
                <span>
                  {
                    `${account.mobileNumber.substring(0,3)} ${account.mobileNumber.substring(3,6)}-${account.mobileNumber.substring(6,9)}-${account.mobileNumber.substring(9)}`
                  }
                </span>
              </div>
              <div className="col-md-5 d-flex justify-content-between">
                <span className="font-weight-bold">Meter Serial No.: </span>
                <span> {account.meterSerialNumber} </span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row g-4">
              <div className="col-6 h5">Previous Statement Summary</div>
              <div className="col-md-5 d-flex justify-content-between ml-auto">
                <span className="font-weight-bold">Month Covered:</span>
                  {
                    account.lastBillPeriodTo === 0 ? "-" 
                    : `${months[new Date(account.lastBillPeriodTo).getMonth() === 0 ? 11 : new Date(account.lastBillPeriodTo).getMonth()-1]} - ${months[new Date(account.lastBillPeriodTo).getMonth()]}`
                  }
              </div>
              <div className="col-md-5 d-flex justify-content-between mr-auto">
                <span className="font-weight-bold">Amount Due: </span>
                <span>
                  {account.lastBillReading === 0 ? "-" : `Php ${total}.00`}
                </span>
              </div>
              <div className="col-md-5 d-flex justify-content-between">
                <span className="font-weight-bold">Meter Reading: </span>
                <span> 
                  {account.lastBillReading === 0 ? "-" : `${account.lastBillReading} Cu. Meters`}
                </span>
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
          </div>
        </div>
      </div>      
    </div>
  )
}