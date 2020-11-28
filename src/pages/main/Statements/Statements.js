import { useState } from "react";
import { useDateStringToday } from "../../../hooks/useDateStringToday";
import { useStatementPeriod } from "../../../hooks/useStatementPeriod";



export const Statements = () => {

  const dateInstance = new Date();
  const dateStringToday = useDateStringToday();
  const [monthState, setMonthState] = useState(dateInstance.getMonth() - 1)
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const billPeriod = useStatementPeriod({
    year: dateInstance.getFullYear(),
    periodToIndex: monthState
  })


  return (
    <div className="container">
      <p className="display-5 text-center py-3">
        Statements
      </p>
      <div className="row g-4">
        <div style={{ fontSize: "1.5rem"}} className="my-2" >
          <span>Today is </span>
          <span> {dateStringToday && dateStringToday} </span>
        </div>
        <div className="col-md-6">
          <div className="col">
            <select 
              className="form-select form-select-lg mb-3" 
              aria-label="Select month for new statement"
            >
              {monthList.map((month, index) => (
                <option
                  key={month}
                  value={index}
                >
                  {`${month}, 2020`}
                </option>
              ))}
            </select>            
          </div>
          <div className="col"></div>
        </div>
        <div className="col-12">
          <div className="col">
            hello
          </div>
          <div className="col btn-group-vertical">
            <button 
              className="btn btn-lg btn-outline-success col-md-5" 
              type="button"
            >
              Single Account
            </button>
            <button 
              className="btn btn-lg btn-outline-success col-md-5" 
              type="button"
            >
              Multiple Accounts
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}