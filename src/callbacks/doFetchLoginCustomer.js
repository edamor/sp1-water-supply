import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";


const CUSTOMER_LOGIN_URI="https://sp1-blue-sparrow.herokuapp.com/auth/customers/login";


export const doFetchLoginCustomer = (user) => {
  let activeUser;

  const tokenParser = (token) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
    );
    return JSON.parse(jsonPayload);
  };

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
        activeUser = token
      } else {
        localStorage.setItem("token", token);
        localStorage.setItem("role", JSON.parse(tokenParser(token)).role);
        activeUser = JSON.parse(tokenParser(token)).account;
      }
    })
    .catch(e => {
      console.log(e);
    })

    return activeUser;

}