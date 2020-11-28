import { useEffect, useState } from "react"


export const AccountNumberField = ({values, setValues, errors}) => {

  function handleChange(e) {
    const regex = /^[0-9 -]*$/;
    if (regex.test(e.target.value)) {
      setValues({...values, accountNumber: e.target.value.trim()})
    } else {
      e.target.value.trim()
    }
  };

  const [state, setState] = useState("form-control");

  useEffect(() => {
    if (!errors.accountNumber) {
      setState("form-control")
    } else {
      setState("form-control is-invalid")
    }
  }, [errors])

  return (
    <div className="col-md-6">
      <label
        htmlFor="accountNumberId" 
        className="form-label"
      >
        Account Number
      </label>
      <input 
        type="text" 
        className={state}
        id="accountNumberId"
        placeholder="ex. 2020-00-01"
        value={values.accountNumber || ""}
        onChange={handleChange}
      />
      <div className="invalid-feedback">
        {errors.accountNumber || ""}
      </div>
    </div>
  )
}