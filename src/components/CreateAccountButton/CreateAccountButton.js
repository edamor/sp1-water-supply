

export const CreateAccountButton = ({
  accountNumber,
  fullName,
  mobileNumber,
  address,
  barangay,
  lastBillNumber,
  lastBillReading,
  lastBillPeriodTo,
  existing,
  validate
}) => {

  const payload = {
    accountNumber: accountNumber,
    fullName: fullName,
    mobileNumber: mobileNumber,
    address: address,
    barangay: barangay,
    lastBillNumber: lastBillNumber,
    lastBillReading: lastBillReading,
    lastBillPeriodTo: lastBillPeriodTo,
    existing: existing
  }

  const handleClick = (p) => {
    console.log(p);
    validate();
  }
  

  return (
    <button 
      type="button" 
      className="btn btn-primary w-50"
      onClick={() => {handleClick(payload)}}
    >
      Submit
    </button>
  )
}