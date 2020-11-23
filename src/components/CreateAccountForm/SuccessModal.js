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
            Account has been successfully created. Press 'Close' to create another account or press 'View Accounts' to go to the Accounts page.
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
              onClick={handleViewAccounts}
            >
              View Accounts
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}