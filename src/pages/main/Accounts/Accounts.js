import { useState } from "react";
import { AccountDetailsModal } from "../../../components/AccountDetailsModal/AccountDetailsModal";
import { AccountsListing } from "../../../components/AccountsListing/AccountsListing"
import Loader from "../../../components/Loader/Loader";
import { useFetch } from "../../../hooks/useFetch";


export const Accounts = () => {
  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  const [showModal, setShowModal] = useState(false);
  const [viewAccount, setViewAccount] = useState({});



  return (
    <>
      <div className="container h-100">
        {showModal && <AccountDetailsModal account={viewAccount} setShowModal={setShowModal}  />}
        <p className="display-5 text-center py-3">
          Accounts
        </p>
        {
          !data ?
          <div className="row py-4">
            <Loader />
          </div>
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <AccountsListing 
                accounts={data} 
                setShowModal={setShowModal} 
                selectAccount={setViewAccount} 
              />
            </div>
          </div>
        }
      </div>
    </>
  )
}