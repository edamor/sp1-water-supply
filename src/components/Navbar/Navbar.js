import { NavLink, useHistory } from "react-router-dom";
import "./style.css";

export const Navbar = () => {

  const history = useHistory();

  let role = localStorage.getItem("role");

  let adminHomeTo = {
    pathname: "/admin",
    state: { from: history.location} 
  }
  let adminAccountsTo = {
    pathname: "/admin/accounts",
    state: { from: history.location} 
  }
    let customerHomeTo = {
    pathname: "/customer",
    state: { from: history.location} 
  }
  let customerStatementsTo = {
    pathname: "/customer/statements",
    state: { from: history.location} 
  }

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span>WebApp</span>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex w-25 justify-content-around">
            <NavLink 
              className="nav-link"
              activeClassName="active"
              exact
              to={role === "admin" ? adminHomeTo : customerHomeTo}
            >
              {role === "admin" ? "Home" : "Account"}
            </NavLink>
            <NavLink 
              className="nav-link"
              activeClassName="active"
              to={role === "admin" ? adminAccountsTo : customerStatementsTo}
            >
              {role === "admin" ? "Accounts" : "Bills"}
            </NavLink>
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
          </div>
          <div className="d-flex w-100 w-md-75 justify-content-md-end justify-content-center">
            <button
              type="button"
              className="btn btn-link sign-out-btn"
              onClick={() => {
                history.push("/login");
                localStorage.clear();
              }}
            >
              Sign Out
            </button>

          </div>
        </div>
      </div>
    </nav>    
  )
}