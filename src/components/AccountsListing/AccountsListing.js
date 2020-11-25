import { useState } from "react"
import { useTableSort } from "../../hooks/useTableSort";
import { ArrowUp, ArrowDown } from "../../pages/main/Accounts/SvgIcons";

export const AccountsListing = ({accounts, setShowModal, selectAccount}) => {

  const [sortBy, setSortBy] = useState("");

  const { array, arrow } = useTableSort({
    data: accounts,
    sortBy: sortBy
  });

  const arrowIcons = {
    up: <ArrowUp />,
    down: <ArrowDown />
  }


  function sortByAccountNumber() {
    if (sortBy === "accountNumberAsc") {
      setSortBy("accountNumberDesc")
    } else {
      setSortBy("accountNumberAsc")
    }
  }
  function sortByFullName() {
    if (sortBy === "fullNameAsc") {
      setSortBy("fullNameDesc")
    } else {
      setSortBy("fullNameAsc")
    }
  }
  function sortByBarangay() {
    if (sortBy === "barangayAsc") {
      setSortBy("barangayDesc")
    } else {
      setSortBy("barangayAsc")
    }
  }
  function sortByLastBillReading() {
    if (sortBy === "lastBillReadingAsc") {
      setSortBy("lastBillReadingDesc")
    } else {
      setSortBy("lastBillReadingAsc")
    }
  }
  function sortByLastBillPeriodTo() {
    if (sortBy === "lastBillPeriodToAsc") {
      setSortBy("lastBillPeriodToDesc")
    } else {
      setSortBy("lastBillPeriodToAsc")
    }
  }



  // function handleNewBill(account) {
  //   selectAccount(account);
  //   setShowModal(true);
  // }


  return (
    <table className="table table-hover table-striped w-100 align-middle" >
      <colgroup>
        <col style={{ width: "18%"}} />
        <col style={{ width: "25%"}} />
        <col style={{ width: "15%"}} />
        <col style={{ width: "12.5%"}} />
        <col style={{ width: "12.5%"}} />
        <col style={{ width: "17%"}} />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" className="my-0 py-0">
            <div 
              style={{cursor: "pointer"}} 
              className="d-flex w-100 justify-content-between align-items-center py-2" 
              onClick={sortByAccountNumber}
              title="Sort by Account No."
            >
              <div>
                Account No.
              </div>
              {arrow?.accountNumber && arrowIcons[arrow.accountNumber]}
            </div>
          </th>
          <th scope="col" className="my-0 py-0">
            <div 
              style={{cursor: "pointer"}} 
              className="d-flex w-100 justify-content-between align-items-center py-2" 
              onClick={sortByFullName}
              title="Sort by Full Name"
            >
              <div>Full Name</div>
              {arrow?.fullName && arrowIcons[arrow.fullName]}
            </div>
          </th>
          <th scope="col" className="my-0 py-0">
            <div 
              style={{cursor: "pointer"}} 
              className="d-flex w-100 justify-content-between align-items-center py-2" 
              onClick={sortByBarangay}
              title="Sort by Barangay"
            >
              <div>Barangay</div>
              {arrow?.barangay && arrowIcons[arrow.barangay]}
            </div>
          </th>
          <th scope="col" className="my-0 py-0">
            <div 
              style={{cursor: "pointer"}} 
              className="d-flex w-100 justify-content-between align-items-center py-2" 
              onClick={sortByLastBillReading}
              title="Sort by Previous Reading"
            >
              <div>Reading</div>
              {arrow?.lastBillReading && arrowIcons[arrow.lastBillReading]}
            </div>
          </th>
          <th scope="col" className="my-0 py-0">  
            <div 
              style={{cursor: "pointer"}} 
              className="d-flex w-100 justify-content-between align-items-center py-2" 
              onClick={sortByLastBillPeriodTo}
              title="Sort by Month Covered of Last Bill"
            >
              <div>Month</div>
              {arrow?.lastBillPeriodTo && arrowIcons[arrow.lastBillPeriodTo]}
            </div>
          </th>
          <th scope="col" className="my-0 py-0"></th>
        </tr>
      </thead>
      <tbody>
        {array && array.map(item => {
          return (
            <tr key={item.accountNumber}>
              <th scope="row">
                {item.accountNumber}
              </th>
              <td>
                {item.fullName}
              </td>
              <td>
                {item.address.split(",")[0]}
              </td>
              <td>
                {item.lastBillReading}
              </td>
              <td>
                {
                  item.lastBillPeriodTo === 0 ?
                  ""
                  :
                  new Date(item.lastBillPeriodTo).toDateString().substring(4,7)
                }
              </td>
              <td className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-sm btn-primary px-2"
                  onClick={() => {
                    selectAccount(item);
                    setShowModal(true);
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          )
        })}
        
      </tbody>
    </table>    
  )
}