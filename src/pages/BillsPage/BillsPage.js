import { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom"
import { BillCard } from "../../components/BillCard/BillCard";
import { BillContext } from "../../contexts/BillContext";
import { Bills } from "../Bills/Bills";



export const BillsPage = () => {

  let {path} = useRouteMatch();

  
  let {billOnDisplay} = useContext(BillContext);


  return (
    <Switch>
      <Route exact path={path}>
        <Bills />
      </Route>
      <Route path={`${path}/:billNo`}>
        <BillCard bill={billOnDisplay} />
      </Route>
    </Switch>
    
  )
}