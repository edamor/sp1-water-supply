
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
              Reminders:
              <ul className="mt-2">
                <li>After submitting the new statement, an SMS message will be sent to the mobile number of the account holder to inform them of their new bill.</li>
                <li>Do not forget to verify all the details before issuing a new statement.</li>
                <li>To begin, press the Issue New Statements button below.</li>
              </ul>
            </div>
          </div>
          <div className="col py-2">
            <button 
                className="btn btn-lg btn-outline-primary col-md-6" 
                type="button"
                onClick={() => {history.push(`${path}/issue`)}}
              >
                Issue New Statements
              </button>
          </div>
        </div>
      </div>

      
    </div>
  )
}