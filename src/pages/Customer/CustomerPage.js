import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useConsumptionAmount } from "../../hooks/useConsumptionAmount";
import { useFetch } from "../../hooks/useFetch";
import { tokenParser } from "../../utils/TokenParser";
import "./style.css";


export const CustomerPage = () => {
  const TOKEN = localStorage.getItem("token");
  const acctNumber = tokenParser(TOKEN).account.accountNumber;
  const API = `/account-management/accounts/${acctNumber}/account`;
  const history = useHistory();
  
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN 
  });


  const {total} = useConsumptionAmount({consumption: data?.lastBillReading});

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const showLoadingScreen = (res) => {
    if (!res) {
      return (
        <Loader />
      )
    } else return (
      <dl className="row pt-4">
        <dt className="col-sm-3 h5">Name</dt>
        <dd className="col-sm-9">
          {data.fullName}
        </dd>
        <dt className="col-sm-3 h5">Address</dt>
        <dd className="col-sm-9">
          {data.address ? data.address : "No Address"}
        </dd>
        <dt className="col-sm-3 h5">Mobile No.</dt>
        <dd className="col-sm-9">
          {data.mobileNumber === undefined ? "No Mobile Number" : 
          `${data.mobileNumber.substring(0,3)} ${data.mobileNumber.substring(3,6)}-${data.mobileNumber.substring(6,9)}-${data.mobileNumber.substring(9)}`}   
        </dd>
        <dt className="col-sm-3 h5">Meter Serial No.</dt>
        <dd className="col-sm-9">
          {data.meterSerialNumber ? data.meterSerialNumber : "NO METER SERIAL NO."}
        </dd>
        <hr className="my-4" />
        <dt className="col-12 pb-2 h5">Most Recent Bill Details</dt>
        <dt className="col-sm-3">Month Covered</dt>
        <dd className="col-sm-9">
          {
            data.lastBillPeriodTo === 0 ? "-" 
            : `${months[new Date(data.lastBillPeriodTo).getMonth()-1]}-${months[new Date(data.lastBillPeriodTo).getMonth()]}`
          }
        </dd>
        <dt className="col-sm-3">Meter Reading</dt>
        <dd className="col-sm-9">
          {data.lastBillReading === 0 ? "-" : `${data.lastBillReading} Cu. Meters`}
        </dd>
        <dt className="col-sm-3">Amount Due</dt>
        <dd className="col-sm-9">
          {`Php ${total}.00`}
        </dd>
        <div>
        <button
          className="btn btn-success btn-lg w-25 mt-3"
          type="button"
          onClick={() => {
            history.push({
              pathname: "/customer/bills",
              state: {from: history.location}
            })
          }}
        >
          View Bills
        </button>
      </div>
      </dl>
    )
  }


  


  return (
    <div className="container customer-page-wrapper">
      <div className="row pt-3">
        <div className="col-12 col-md-8">
          <p className="display-5">
            My Account
          </p>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-end">
          <p className="h5">
            Account No.: <span className="font-weight-lighter">{acctNumber}</span>
          </p>
        </div>
      </div>

      {showLoadingScreen(data)}


      
    </div>
  )
}


// Account No.:
// Meter Serial No.:

// Name:
// Address:
// Mobile No.: 