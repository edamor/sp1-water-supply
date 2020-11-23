import { useEffect, useState } from "react"


export const AddressField = ({errors}) => {

  

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
        value={"Alcantara, Romblon"}
        disabled={true}
      />
      <div className="invalid-feedback">
        {errors.address || ""}
      </div>
    </div>
  )
}