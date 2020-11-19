import { useHistory } from "react-router-dom";
import "./style.css";

export const BillCard = ({bill}) => {

  
  let from = new Date(bill.periodFrom).toDateString().substring(4,10);
  let to = new Date(bill.periodTo).toDateString().substring(4,10);

  let history = useHistory();


 

  return (
    <div className="container bill-card-wrapper">
      <div className="row pt-3">
        <div className="col-12 col-md-10 mx-auto">
          <div className="card">
            <div className="card-header">
              <div className="row py-2">
                <div className="col-12 col-md-2">
                  <div className="d-flex justify-content-between">
                    <p className="h5">Bill No.</p>
                    <p className="h5 font-weight-normal"> {`${bill.billNo}`} </p>
                  </div>                  
                </div>
                <div className="col-12 col-md-5 ml-auto">
                  <div className="d-flex justify-content-between">
                    <p className="h5">Period Covered:</p>
                    <p className="h5 font-weight-light"> 
                      {`${from} - ${to}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-2">
                <div className="col-6 p-2 m-auto">
                  <p className="h5 text-center">Meter Reading</p>
                  <div className="d-flex justify-content-between my-0 py-0">
                    <p className="font-weight-bold my-0 py-0">Present: </p>
                    <p className="my-0 py-0"> {bill.readingPresent} </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="font-weight-bold my-0 py-0">Previous: </p>
                    <p className="my-0 py-0"> {bill.readingPrevious} </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="font-weight-bold my-0 py-0">Used in Cu. Meters: </p>
                    <p className="my-0 py-0"> {bill.cumUsed} </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row g-2">
                <p className="h5 text-center">Consumption</p>
                <div className="col-8 m-auto">
                  <div className="d-flex justify-content-between">
                    <p className="font-weight-bold">Charges</p>
                    <p className="font-weight-bold">Rates</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="h6">0 - 10 CU.M: </p>
                    <p className="">PHP 50.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="h6">Above 10 CU.M: </p>
                    <p className="">PHP 11.00 / CU.M</p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <p className="h6">Others: </p>
                  </div>
                </div>
                <div className="col-4 m-auto">
                  <p className="font-weight-bold text-right">Amount</p>
                  <div className="d-flex justify-content-end">
                    <p className="">50.00</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p className="">
                      {`${ bill.chargePerAboveTen}.00`}
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p className="">
                      0.00
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-1" />
              <div className="row g-1">
                <div className="col-6 ml-auto d-flex justify-content-between">
                  <p className="h5">Total Amount</p>
                  <p className="h5">
                    {`PHP ${bill.totalAmountDue}.00`}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex w-100 justify-content-end">
                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  type="button"
                  onClick={() => {history.goBack()}}
                >
                  Go Back
                </button>

              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>

  )
}