


export const validateStatement = (payload, account) => {
  const errors = {};

  if (!payload.accountNumber) {
    errors.accountNumber = "Account number is required for issuing."
  }

  if (!payload.periodFrom) {
    errors.periodFrom = "You must select the period covered for this statement."
  }
  if (typeof payload.periodFrom !== "number") {
    errors.periodFrom = "A valid statement period must be selected."
  }

  if (!payload.periodTo) {
    errors.periodTo = "You must select the period covered for this statement."
  }
  if (typeof payload.periodTo !== "number") {
    errors.periodTo = "A valid statement period must be selected."
  }

  if (!payload.readingPresent) {
    errors.readingPresent = "Present Meter Reading is required. Please try again."
  }

  if (payload.readingPresent < account.lastBillReading) {
    errors.readingPresent = "Present Meter Reading should not be less than previous reading."
  }



  return errors;
}