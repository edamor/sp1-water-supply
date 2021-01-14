


export const SelectedBill = (props) => {
  const { 
    chargeOthers,
    chargePerAboveTen,
    cumUsed,
    dateStringIssued,
    dateStringFrom,
    dateStringTo,
    readingPresent,
    readingPrevious,
    totalAmountDue
  } = props;

  const BillDetail = ({alignRight, name, value}) => (
    <div className={`col-md-5 d-flex w-100 mb-1 justify-content-between ${alignRight && "ml-auto"}`}>
      <span style={{ fontWeight: "500"}}>
        {`${ name || "-" }:`}
      </span>
        { value || "-" }
    </div>
  ) 


  return (
    <div className="row g-3 py-2">
      
      <div className="col-md-5 d-flex flex-column">
        <BillDetail 
          name="Present Reading"
          value={readingPresent}
        />
        <BillDetail 
          name="Previous Reading"
          value={readingPrevious}
        />
        <BillDetail 
          name={"Used"}
          // value={cumUsed + "\u33a5"}
          value={cumUsed}
        />
      </div>

      <div className="col-md-5 d-flex flex-column ml-auto">
        <BillDetail 
          name="Date Issued"
          value={dateStringIssued}
          alignRight={true}
        />
        <BillDetail 
          name="From"
          value={dateStringFrom}
          alignRight={true}
        />
        <BillDetail 
          name="To"
          value={dateStringTo}
          alignRight={true}
        />
      </div>
      <div className="col-md-5 d-flex flex-column">
        <div style={{ fontSize: "1.1rem"}}>
          Rates
        </div>
        <BillDetail 
          name={"0\u33a5 to 10\u33a5"}
          value={"Php 50.00"}
        />
        <BillDetail 
          name={"Succeeding 10\u33a5"}
          value={"Php 11.00/\u33a5"}
        />
      </div>
      <div className="col-md-5 d-flex flex-column ml-auto">
        <div style={{ fontSize: "1.1rem"}}>
          Charges
        </div>
        <BillDetail 
          name={"0\u33a5 to 10\u33a5"}
          value={"Php 50.00"}
        />
        <BillDetail 
          name={"Succeeding 10\u33a5"}
          value={`Php ${chargePerAboveTen || "0"}.00`}
        />
        <BillDetail 
          name={"Other Charges:"}
          value={`Php ${chargeOthers || "0"}.00`}
        />
      </div>
      <div className="col-md-5 d-flex flex-column ml-auto">
        <div className="col-md-5 d-flex w-100 justify-content-between">
      <span style={{ fontWeight: "500", fontSize: "1.15rem"}}>
        {"Total Amount Due:"}
      </span>
        {`Php ${totalAmountDue || "0"}.00`}
    </div>
      </div>

    </div>
  )
}