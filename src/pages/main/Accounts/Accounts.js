import { Listing } from "../../../components/Listing/Listing"
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
          ACCOUNTS
        </p>
        {
          !data ?
          <Loader />
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <Listing accounts={data} />
            </div>
          </div>
        }
      </div>
    </>
  )
}