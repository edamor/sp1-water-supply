import "./style.css";


export const PopupNotif = (props) => {

  function handleClickOutside(e) {
    if (e.target.classList.contains("popup-notif-modal")) {
      props.hide();
    }
  }

  return (
    <div className="popup-notif-modal" onClick={handleClickOutside}>
      <div className="modal-dialog modal-sm modal-dialog-centered modal-fullscreen-md-down">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title font-l"> {props.title} </p>
            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"
            onClick={props.hide}></button>
          </div>
          <div className="modal-body">
            {props.loading && 
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            {!props.loading && <p> {props.message} </p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hide} disabled={props.loading}>
              {`${(props.title !== "Success" && props.title !== "Failed") ? "Cancel" : "Close"}`}
            </button>
            {(props.title !== "Success" && props.title !== "Failed") && 
              <button 
                type="button" 
                className="btn btn-success" 
                onClick={() => {
                  props.confirmAction(props.refNumber)
                }} 
                disabled={props.loading}
              >
                Confirm
              </button>
            }
          </div>
        </div>        
      </div>    
    </div>
  )
}