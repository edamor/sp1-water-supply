import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { tokenParser } from "../../../utils/TokenParser";

const ADMIN_LOGIN_URI="https://sp1-blue-sparrow.herokuapp.com/auth/admin/login";

const devToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0YWRtaW4xIiwidXNlcklkIjo5MSwicm9sZSI6ImFkbWluIn0.MLD1gmEeHBsvPT0erjUZbo0P5akYmu5JAf_9elAR6vKho7A7tz_NM5be8kI1kbat8eyZOW4V9dvynbIbxqiV4Q";

export const Admin = () => {
  let history = useHistory();
  
  let usernameRef = useRef(true);
  let passwordRef = useRef(true);

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value.trim())
  };

  const handlePassword = (e) => {
    setPassword(e.target.value.trim())
  };

  let [loading, setLoading] = useState(false);

  const doAdminLogin = () => {
    setLoading(true);
    let user = {
      username: username,
      password: password
    }
    fetch(ADMIN_LOGIN_URI, {
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
        usernameRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("role", tokenParser(token).role);
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
    localStorage.setItem("token", devToken);
    localStorage.setItem("role", tokenParser(devToken).role);
    history.push("/");
  };

  const loadingButton = () => {
    if (!loading) {
      return (
        <button
          type="button"
          className="btn btn-primary w-100"
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
          htmlFor="usernameInput" 
          className="form-label">
            Username
        </label>
        <input 
          type="text" 
          className="form-control" 
          id="usernameInput" 
          placeholder="Username"
          ref={usernameRef}
          onChange={handleUsername}
          disabled={loading} 
        />
      </div>
      <div className="col-12 mb-4">
        <label 
          htmlFor="adminPwInput" 
          className="form-label">
            Password
        </label>
        <input 
          type="password" 
          className="form-control" 
          id="adminPwInput" 
          placeholder="Password"
          ref={passwordRef}
          onChange={handlePassword} 
          disabled={loading} 
        />
      </div>
      <div className="col-12 mb-3 pt-2">
        {loadingButton()}
      </div>

    </div>

  )
}