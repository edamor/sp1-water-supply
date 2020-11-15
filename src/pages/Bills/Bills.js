import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BillListing } from "../../components/BillListing/BillListing";
import { BillContext } from "../../contexts/BillContext";
import { CustomerDataContext } from "../../contexts/CustomerDataContext";

  



export const Bills = () => {

  let history = useHistory();

  let data = useContext(CustomerDataContext);

  let {setBillOnDisplay} = useContext(BillContext);
  

  let [selectedYear, setSelectedYear] = useState(data[data.length-1].period.year);

  const handleViewBill = (billNo) => {
    let viewThis = data.find(item => item.billNo === parseInt(billNo));
    setBillOnDisplay(viewThis);
    history.push({
      pathname: `/customer/bills/${billNo}`,
      state: { from: history.location }
    })
  }
  
  



  return (
    <div className="container pt-2">

      <p className="display-5 text-center pt-2">
          My Bills
      </p>

      <div className="row pt-3">
        <div className="col-4 ml-auto">
        
          <div className="input-group">
            <span className="input-group-text">Year: </span>
            <button id="yearFilter" className="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> {selectedYear} </button>
            <ul className="dropdown-menu">
              <li>
                <button 
                  className="dropdown-item"
                  type="button"
                  onClick={() => {setSelectedYear(2020)}}
                >
                  2020
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item"
                  type="button"
                  onClick={() => {setSelectedYear(2019)}}
                >
                  2019
                </button>
              </li>
            </ul> 
          </div>
        </div>
      </div>

      <div className="row pt-2">
        <div className="col-12 col-md-10 m-auto">
          <BillListing bills={data} filter={selectedYear} viewBill={handleViewBill} />
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