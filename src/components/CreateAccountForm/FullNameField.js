import { useEffect, useState } from "react"


export const FullNameField = ({values, setValues, errors}) => {

  function handleChange(e) {
    setValues({...values, fullName: e.target.value})
  };

  const [state, setState] = useState("form-control");

  useEffect(() => {
    if (!errors.fullName) {
      setState("form-control")
    } else {
      setState("form-control is-invalid")
    }
  }, [errors])

  return (
    <div className="col-md-6">
      <label
        htmlFor="fullNameId" 
        className="form-label"
      >
        Full Name
      </label>
      <input 
        type="text" 
        className={state}
        id="fullNameId"
        placeholder="ex. Juan Dela Cruz"
        value={values.fullName || ""}
        onChange={handleChange} 
      />
      <div className="invalid-feedback">
        {errors.fullName || ""}
      </div>
    </div>
  )
}