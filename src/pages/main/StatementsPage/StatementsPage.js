import { Route, Switch, useRouteMatch } from "react-router-dom"
import { AccountsForBillingContextProvider } from "../../../contexts/AccountsForBillingContext";
import { BillingDateContextProvider } from "../../../contexts/BillingDateContext";
import { IssueStatements } from "../IssueStatements/IssueStatements";
import { Statements } from "../Statements/Statements";



export const StatementsPage = () => {

  const { path } = useRouteMatch();

  return (
    <AccountsForBillingContextProvider>
      <BillingDateContextProvider>
        <Switch>
          <Route exact path={path}>
            <Statements />
          </Route>
          <Route path={`${path}/issue`}>
            <IssueStatements />
          </Route>
        </Switch>
      </BillingDateContextProvider>
    </AccountsForBillingContextProvider>
  )
}