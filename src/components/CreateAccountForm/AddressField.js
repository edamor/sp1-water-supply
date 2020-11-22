import { useEffect, useState } from "react"


export const AddressField = ({values, setValues, errors}) => {

  function handleChange(e) {
    setValues({...values, address: e.target.value})
  };

  const [state, setState] = useState("form-control");

  useEffect(() => {
    if (!errors.address) {
      setState("form-control")
    } else {
      setState("form-control is-invalid")
    }
  }, [errors])

  return (
    <div className="col-md-6">
      <label
        htmlFor="addressId" 
        className="form-label"
      >
        Address
      </label>
      <input 
        type="text" 
        className={state}
        id="addressId"
        value={values.address || ""}
        onChange={handleChange} 
      />
      <div className="invalid-feedback">
        {errors.address || ""}
      </div>
    </div>
  )
}