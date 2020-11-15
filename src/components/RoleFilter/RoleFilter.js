import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";



export const RoleFilter = ({children, ...rest}) => {

  let history = useHistory()

  let role = localStorage.getItem("role");

  console.log("role filter");

  useEffect(() => {
    if (role === "admin") {
      history.push("/admin")
    } else 
      history.push("/customer")
  }, [role, history])

  return (
    <Switch>
      <Route {...rest} path="/admin" render={(props) => children} />
      <Route {...rest} path="/customer" render={(props) => children} />
    </Switch>
  )
}