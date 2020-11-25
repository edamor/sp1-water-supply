import { Route, Switch, useRouteMatch } from "react-router-dom";
import { BillAccountProvider } from "../../../contexts/BillAccountContext";
import { Accounts } from "../Accounts/Accounts";
import { CreateAccount } from "../CreateAccount/CreateAccount";



export const AccountsPage = () => {

  let {path} = useRouteMatch();

  


  return (
    <BillAccountProvider>
      <Switch>
        <Route exact path={path}>
          <Accounts />
        </Route>      
        <Route path={`${path}/new`}>
          <CreateAccount />
        </Route>
      </Switch>
    </BillAccountProvider>
    
  )
}