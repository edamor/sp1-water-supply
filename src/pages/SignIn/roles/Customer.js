import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { tokenParser } from "../../../utils/TokenParser";

const CUSTOMER_LOGIN_URI="https://sp1-blue-sparrow.herokuapp.com/auth/customer/login";

const DEV_TOKEN="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDIwLTAwLTAxIiwicm9sZSI6ImN1c3RvbWVyIiwiYWNjb3VudE5vIjoiMjAyMC0wMC0wMSIsImFjY291bnQiOnsiaWQiOjkxLCJhY2NvdW50TnVtYmVyIjoiMjAyMC0wMC0wMSIsImZ1bGxOYW1lIjoiSm9obiBDcnV6IiwibW9iaWxlTnVtYmVyIjoiKzYzOTE3NTAzNzQ1NyIsImFkZHJlc3MiOiJQb2JsYWNpb24sIEFsY2FudGFyYSwgUm9tYmxvbiIsImJhcmFuZ2F5IjoiUE9CIiwibGFzdEJpbGxOdW1iZXIiOjIsImxhc3RCaWxsUmVhZGluZyI6MTIsImxhc3RCaWxsUGVyaW9kVG8iOjE2MDY0OTI4MDAwMDAsIm1ldGVyU2VyaWFsTnVtYmVyIjoiMTFBMSAxMDAxIiwiZXhpc3RpbmciOmZhbHNlfX0.mV0ZxSER4xv7f8p561NiET3TUywhI7QdsJgqopAvq8lv62JUsJcg4UDAfrk3QafdhHLek9Kq-OBPOOnXTRnaOQ"

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
      if (token === "Invalid Username" || token === "Incorrect Password" || token === "Login Invalid") {
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


  const developmentMode = () => {
    localStorage.setItem("token", DEV_TOKEN);
    localStorage.setItem("role", tokenParser(DEV_TOKEN).role);
    setActiveUser(tokenParser(DEV_TOKEN).account);
    history.push("/");
  };

  const loadingButton = () => {
    if (!loading) {
      return (
        <button
          type="button"
          className="btn btn-primary w-100"
          // onClick={doCustomerLogin}
          onClick={developmentMode}
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