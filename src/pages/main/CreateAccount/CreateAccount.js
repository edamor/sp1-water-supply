import { useRef, useState } from "react";
import { CreateAccountButton } from "../../../components/CreateAccountButton/CreateAccountButton";



export const CreateAccount = () => {

  // States
  const [accountNumber, setAccountNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [barangay, setBarangay] = useState("POB");
  const [lastBillNumber, setLastBillNumber] = useState(0);
  const [lastBillReading, setLastBillReading] = useState(0);
  const [lastBillPeriodTo, setLastBillPeriodTo] = useState(0);
  const [meterSerialNumber, setMeterSerialNumber] = useState("");
  const [isExisting, setIsExisting] = useState(false);


  // Refs
  let accountNumberRef = useRef(true);
  let meterSerialNumberRef = useRef(true);
  let fullNameRef = useRef(true);
  let mobileNumberRef = useRef(true);
  let addressRef = useRef(true);
  let barangayRef = useRef(true);
  let lastBillNumberRef = useRef(true);
  let lastBillReadingRef = useRef(true);

  

  const primaryInputFields = [
    {
      id: "accountNumber",
      label: "Account No.",
      placeholder: "ex. 2020-00-032",
      type: "text",
      className: "col-md-6",
      ref: accountNumberRef,
      value: accountNumber,
      handleChange: (e) => setAccountNumber(e),
      maxLength: 10
    },
    {
      id: "meterSerialNumber",
      label: "Meter Serial No.",
      placeholder: "ex. EVJ 3324211",
      type: "text",
      className: "col-md-6",
      ref: meterSerialNumberRef,
      value: meterSerialNumber,
      handleChange: (e) => setMeterSerialNumber(e),
      maxLength: 24
    },
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "ex. Juan Santos",
      type: "text",
      className: "col-md-6",
      ref: fullNameRef,
      value: fullName,
      handleChange: (e) => setFullName(e),
      maxLength: 120
    },
    {
      id: "mobileNumber",
      label: "Mobile No.",
      placeholder: "ex. 9278329101",
      type: "number",
      className: "col-md-6",
      ref: mobileNumberRef,
      value: mobileNumber,
      handleKeyPress: (e) => {
        if (mobileNumberRef.current.value.length >= 10) {
          return false;
        }
      },
      handleChange: (e) => {
        setMobileNumber(e);
      },
      maxLength: 9
    },
    {
      id: "address",
      label: "Address",
      placeholder: "ex. Pob., Alcantara, Romblon",
      type: "text",
      className: "col-md-6",
      ref: addressRef,
      value: address,
      handleChange: (e) => setAddress(e),
      maxLength: 120
    }
  ];

  const showPrimaryInputFields = (x) => (
    x.map(item => (
      (item.id === "mobileNumber") ?
      <div className={item.className} key={item.id}>
        <label htmlFor={item.id} className="form-label">{item.label}</label>
        <input 
          type={item.type} 
          className="form-control" 
          id={item.id} 
          ref={item.ref}
          placeholder={item.placeholder}
          maxLength={item.maxLength}
          onKeyPress={(e) => item.handleKeyPress(e.target.value.trim())}
          onChange={(e) => item.handleChange(e.target.value.trim())}
        />
      </div>
      :
      <div className={item.className} key={item.id}>
        <label htmlFor={item.id} className="form-label">{item.label}</label>
        <input 
          type={item.type} 
          className="form-control" 
          id={item.id} 
          ref={item.ref}
          placeholder={item.placeholder}
          maxLength={item.maxLength}
          onChange={(e) => item.handleChange(e.target.value.trim())}
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
      placeholder: "0",
      type: "number",
      ref: lastBillNumberRef,
      handleChange: (e) => setLastBillNumber(e)
    },
    {
      id: "lastBillReading",
      label: "Latest Meter Reading",
      placeholder: "0",
      type: "number",
      ref: lastBillReadingRef,
      handleChange: (e) => setLastBillReading(e)
    }
  ];

  const yearList = [
    {
      id: "2020",
      value: 1577808000000
    }
  ];

  const monthList = [
    {
      label: "January",
      value: 1580140800000
    },
    {
      label: "February",
      value: 1582819200000
    },
    {
      label: "March",
      value: 1585324800000
    },
    {
      label: "April",
      value: 1588003200000
    },
    {
      label: "May",
      value: 1590595200000
    },
    {
      label: "June",
      value: 1593273600000
    },
    {
      label: "July",
      value: 1595865600000
    },
    {
      label: "August",
      value: 1598544000000
    },
    {
      label: "September",
      value: 1601222400000
    },
    {
      label: "October",
      value: 1603814400000
    },
    {
      label: "November",
      value: 1606492800000
    },
    {
      label: "December",
      value: 1609084800000
    }
  ]

  
  const ifExisting = () => (
    <div className="col-md-12 pb-1">
      <p className="text-center font-weight-bold">Latest Bill Information: </p>
      <div className="col-md-12 d-flex justify-content-around">
        {lastBillInputFields.map(item => (
          <div className="col-md-3 mr-1" key={item.id}>
            <label htmlFor={item.id} className="form-label">
              {item.label}
            </label>
            <input 
              type={item.type} 
              className="form-control" 
              id={item.id} 
              placeholder={item.placeholder}
              ref={item.ref}
              onChange={(e) => item.handleChange(e.target.value)}
            />
          </div>
        ))}
        <div className="col-md-3 mr-1">
          <label htmlFor="inputLastBillYear" className="form-label">Year</label>
          <select 
            id="inputLastBillYear" 
            className="form-select"
          >
            {yearList.map(item => (
              <option key={item.id} value={item.value} defaultChecked={true}>
                {item.id}
              </option>
            ))}
          </select> 
        </div>
        <div className="col-md-3">
          <label htmlFor="inputLastBillMonth" className="form-label">Month</label>
          <select 
            id="inputLastBillMonth" 
            className="form-select"
            defaultChecked={true}
            onChange={(e) => setLastBillPeriodTo(e.target.value)}
          >
            {monthList.map(item => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select> 
        </div>
      </div>
    </div>
    
  )

  



  return (
    <div className="container">
      <p className="display-6 text-center py-2">
        New Account
      </p>
      <form className="row g-3">
        {showPrimaryInputFields(primaryInputFields)}
        
        <div className="col-md-6">
          <label htmlFor="inputBarangay" className="form-label">Barangay</label>
          <select 
            id="inputBarangay" 
            className="form-select" 
            ref={barangayRef} 
            defaultChecked={true}
            defaultValue={barangayList[0].value}
          >
            {barangayList.map(item => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select> 
        </div>

        <div className="col-md-12">
          <p className="form-check-label text-center font-weight-bold">
            Select if Account is New or Existing
          </p>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="form-check form-check-inline mx-5">
              <input 
                className="form-check-input" 
                type="radio" 
                name="newOrExistingAccountOptions" 
                id="newAccount"
                value={false}
                checked={!isExisting} 
                onChange={(e) => {
                  console.log("New: \t" + e.target.value);
                  setIsExisting(false);
                  lastBillNumberRef.current.value = 0;
                  lastBillReadingRef.current.value = 0;
                  setLastBillPeriodTo(0);
                }}
              />
              <label className="form-check-label" htmlFor="newAccount">New</label>
            </div>
            <div className="form-check form-check-inline mx-5">
              <input 
                className="form-check-input" 
                type="radio" 
                name="newOrExistingAccountOptions" 
                id="existingAccount" 
                value={true}
                checked={isExisting}
                onChange={(e) => {
                  console.log("New: \t" + e.target.value);
                  setIsExisting(true);
                  setLastBillPeriodTo(1580140800000);
                }}
              />
              <label className="form-check-label" htmlFor="existingAccount">Existing</label>
            </div>
          </div>
        </div>
        
        {isExisting && ifExisting()}

        <div className="col-12 text-center">
          <CreateAccountButton 
            accountNumber={accountNumber}
            fullName={fullName}
            mobileNumber={mobileNumber}
            address={address}
            barangay={barangay}
            lastBillNumber={lastBillNumber}
            lastBillReading={lastBillReading}
            lastBillPeriodTo={lastBillPeriodTo}
            existing={isExisting}
          />
        </div>
      </form>
    </div>
  )
}