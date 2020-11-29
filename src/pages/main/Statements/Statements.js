
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDateStringToday } from "../../../hooks/useDateStringToday";



export const Statements = () => {

  const history = useHistory();
  const { path } = useRouteMatch();
  
  const dateStringToday = useDateStringToday();
 


  return (
    <div className="container">
      <p className="display-5 text-center py-3 pb-5">
        Statements
      </p>
      <div className="row g-4">
        <div style={{ fontSize: "1.5rem"}} className="my-3 col-md-10 mr-auto" >
          <span>Today is </span>
          <span> {dateStringToday && dateStringToday} </span>
        </div>
        <div className="my-2 col-md-8 mr-auto">
          Reminders:
          <ul className="mt-2">
            <li>In this page, you can issue new statements for the accounts on record.</li>
            <li>Upon issuance of the statements, each customer will receive an SMS through the mobile number they provided, which informs them of their new bill.</li>
            <li>Do not forget to verify if all the details are correct before issuing a new statement.</li>
            <li>To begin, press the Issue Statements button below.</li>
          </ul>
        </div>
      </div>
        <div className="col py-2">
          <button 
              className="btn btn-lg btn-outline-success col-md-6" 
              type="button"
              onClick={() => {history.push(`${path}/issue`)}}
            >
              Issue New Statements
            </button>
        </div>

      
    </div>
  )
}