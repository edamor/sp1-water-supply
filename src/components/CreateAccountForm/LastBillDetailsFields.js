import { useEffect, useState } from "react";



export const LastBillDetailsFields = ({values, setValues, errors}) => {

  const monthList = [
    {
      label: "January",
      value: 1580140800000
    },
    {
      label: "February",
      value: 1582819200000
    },
    {
      label: "March",
      value: 1585324800000
    },
    {
      label: "April",
      value: 1588003200000
    },
    {
      label: "May",
      value: 1590595200000
    },
    {
      label: "June",
      value: 1593273600000
    },
    {
      label: "July",
      value: 1595865600000
    },
    {
      label: "August",
      value: 1598544000000
    },
    {
      label: "September",
      value: 1601222400000
    },
    {
      label: "October",
      value: 1603814400000
    },
    {
      label: "November",
      value: 1606492800000
    },
    {
      label: "December",
      value: 1609084800000
    }
  ];

  const [lastBillNumberState, setLastBillNumberState] = useState("form-control");
  const [lastBillReadingState, setLastBillReadingState] = useState("form-control");

  useEffect(() => {
    if (errors.lastBillNumber) {
      setLastBillNumberState(s => s = "form-control is-invalid")
    } else {
      setLastBillNumberState(s => s = "form-control")
    }
    
    if (errors.lastBillReading) {
      setLastBillReadingState(s => s = "form-control is-invalid")
    } else {
      setLastBillReadingState(s => s = "form-control")
    }
  }, [errors])

  return (
    <div className="row g-3">
      <p className="font-weight-bold  my-0 py-0">
        Most Recent Bill Details:
      </p>
      <div className="col-md-3">
          <label htmlFor="lastBillNumberId" className="form-label">
            Bill Number
          </label>
          <input 
            type="number" 
            className={lastBillNumberState} 
            id="lastBillNumberId" 
            onChange={(e) => {
              setValues({...values, lastBillNumber: e.target.value})
            }}
          />
          <div className="invalid-feedback">
            {errors.lastBillNumber || ""}
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="lastBillReadingId" className="form-label">
            Reading
          </label>
          <input 
            type="number"
            className={lastBillReadingState}
            id="lastBillReadingId"
            onChange={(e) => {
              setValues({...values, lastBillReading: e.target.value})
            }}
          />
          <div className="invalid-feedback">
            {errors.lastBillReading || ""}
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="lastBillYearId" className="form-label">
            Year
          </label>
          <select 
            id="lastBillYearId" 
            className="form-select"
          >
            <option value={1577808000000} defaultChecked={true}>
              2020
            </option>
          </select> 
        </div>
        <div className="col-md-3">
          <label htmlFor="lastBillPeriodToId" className="form-label">
            Month
          </label>
          <select 
            id="lastBillPeriodToId" 
            className="form-select"
            defaultChecked={true}
            onChange={(e) => {
              setValues({...values, lastBillPeriodTo: e.target.value})
            }}
          >
            {monthList.map(item => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select> 
        </div>
      {/* <div className="col-md-12 d-flex justify-content-around">
        
      </div> */}
    </div>    
  )
}