import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { CustomerPage } from "../Customer/CustomerPage";
import { Accounts } from "./Accounts/Accounts";
import { Home } from "./Home/Home";


export const Main = () => {

  let role = localStorage.getItem("role");
  let [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (role === "admin") {
      setIsAdmin(true)
    } else setIsAdmin(false);
  }, [role])


  return (
    <div className="h-100">
      <Navbar />
      {
        (isAdmin) ?
        (
          <Switch>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route path="/admin/accounts">
              <Accounts />
            </Route>        
          </Switch>
        )
        :
        (
          <Switch>
            <Route exact path="/customer">
              <CustomerPage />
            </Route>
          </Switch>
        )
      }
    </div>
  )
}