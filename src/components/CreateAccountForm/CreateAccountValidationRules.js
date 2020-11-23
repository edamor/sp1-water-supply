

export const validate = (values) => {
  let errors = {};

  if (!values.accountNumber) {
    errors.accountNumber = "Account Number is required"
  }

  if (!values.fullName) {
    errors.fullName = "Full Name is required"
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Mobile Number is required"
  }
  
  if (values.mobileNumber?.length < 10) {
    errors.mobileNumber = "Mobile Number must be 10 digits long"
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