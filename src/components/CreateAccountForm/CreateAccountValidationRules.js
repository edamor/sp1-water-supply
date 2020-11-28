

export const validate = (values) => {
  let errors = {};
  const mobileRegex = /^([+0]63)?[9]{1}[0-9]{9}$/;
  const accountRegex = /^[0-9]{4}\-?[0-9]{2}\-?[0-9]+/;

  if (!values.accountNumber) {
    errors.accountNumber = "Account Number is required"
  }
  
  if (!accountRegex.test(values.accountNumber)) {
    errors.accountNumber = "Invalid format (valid ex. 2016-09-03)"
  }

  if (!values.fullName) {
    errors.fullName = "Full Name is required"
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Mobile Number is required"
  }
  
  if (!mobileRegex.test(values.mobileNumber)) {
    errors.mobileNumber = "Invalid mobile number (valid ex. +639065338541)"
  }

  if (values.mobileNumber?.length < 13) {
    errors.mobileNumber = "Mobile Number is too short"
  }

  if (!values.address) {
    errors.address = "Address is required"
  }

  if (!values.meterSerialNumber) {
    errors.meterSerialNumber = "Meter Serial Number is required"
  }
  
  if (values.existing) {
    if (!values.lastBillNumber) {
      errors.lastBillNumber = "Bill Number is required"
    }
    if (!values.lastBillReading) {
      errors.lastBillReading = "Reading is required"
    }
  }

  return errors;
}