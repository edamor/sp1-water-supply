import { useHistory } from "react-router-dom";
import "./successModal.css";



export const SuccessModal = ({setShowModal, setValues}) => {

  const history = useHistory();
  

  function handleClose() {
    setValues({
      accountNumber: "",
      meterSerialNumber: "",
      fullName: "",
      mobileNumber: "",
      barangay: "POB",
      address: "Poblacion, Alcantara, Romblon",
      existing: false, 
      lastBillNumber: 0,
      lastBillReading: 0,
      lastBillPeriodTo: 0
    });
    setShowModal(false)
  };

  function handleViewAccounts() {
    setShowModal(false)
    history.push("/admin/accounts");
  };



  return (
    <div className="success-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Submission Successful</h5>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <p>
              Account has been successfully created! 
            </p>
            <p>
              Go to Accounts page to view the newly created account or continue and create another account.
            </p>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-outline-primary"
              onClick={handleViewAccounts}
            >
              View Accounts
            </button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleClose}
            >
              Continue
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}