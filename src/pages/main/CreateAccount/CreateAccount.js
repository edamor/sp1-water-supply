import { useRef, useState } from "react";
import { CreateAccountButton } from "../../../components/CreateAccountButton/CreateAccountButton";



export const CreateAccount = () => {

  // States
  const [accountNumber, setAccountNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [barangay, setBarangay] = useState("");
  const [lastBillNumber, setLastBillNumber] = useState(0);
  const [lastBillReading, setLastBillReading] = useState(0);
  const [lastBillPeriodTo, setLastBillPeriodTo] = useState(0);
  const [meterSerialNumber, setMeterSerialNumber] = useState("");
  const [isExisting, setIsExisting] = useState(false);

  let [newOrExisting, setNewOrExisting] = useState("NEW");


  // Refs
  let accountNumberRef = useRef(true);
  let meterSerialNumberRef = useRef(true);
  let fullNameRef = useRef(true);
  let mobileNumberRef = useRef(true);
  let addressRef = useRef(true);
  let barangayRef = useRef(true);

  

  const primaryInputFields = [
    {
      id: "accountNumber",
      label: "Account No.",
      placeholder: "ex. 2020-00-032",
      type: "text",
      className: "col-md-4",
      ref: accountNumberRef
    },
    {
      id: "meterSerialNumber",
      label: "Meter Serial No.",
      placeholder: "ex. EVJ 3324211",
      type: "text",
      className: "col-md-4",
      ref: meterSerialNumberRef
    },
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "ex. Juan Santos",
      type: "text",
      className: "col-md-7",
      ref: fullNameRef
    },
    {
      id: "mobileNumber",
      label: "Mobile No.",
      placeholder: "ex. 9278329101",
      type: "number",
      className: "col-md-5",
      ref: mobileNumberRef
    },
    {
      id: "address",
      label: "Address",
      placeholder: "ex. Pob., Alcantara, Romblon",
      type: "text",
      className: "col-md-7",
      ref: addressRef
    }
  ];

  const showPrimaryInputFields = (x) => (
    x.map(item => (
      <div className={item.className} key={item.id}>
        <label for={item.id} className="form-label">{item.label}</label>
        <input 
          type={item.type} 
          className="form-control" 
          id={item.id} 
          ref={item.ref}
          placeholder={item.placeholder}
        />
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
  ];


  const lastBillInputFields = [
    {
      id: "lastBillNumber",
      label: "Latest Bill No.",
      placeholder: "ex. 56",
      type: "number"
    },
    {
      id: "lastBillReading",
      label: "Latest Meter Reading",
      placeholder: "ex. 56",
      type: "number"
    }
  ]

  
  const ifExisting = () => (
    <div className="col-md-6">
      {lastBillInputFields.map(item => (
        <div className="col-md-3" key={item.id}>
          <label for={item.id} class="form-label">
            {item.label}
          </label>
          <input 
            type={item.type} 
            class="form-control" 
            id={item.id} 
            placeholder={item.placeholder}
          />
        </div>
      ))}
    </div>
  )

  const lastBillPeriod = () => (
    <div className="col-md-6">
      <div className="col-md-3">
        <label for="inputLastBillYear" className="form-label">Year</label>
        <select id="inputLastBillYear" className="form-select">
          {barangayList.map(item => <option value={item.value}>{item.label}</option>)}
        </select> 
      </div>
      <div className="col-md-3">
        <label for="inputLastBillMonth" className="form-label">Month</label>
        <select id="inputLastBillMonth" className="form-select" >
          {barangayList.map(item => <option value={item.value}>{item.label}</option>)}
        </select> 
      </div>
    </div>
  )



  return (
    <div className="container">
      <p className="display-6 text-center py-2">
        New Account
      </p>
      <form className="row g-3">
        <div className="col-md-4">
          <label className="form-check-label">
            Select if Account is New or Existing
          </label>
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="radio" 
              name="newOrExistingAccountOptions" 
              id="newAccount"
              value={false}
              checked={!isExisting} 
              onChange={(e) => {
                console.log("New: \t" + e.target.value);
                setIsExisting(false)
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
              checked={isExisting}
              onChange={(e) => {
                console.log("New: \t" + e.target.value);
                setIsExisting(true)
              }}
            />
            <label className="form-check-label" for="existingAccount">Existing</label>
          </div>
        </div>

        {showPrimaryInputFields(primaryInputFields)}
        
        <div className="col-md-5">
          <label for="inputBarangay" className="form-label">Barangay</label>
          <select id="inputBarangay" className="form-select" ref={barangayRef}>
            <option selected disabled value="">Choose a barangay</option>
            {barangayList.map(item => <option value={item.value}>{item.label}</option>)}
          </select> 
        </div>
        
        {isExisting && ifExisting()}
        {isExisting && lastBillPeriod()}


        <div className="col-12">
          <CreateAccountButton />
        </div>
      </form>
    </div>
  )
}