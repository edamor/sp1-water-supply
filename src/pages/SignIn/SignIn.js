import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Admin } from "./roles/Admin";
import { Customer } from "./roles/Customer";


export const SignIn = () => {

  
  

  return (
    <>
      <div className="container sign-in-wrapper d-flex flex-column align-items-center  justify-content-center">
        <p className="h3">
          Municipality of Alcantara
        </p>
        <p className="h2">
          Water Supply System
        </p>
        <hr/>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" 
              id="home-tab" 
              data-toggle="tab" 
              href="#admin" 
              role="tab" 
              aria-controls="admin" 
              aria-selected="true"
            >
              Admin
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" 
              id="customer-tab" 
              data-toggle="tab" 
              href="#customer" 
              role="tab" 
              aria-controls="customer" 
              aria-selected="false"
            >
              Customer
            </a>
          </li>
        </ul>
        <div 
          className="tab-content col-10 col-md-5 flex-column p-3 border border-1" 
          id="myTabContent"
        >
          <div className="tab-pane fade show active" 
            id="admin" 
            role="tabpanel" 
            aria-labelledby="admin-tab"
          >
             <Admin />
          </div>
          <div className="tab-pane fade" 
            id="customer" 
            role="tabpanel" 
            aria-labelledby="customer-tab"
          >
            <Customer />
          </div>
        </div>        
        
       

      </div>
    </>
  )
}