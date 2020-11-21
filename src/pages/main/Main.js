import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { BillProvider } from "../../contexts/BillContext";
import { CustomerDataProvider } from "../../contexts/CustomerDataContext";
import { BillsPage } from "../BillsPage/BillsPage";
import { CustomerPage } from "../Customer/CustomerPage";
import { Accounts } from "./Accounts/Accounts";
import { CreateAccount } from "./CreateAccount/CreateAccount";
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
            <Route path="/admin/create">
              <CreateAccount />
            </Route>
            <Route path="/admin/accounts">
              <Accounts />
            </Route>        
          </Switch>
        )
        :
        (
          <CustomerDataProvider>
            <BillProvider>
              <Switch>
                <Route exact path="/customer">
                  <CustomerPage />
                </Route>
                <Route path="/customer/bills">
                  <BillsPage />
                </Route>
              </Switch>
            </BillProvider>
          </CustomerDataProvider>
        )
      }
    </div>
  )
}