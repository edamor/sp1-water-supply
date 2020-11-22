import { useEffect, useState } from "react"


export const MobileNumberField = ({values, setValues, errors}) => {

  function handleChange(e) {
    setValues({...values, mobileNumber: e.target.value.trim()})
  };

  const [state, setState] = useState("form-control");

  useEffect(() => {
    if (!errors.mobileNumber) {
      setState("form-control")
    } else {
      setState("form-control is-invalid")
    }
  }, [errors])

  return (
    <div className="col-md-6">
      <label
        htmlFor="mobileNumberId" 
        className="form-label"
      >
        Mobile Number
      </label>
      <input 
        type="number" 
        className={state}
        id="mobileNumberId"
        value={values.mobileNumber || ""}
        onChange={handleChange} 
      />
      <div className="invalid-feedback">
        {errors.mobileNumber || ""}
      </div>
    </div>
  )
}