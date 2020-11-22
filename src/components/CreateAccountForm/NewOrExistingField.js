

export const NewOrExistingField = ({values, setValues}) => {

  

  return (
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
            id="newAccountId"
            value={false}
            checked={!values.existing} 
            onChange={() => {
              setValues({
                ...values, 
                existing: false,
                lastBillNumber: 0,
                lastBillReading: 0,
                lastBillPeriodTo: 0
              })
            }}
          />
          <label className="form-check-label" htmlFor="newAccountId">New</label>
        </div>
        <div className="form-check form-check-inline mx-5">
          <input 
            className="form-check-input" 
            type="radio" 
            name="newOrExistingAccountOptions" 
            id="existingAccountId" 
            value={true}
            checked={values.existing} 
            onChange={() => {
              setValues({
                ...values, 
                existing: true,
                lastBillPeriodTo: 1580140800000
              })
            }}
          />
          <label className="form-check-label" htmlFor="existingAccountId">Existing</label>
        </div>
      </div>
    </div>
  )
}