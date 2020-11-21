import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BillListing } from "../../components/BillListing/BillListing";
import { BillContext } from "../../contexts/BillContext";
import { useFetch } from "../../hooks/useFetch";
import { tokenParser } from "../../utils/TokenParser";

  



export const Bills = () => {
  const TOKEN = localStorage.getItem("token");
  const acctNumber = tokenParser(TOKEN).account.accountNumber;
  const API = `/bill-management/bills/${acctNumber}`;
  

  const { data } = useFetch({
    endpoint: API,
    token: TOKEN 
  });

  let history = useHistory();

  let {setBillOnDisplay} = useContext(BillContext);


  const handleViewBill = (billNo) => {
    let viewThis = data.find(item => item.billNumber === parseInt(billNo));
    setBillOnDisplay(viewThis);
    history.push({
      pathname: `/customer/bills/${billNo}`,
      state: { from: history.location }
    })
  };
  
  const showLoadingScreen = (res, year, handle) => {
    if (!res) {
      return (
        <div className="d-flex w-100 align-items-center justify-content-center" style={{"height": "200px"}}>
          <div className="spinner-grow mx-2" style={{
            width: "2.5rem",
            height : "2.5rem",
            transitionDelay: "0.25s"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-3" style={{
            width: "3rem",
            height : "3rem",
            transitionDelay: "1.25s"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-2" style={{
            width: "2.5rem",
            height : "2.5rem",
            transitionDelay: "2.25s"
            }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    } else {
      return (
        <BillListing 
          bills={res}  
          viewBill={handle} 
        />
      ) 
    }

  }



  return (
    <div className="container pt-2">
      <p className="display-5 text-center pt-2">
          My Bills
      </p>
      <div className="row pt-2">
        <div className="col-12 col-md-10 m-auto">
          {showLoadingScreen(data,handleViewBill)}
        </div>
      </div>
    </div>
  )
}



      
      // <div className="row">
      //   <div className="col-12 col-md-10 m-auto pt-2">
      //     <BillCard bill={onDisplay} />
      //   </div>
      // </div>      