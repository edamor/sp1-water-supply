import { BarangayList } from "../../../components/BarangayList/BarangayList";
import { QuickSearch } from "../../../components/QuickSearch/QuickSearch"
import "./style.css";

export const Home = () => {

  return (
      <div className="home-wrapper container d-flex flex-column justify-content-around">
        

        <div className="row w-100 ">
          <div className="col-12 col-md-8 mx-auto">
            <p className="display-6 text-center">
              Search for an Account
            </p>
            <QuickSearch />
          </div>
        </div>
        <div className="row w-100 ">
          <div className="col-12 col-md-10 mx-auto">
            <p className="display-6 text-center">
              Issue New Statements per Barangay
            </p>
            <BarangayList />
          </div>
        </div>
        <div className="row w-100 ">
          <div className="col-12 col-md-10 mx-auto">
            <p className="display-6 text-center">
              Create a New Account
            </p>
            
          </div>
        </div>
      </div>

  )
}