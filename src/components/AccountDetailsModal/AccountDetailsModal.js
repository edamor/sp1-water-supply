import { BillSection } from "./BillSection";
import "./style.css"


export const AccountDetailsModal = ({account, setShowModal}) => {

  function handleClose() {
    setShowModal(false)
  }

  console.log(account);
  

  return (
    <div className="account-details-modal">
      <div className="modal-dialog modal-lg details-modal">
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
                    `0${account.mobileNumber.substring(3,6)}-${account.mobileNumber.substring(6,9)}-${account.mobileNumber.substring(9)}`
                  }
                </span>
              </div>
              <div className="col-md-5 d-flex justify-content-between">
                <span className="font-weight-bold">Meter Serial No.: </span>
                <span> {account.meterSerialNumber} </span>
              </div>
            </div>
            <hr className="my-4" />

            <BillSection 
              account={account}
            />
            
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary"
              style={{ width: "180px"}} 
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