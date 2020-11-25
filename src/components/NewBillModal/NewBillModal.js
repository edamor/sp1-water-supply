import "./style.css";


export const NewBillModal = ({setShowModal}) => {

  function handleClose() {
    setShowModal(false)
  }

  return (
    <div className="new-bill-modal">
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Issue Bill for</h5>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleClose}
              ></button>
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
            >
              View Accounts
            </button>
          </div>
        </div>
      </div>      
    </div>
  )
}