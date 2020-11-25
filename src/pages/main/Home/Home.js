// import { useEffect, useState } from "react";
import "./style.css";
import { useHistory, useRouteMatch } from "react-router-dom";
import { HomeCard } from "../../../components/AdminHome/HomeCard";
// import { BarangayList } from "../../../components/BarangayList/BarangayList";
import register from "../../../images/register.png";
import accounts from "../../../images/accounts.png";
import statement from "../../../images/statement.jpg";
import seal from "../../../images/alcantara-seal.png";



export const Home = () => {

  const { path } = useRouteMatch();
  const history = useHistory();
  
  const homeCards = [
    {
      id: "addAccountId",
      cardImg: register,
      cardTitle: "Create an account",
      cardText: "Accounts from the old system can be registered in this system. New accounts can also be registered easily. Click the button below to learn more.",
      buttonLabel: "Go to Create Account Page",
      handleClick: () => history.push(path + "/accounts/new")
    },
    {
      id: "viewAccountsId",
      cardImg: accounts,
      cardTitle: "View registered accounts",
      cardText: "All accounts can be viewed in a table format, which also comes with sorting features. The sorting can be toggled by clicking a column header. Click the button below to see.",
      buttonLabel: "View Accounts",
      handleClick: () => history.push(path + "/accounts")
    },
    {
      id: "issueStatementsId",
      cardImg: statement,
      cardTitle: "Issue a new statement",
      cardText: "The system will only be needing the current meter reading. All the other values will be auto-computed and account holders will be notified through SMS.",
      buttonLabel: "Issue Statements",
      handleClick: () => history.push(path + "/accounts")
    }
  ]

  return (
      <div className="container">
        <div 
          className="d-flex w-100 justify-content-around align-items-center my-3"
          style={{
            height: "70vh"
          }}
        >
          <div className="text-center col-md-4">
            <img 
              src={seal} 
              alt="Alcantara, Romblon - Municipal Seal" 
              className="img-thumbnail border-0"
              style={{
                height: "15rem",
                width: "15rem"
              }}
            />
          </div>
          <div className="col-md-8">
            <p className="h2">
              Municipality of Alcantara
            </p>
            <p className="display-6">
              Integrated Water Supply System
            </p>
            <p className="text-justify">
              Our goal is to improve distribution of monthly water bills, while also adding convenience by allowing the account holders to view their bills and account details online.<br/><br/>The monthly distribution of bills will be covered by our system's integrated SMS notification feature. Account holders can view their accounts by logging in to our customer's page.
            </p>
          </div>
        </div>
        <div className="row card-group my-4 py-4">
          <p className="h2 mb-3 text-center">
            Main Features
          </p>
          {homeCards.map(item => (
            <HomeCard 
              key={item.id}
              cardImg={item.cardImg}
              cardTitle={item.cardTitle}
              cardText={item.cardText}
              buttonLabel={item.buttonLabel}
              handleClick={item.handleClick}
            />
          ))}
        </div>
      </div>

  )
}