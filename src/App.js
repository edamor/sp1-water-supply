import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import { SignIn } from "./pages/SignIn/SignIn";
import { Main } from "./pages/main/Main";
import { RoleFilter } from "./components/RoleFilter/RoleFilter"
import { UserProvider } from "./contexts/UserContext";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <UserProvider>
        <Switch>
          <Route path="/login" render={() => <SignIn/> } />
          <PrivateRoute path="/">
            <RoleFilter>
              <Main />
            </RoleFilter>
          </PrivateRoute>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
