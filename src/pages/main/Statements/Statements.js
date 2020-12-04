
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDateStringToday } from "../../../hooks/useDateStringToday";



export const Statements = () => {

  const history = useHistory();
  const { path } = useRouteMatch();
  
  const dateStringToday = useDateStringToday();
 


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p className="display-5 text-center py-3 pb-5">
            Statements
          </p>
          <div className="row g-4">
            <div style={{ fontSize: "1.5rem"}} className="my-3 col-md-10 mr-auto" >
              <span>Today is </span>
              <span> {dateStringToday && dateStringToday} </span>
            </div>
            <div className="my-2">
             <span className="font-xl">Important Reminders:</span>
              <ul className="mt-3">
                <li>After submitting the new statement, an SMS message will be sent to the mobile number of the account holder to inform them of their new bill.</li>
                <li>Do not forget to verify all the details before issuing a new statement.</li>
                <li>
                  Please note that only the unbilled accounts for the selected statement period will be shown in the list.
                </li>
                <li>
                  The available options for the statement period depends on current date.
                </li>
                <li>
                  Statements cannot be issued for months that are past the available statement period options.
                </li>
              
                <li>Begin by pressing the button below.</li>
              </ul>
            </div>
          </div>
          <div className="col py-2 text-center">
            <button 
                className="btn btn-lg btn-outline-success col-md-6" 
                type="button"
                onClick={() => {history.push(`${path}/issue`)}}
              >
                Begin Issuing Statements
              </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}