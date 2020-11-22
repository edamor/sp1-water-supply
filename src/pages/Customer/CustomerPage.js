import { useHistory } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
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



  
  const showLoadingScreen = (res) => {
    if (!res) {
      return (
        <Loader />
      )
    } else return (
      <dl className="row pt-4">
        <dt className="col-sm-3">Name</dt>
        <dd className="col-sm-9">
          {data.fullName}
        </dd>
        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">
          {data.address ? data.address : "No Address"}
        </dd>
        <dt className="col-sm-3">Mobile No.</dt>
        <dd className="col-sm-9">
          {data.mobileNumber === undefined ? "No Mobile Number" :
          `+63-${data.mobileNumber.toString().substring(0,3)}-
          ${data.mobileNumber.toString().substring(3)}`}   
        </dd>
        <dt className="col-sm-3">Meter Serial No.</dt>
        <dd className="col-sm-9">
          {data.meterSerialNumber ? data.meterSerialNumber : "NO METER SERIAL NO."}
        </dd>
      </dl>
    )
  }


  


  return (
    <div className="container customer-page-wrapper">
      <div className="row pt-4">
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

      <hr />

      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            history.push({
              pathname: "/customer/bills",
              state: {from: history.location}
            })
          }}
        >
          View My Bills
        </button>
      </div>
    </div>
  )
}


// Account No.:
// Meter Serial No.:

// Name:
// Address:
// Mobile No.: 