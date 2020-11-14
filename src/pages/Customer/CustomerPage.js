import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./style.css";

export const CustomerPage = () => {

  let { activeUser } = useContext(UserContext);

  console.log(activeUser);

  return (
    <div className="container customer-page-wrapper">
      <div className="row pt-4">
        <div className="col-12 col-md-8">
          <p className="display-5">
            My Account
          </p>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-end">
          <p className="h5">Account No.: <span className="font-weight-lighter">{activeUser.accountNo}</span></p>
        </div>
      </div>

      <dl className="row pt-4">
        <dt className="col-sm-3">Name</dt>
        <dd className="col-sm-9">
          {`${activeUser.name?.first} ${activeUser.name?.last}`}
        </dd>
        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">
          {activeUser.address ? activeUser.address : "NO ADDRESS"}
        </dd>
        <dt className="col-sm-3">Mobile No.</dt>
        <dd className="col-sm-9">
          {activeUser.mobileNo === undefined ? "NO MOBILE NO." : `+63 ${activeUser.mobileNo}`}   
        </dd>
        <dt className="col-sm-3">Meter Serial No.</dt>
        <dd className="col-sm-9">
          {activeUser.meterSerialNo ? activeUser.meterSerialNo : "NO METER SERIAL NO."}
        </dd>
      </dl>

      <hr />

      <div>
        <button
          className="btn btn-success"
          type="button"
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