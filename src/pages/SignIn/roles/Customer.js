import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { FakeAuth } from "../../../FakeAuth";


export const Customer = () => {
  let history = useHistory();

  let [accountNo, setAccountNo] = useState("");
  let [password, setPassword] = useState("");

  const handleAccountNo = (e) => {
    setAccountNo(e.target.value.trim())
  };

  const handlePassword = (e) => {
    setPassword(e.target.value.trim())
  };

  let { setActiveUser } = useContext(UserContext);

  const handleSubmit = () => {
    FakeAuth().then(data => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      setActiveUser(data.user);
      history.push("/");
    })
    console.log(accountNo)
    console.log(password)
  }

  return (
    <div className="">
      {/* <p className="h4 text-center pb-3">
        Customer
      </p> */}
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