import { useEffect, useState } from "react"


export const MeterSerialNumberField = ({values, setValues, errors}) => {

  function handleChange(e) {
    setValues({...values, meterSerialNumber: e.target.value})
  };

  const [state, setState] = useState("form-control");

  useEffect(() => {
    if (!errors.meterSerialNumber) {
      setState("form-control")
    } else {
      setState("form-control is-invalid")
    }
  }, [errors])

  return (
    <div className="col-md-6">
      <label
        htmlFor="meterSerialNumberId" 
        className="form-label"
      >
        Meter Serial Number
      </label>
      <input 
        type="text" 
        className={state}
        id="meterSerialNumberId"
        value={values.meterSerialNumber || ""}
        onChange={handleChange} 
      />
      <div className="invalid-feedback">
        {errors.meterSerialNumber || ""}
      </div>
    </div>
  )
}