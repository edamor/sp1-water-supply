import { useEffect, useState } from "react";
import { AccountDetailsModal } from "../../../components/AccountDetailsModal/AccountDetailsModal";
import { AccountsListing } from "../../../components/AccountsListing/AccountsListing"
import Loader from "../../../components/Loader/Loader";
import { useAccountsContext } from "../../../contexts/AllAccountsContext";


export const Accounts = () => {
  
  const [loading, setLoading] = useState(true);

  const { accounts } = useAccountsContext();

  const [showModal, setShowModal] = useState(false);
  const [viewAccount, setViewAccount] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  })

  return (
    <>
      <div className="container h-100">
        {showModal && <AccountDetailsModal account={viewAccount} setShowModal={setShowModal}  />}
        <p className="display-5 text-center py-3">
          Accounts
        </p>
        {
          loading ?
          <div className="row py-4">
            <Loader />
          </div>
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <AccountsListing 
                accounts={accounts} 
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