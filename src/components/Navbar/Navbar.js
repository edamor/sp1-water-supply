import { NavLink, useHistory } from "react-router-dom";
import "./style.css";

export const Navbar = () => {

  const history = useHistory();

  let role = localStorage.getItem("role");

  const adminNavItems = [
    {
      name: "Home", 
      to: {
        pathname: "/admin",
        state: { from: history.location}
      }
    },
    {
      name: "Accounts",
      to: {
        pathname: "/admin/accounts",
        state: { from: history.location}
      } 
    },
    {
      name: "Register",
      to: {
        pathname: "/admin/accounts/new",
        state: { from: history.location}
      } 
    }
  ]
  // ,
  //   {
  //     name: "Statements",
  //     to: {
  //       pathname: "/admin/statements",
  //       state: { from: history.location} 
  //     }
  //   }

  
  let customerHomeTo = {
    pathname: "/customer",
    state: { from: history.location} 
  };
  let customerStatementsTo = {
    pathname: "/customer/bills",
    state: { from: history.location} 
  };


  const showNav = (r) => (
    (r === "admin") ?
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav d-flex w-75">
          {adminNavItems.map(item => (
            <NavLink
              key={item.name} 
              className="nav-link mx-2"
              activeClassName="active"
              exact
              to={item.to}
            >
              {item.name}
            </NavLink>
          ))}
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
      :
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav d-flex w-25 justify-content-around">
          <NavLink 
            className="nav-link"
            activeClassName="active"
            exact
            to={customerHomeTo}
          >
            Account
          </NavLink>
          <NavLink 
            className="nav-link"
            activeClassName="active"
            to={customerStatementsTo}
          >
            Bills
          </NavLink>
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
  )

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="mr-1 navbar-brand">Water</span>
        <span className="mr-1 navbar-brand">Supply</span>
        <span className="mr-1 navbar-brand">System</span>
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
        
        {showNav(role)}

      </div>
    </nav>    
  )
}