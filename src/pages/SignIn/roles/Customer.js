import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { tokenParser } from "../../../utils/TokenParser";

const CUSTOMER_LOGIN_URI="https://sp1-blue-sparrow.herokuapp.com/auth/customer/login";

export const Customer = () => {
  let history = useHistory();

  let accountNoRef = useRef(true);
  let passwordRef = useRef(true);

  let [accountNo, setAccountNo] = useState("");
  let [password, setPassword] = useState("");


  const handleAccountNo = (e) => {
    setAccountNo(e.target.value.trim())
  };

  const handlePassword = (e) => {
    setPassword(e.target.value.trim())
  };

  const { setActiveUser } = useContext(UserContext);

  let [loading, setLoading] = useState(false);

  const doCustomerLogin = () => {
    setLoading(true);
    let user = {
      username: accountNo,
      password: password
    }
    fetch(CUSTOMER_LOGIN_URI, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(token => {
      console.log(token);
      if (token === "Invalid Username" || token === "Incorrect Password") {
        alert(token);
        setLoading(false);
        accountNoRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("role", tokenParser(token).role);
        setActiveUser(tokenParser(token).account);
        history.push("/");
        
      }
    })
    .catch(e => {
      console.log(e);
      alert("Something went wrong...");
      setLoading(false);
    })
  };

  const loadingButton = () => {
    if (!loading) {
      return (
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={doCustomerLogin}
        >
          <span>Login</span>
        </button>
      )
    } else return (
      <button
          type="button"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span className="visually-hidden">Loading...</span>
        </button>
    )
  };

  



  return (
    <div className="">
      <div className="col-12 mb-4">
        <label 
          htmlFor="accountNumberInput" 
          className="form-label">
            Account No.
        </label>
        <input 
          type="text" 
          className="form-control" 
          id="accountNumberInput" 
          placeholder="Account No."
          ref={accountNoRef}
          onChange={handleAccountNo} 
        />
      </div>
      <div className="col-12 mb-4">
        <label 
          htmlFor="customerPwInput" 
          className="form-label">
            Password
        </label>
        <input 
          type="password" 
          className="form-control" 
          id="customerPwInput" 
          placeholder="Password"
          ref={passwordRef}
          onChange={handlePassword} 
        />
      </div>
      <div className="col-12 mb-3 pt-2">
        {loadingButton()}
      </div>

    </div>

  )
}