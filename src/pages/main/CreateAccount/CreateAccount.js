import { useRef, useState } from "react";



export const CreateAccount = () => {

  let isExistingRef = useRef(true);
  let accountNumberRef = useRef(true);
  let fullNameRef = useRef(true);
  let mobileNumberRef = useRef(true);
  let addressRef = useRef(true);
  let barangayRef = useRef(true);

  const [isExisting, setIsExisting] = useState(false);

  const inputFields = [
    {
      id: "accountNumber",
      label: "Account No.",
      placeholder: "ex. 2020-00-032",
      type: "text",
      className: "col-md-6",
      ref: accountNumberRef
    },
    {
      id: "mobileNumber",
      label: "Mobile No.",
      placeholder: "ex. 9278329101",
      type: "number",
      className: "col-md-6",
      ref: mobileNumberRef
    },
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "Juan Santos",
      type: "text",
      className: "col-md-12",
      ref: fullNameRef
    },
    {
      id: "address",
      label: "Address",
      placeholder: "ex. Pob., Alcantara, Romblon",
      type: "text",
      className: "col-md-8",
      ref: addressRef
    }
  ];

  const showInputFields = (x) => (
    x.map(item => (
      <div className={item.className}>
        <label for={item.id} className="form-label">{item.label}</label>
        <input type={item.type} className="form-control" id={item.id} ref={item.ref} />
      </div>
    ))
  );


  const barangayList = [
    {
      label: "Poblacion",
      value: "POB"
    },
    {
      label: "Gui-ob",
      value: "GUI"
    },
    {
      label: "Madalag",
      value: "MAD"
    },
    {
      label: "Bagsik",
      value: "BAG"
    },
    {
      label: "Lawan",
      value: "LAW"
    },
    {
      label: "Camili",
      value: "CAM"
    },
  ]


  return (
    <div className="container">
      <p className="display-6 text-center py-2">
        New Account
      </p>
      <form className="row g-3">
        <div className="col-md-12">
          <p className="font-weight-bold">
            Select if account is new or existing from old system
          </p>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="newOrExistingAccountOptions" 
              id="newAccount" 
              value={false}
              onChange={(e) => {
                console.log("New: \t" + e.target.value);
              }}
            />
            <label className="form-check-label" for="newAccount">New</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="newOrExistingAccountOptions" 
              id="existingAccount" 
              value={true}
              onChange={(e) => {
                console.log("New: \t" + e.target.value);
              }}
            />
            <label className="form-check-label" for="existingAccount">Existing</label>
          </div>
        </div>

        {showInputFields(inputFields)}
        
        <div className="col-md-4">
          <label for="inputBarangay" className="form-label">Barangay</label>
          <select id="inputBarangay" className="form-select">
            <option selected disabled value="">Choose a barangay</option>
            {barangayList.map(item => <option value={item.value}>{item.label}</option>)}
          </select> 
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}