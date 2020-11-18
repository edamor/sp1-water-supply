import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { tokenParser } from "../../utils/TokenParser";
import "./style.css";


export const CustomerPage = () => {
  const TOKEN = localStorage.getItem("token");
  const acctNumber = tokenParser(TOKEN).account.accountNumber
  console.log(acctNumber);
  const API = `/account-management/accounts/${acctNumber}`;
  const history = useHistory();
  
  const { data, loading } = useFetch({
    endpoint: API,
    token: TOKEN 
  })

  
  const showLoadingScreen = () => {
    if (!data) {
      return (
        <div className="d-flex w-100 bg-success align-items-center justify-content-center" style={{"height": "300px"}}>
          <div className="spinner-grow" style={{
            "width": "2.5rem",
            "height" : "2.5rem",
            transitionDelay: "0.2s"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-3" style={{
            "width": "3rem",
            "height" : "3rem",
            transitionDelay: "0.6"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" style={{
            "width": "2.5rem",
            "height" : "2.5rem",
            transitionDelay: "1s"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
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

      {showLoadingScreen()}

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