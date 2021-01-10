import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { PopupNotif } from "../../components/PopupNotif/PopupNotif";
import { BillProvider } from "../../contexts/BillContext";
import { CustomerDataProvider } from "../../contexts/CustomerDataContext";
import { BillsPage } from "../BillsPage/BillsPage";
import { CustomerPage } from "../Customer/CustomerPage";
import { TestPage } from "../Test/TestPage";
import { AccountsPage } from "./AccountsPage/AccountsPage";
import { Home } from "./Home/Home";
import { StatementsPage } from "./StatementsPage/StatementsPage";


export const Main = () => {

  const history = useHistory();
  let role = localStorage.getItem("role");
  let [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (role === "admin") {
      setIsAdmin(true)
    } else setIsAdmin(false);
  }, [role])

  let [showConfirmModal, setShowConfirmModal] = useState(false);
  const confirmModalProps = {
    title: "Sign Out Confirmation",
    hide: () => {setShowConfirmModal(false)},
    loading: false,
    message: "Are you sure you want to sign out?",
    confirmAction: () => {
      history.push("/login");
      localStorage.clear();
    }
  }


  return (
    <div className="h-100 pt-5 my-3"
    >
      { showConfirmModal && <PopupNotif {...confirmModalProps} />}
      <Navbar signOut={setShowConfirmModal} />
      {
        (isAdmin) ?
        (
          <Switch>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route path="/admin/accounts">
              <AccountsPage />  
            </Route>
            <Route path="/admin/statements">
              <StatementsPage />
            </Route>
            
            <Route path="/admin/test">
              <TestPage />
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