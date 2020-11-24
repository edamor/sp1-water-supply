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



  return (
    <>
      <div className="container h-100">
        <p className="display-6 text-center pt-2">
          Accounts List
        </p>
        {
          !data ?
          <div className="row py-4">
            <Loader />
          </div>
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <AccountsListing accounts={data} />
            </div>
          </div>
        }
      </div>
    </>
  )
}