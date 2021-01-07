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
      <div className="col-md-5 pt-1">
        <p className="font-3xl text-right p-0 m-0">Select Statement Period:</p>
      </div>
      <div className="col-md-4 mr-auto">
        <select 
          className="form-select form-select-lg mb-3 " 
          aria-label="period select"
          defaultChecked={true}
          defaultValue={monthIndex}
          onChange={handleChange}
        >
          {months && months.map((item, index) => (
            (index > (monthIndex - 2) && index < (monthIndex + 3)) &&
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