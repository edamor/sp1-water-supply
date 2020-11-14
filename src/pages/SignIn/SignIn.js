import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Admin } from "./roles/Admin";
import { Customer } from "./roles/Customer";
import seal from "../../images/alcantara-seal.png";


export const SignIn = () => {

  
  

  return (
    <>
      <div className="container sign-in-wrapper d-flex align-items-center  justify-content-center">
        <div className="col-12 col-md-6 ">
          <div className="text-center">
            <img 
              src={seal} 
              alt="Alcantara, Romblon - Municipal Seal" 
              className="img-thumbnail border-0"
              style={{
                height: "12rem",
                width: "12rem"
              }}
            />
          </div>
          <p className="display-6 text-center">
            Municipality of Alcantara
          </p>
          <p className="h3 text-center">
            Water Supply System
          </p>
        </div>

        <div className="col-12 col-md-6">
          <p className="mr-auto h4">
            Login As:
          </p>
          <ul className="nav nav-tabs pt-1" id="myTab" role="tablist">
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
            className="tab-content col-12 flex-column p-3 border border-1" 
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
        
        
       

      </div>
    </>
  )
}