import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";



export const RoleFilter = ({children, ...rest}) => {

  let history = useHistory()

  let role = localStorage.getItem("role");

  console.log(role);

  useEffect(() => {
    switch (role) {
      case "admin":
        history.push("/admin");
        break;
      case "customer":
        history.push("/customer");
        break;
      
      default:
        history.push("/login")
        break;
    }
  }, [role, history])

  return (
    <Switch>
      <Route {...rest} path="/admin" render={(props) => children} />
      <Route {...rest} path="/customer" render={(props) => children} />
    </Switch>
  )
}