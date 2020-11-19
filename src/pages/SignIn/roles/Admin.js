import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FakeAuth } from "../../../FakeAuth";


export const Admin = () => {
  let history = useHistory();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value.trim())
  };

  const handlePassword = (e) => {
    setPassword(e.target.value.trim())
  };

  const handleSubmit = () => {
    FakeAuth().then(token => {
      localStorage.setItem("token", token);
      localStorage.setItem("role", "admin");
      history.push("/");
    })
  }

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
          onChange={handleUsername} 
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
          onChange={handlePassword} 
        />
      </div>
      <div className="col-12 mb-3 pt-2">
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>

    </div>

  )
}