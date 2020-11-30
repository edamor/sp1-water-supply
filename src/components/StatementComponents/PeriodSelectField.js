import { useBillingDate } from "../../contexts/BillingDateContext";





export const PeriodSelectField = ({payload, setPayload, monthIndex}) => {
  

  const months = useBillingDate();

  function handleChange(e) {
    setPayload({
      ...payload,
      periodFrom: months[e.target.value].value.periodFrom,
      periodTo: months[e.target.value].value.periodTo
    })
  }



  return (
    <div className="row py-4">
      <div className="col-md-4 d-flex flex-column justify-content-center">
        <p className="h4">Select Statement Period:</p>
      </div>
      <div className="col-md-8">
        <select 
          className="form-select form-select-lg mb-3 " 
          aria-label="period select"
          defaultChecked={true}
          defaultValue={monthIndex}
          onChange={handleChange}
        >
          {months && months.map((item, index) => (
            (index > monthIndex - 1) &&
            <option
              key={index}
              value={index}
            >
              {item.label}
            </option>
          ))} 
        </select>
      </div>
    </div>    
  )
}