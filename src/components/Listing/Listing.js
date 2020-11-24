import { useState } from "react"
import { useTableSort } from "../../hooks/useTableSort";
import { ArrowUp, ArrowDown } from "../../pages/main/Accounts/SvgIcons";


export const Listing = ({accounts}) => {

  const [sortBy, setSortBy] = useState("");
  const [arrow, setArrow] = useState({accountNumber: "up"});

  const sorted = useTableSort({
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
      setArrow({accountNumber: "down"})
    } else {
      setSortBy("accountNumberAsc")
      setArrow({accountNumber: "up"})
    }
  }
  function sortByFullName() {
    if (sortBy === "fullNameAsc") {
      setSortBy("fullNameDesc")
      setArrow({fullName: "down"})
    } else {
      setSortBy("fullNameAsc")
      setArrow({fullName: "up"})
    }
  }
  function sortByBarangay() {
    if (sortBy === "barangayAsc") {
      setSortBy("barangayDesc")
      setArrow({barangay: "down"})
    } else {
      setSortBy("barangayAsc")
      setArrow({barangay: "up"})
    }
  }
  function sortByLastBillReading() {
    if (sortBy === "lastBillReadingAsc") {
      setSortBy("lastBillReadingDesc")
      setArrow({lastBillReading: "down"})
    } else {
      setSortBy("lastBillReadingAsc")
      setArrow({lastBillReading: "up"})
    }
  }
  function sortByLastBillPeriodTo() {
    if (sortBy === "lastBillPeriodToAsc") {
      setSortBy("lastBillPeriodToDesc")
      setArrow({lastBillPeriodTo: "down"})
    } else {
      setSortBy("lastBillPeriodToAsc")
      setArrow({lastBillPeriodTo: "up"})
    }
  }


  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">
            <div style={{cursor: "pointer"}} className="w-100" onClick={sortByAccountNumber}>
              Account No.
              {arrow.accountNumber && arrowIcons[arrow.accountNumber]}
            </div>
          </th>
          <th scope="col">
            <div style={{cursor: "pointer"}} className="pr-1" onClick={sortByFullName}>
              Full Name
              {arrow.fullName && arrowIcons[arrow.fullName]}
            </div>
          </th>
          <th scope="col">
            <div style={{cursor: "pointer"}} className="pr-1" onClick={sortByBarangay}>
              Barangay
              {arrow.barangay && arrowIcons[arrow.barangay]}
            </div>
          </th>
          <th scope="col" className="text-center">
            <div style={{cursor: "pointer"}} className="pr-1" onClick={sortByLastBillReading}>
              Last Meter Reading
              {arrow.lastBillReading && arrowIcons[arrow.lastBillReading]}
            </div>
          </th>
          <th scope="col" className="text-center">
            <div style={{cursor: "pointer"}} className="pr-1" onClick={sortByLastBillPeriodTo}>
              Month Covered
              {arrow.lastBillPeriodTo && arrowIcons[arrow.lastBillPeriodTo]}
            </div>
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {sorted && sorted.map(item => {
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
              <td className="text-center">
                {item.lastBillReading}
              </td>
              <td className="text-center">
                {
                  item.lastBillPeriodTo === 0 ?
                  ""
                  :
                  new Date(item.lastBillPeriodTo).toDateString().substring(4,7)
                }
              </td>
              <td className="d-flex justify-content-around">
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"

                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"

                >
                  Issue Bill
                </button>
              </td>
            </tr>
          )
        })}
        
      </tbody>
    </table>    
  )
}