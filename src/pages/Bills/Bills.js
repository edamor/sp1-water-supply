import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BillListing } from "../../components/BillListing/BillListing";
import Loader from "../../components/Loader/Loader";
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
  
  const showLoadingScreen = (res, handle) => {
    if (!res) {
      return (
        <Loader />
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
      <p className="display-5 text-center py-3">
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