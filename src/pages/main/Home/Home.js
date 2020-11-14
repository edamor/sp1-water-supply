import { QuickSearch } from "../../../components/QuickSearch/QuickSearch"
import "./style.css";

export const Home = () => {

  return (
      <div className="home-wrapper container d-flex flex-column justify-content-around">
        <p className="h3 text-center">
          Search for an Account
        </p>

        <div className="">
          <QuickSearch />
        </div>
      </div>

  )
}