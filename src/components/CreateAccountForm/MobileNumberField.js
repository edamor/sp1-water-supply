import { useEffect, useState } from "react"


export const MobileNumberField = ({values, setValues, errors}) => {

  function handleChange(e) {
    const regex = /^([+0]63)?[0-9]*$/;
    if (regex.test(e.target.value) && e.target.value.length < 14 && e.target.value.length >= 3) {
      setValues({...values, mobileNumber: e.target.value})
    } else e.target.value.trim();
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
        type="text" 
        className={state}
        id="mobileNumberId"
        placeholder="ex. 9179876543"
        value={values.mobileNumber || ""}
        onChange={handleChange} 
      />
      <div className="invalid-feedback">
        {errors.mobileNumber || ""}
      </div>
    </div>
  )
}