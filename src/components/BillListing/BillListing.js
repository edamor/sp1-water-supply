import { useEffect, useState } from "react";


export const BillListing = ({bills, viewBill}) => {
  
  let yearStep = 31556952000;
  const years = [ 
    {name: "2021", value: 1609364952000},
    {name: "2020", value: 1577808000000},
    {name: "2019", value: 1546272000000}
  ]



  let [selectedYear, setSelectedYear] = useState(1609364952000)
  let [results, setResults] = useState(bills
    .sort((a,b) => b.billNumber - a.billNumber)
    .filter(item => ((item.periodTo - selectedYear) < yearStep)))
  


  useEffect(() => {
    setResults(bills
    .sort((a,b) => b.billNumber - a.billNumber)
    .filter(item => ((item.periodTo - selectedYear) < yearStep)))
  }, [bills, selectedYear, yearStep])
  

  return (
    <table className="table table-hover table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Bill No.</th>
          <th scope="col">Period Covered</th>
          <th scope="col">Consumption</th>
          <th scope="col">Amount</th>
          <th scope="col">
            
            
            <select 
              className="form-select" 
              aria-label=".form-select-lg example"
              onChange={(e) => {
                setSelectedYear(e.target.value)
              }}
            >
              {years.map(item => <option key={item.name} value={item.value}>{item.name}</option>)}
            </select>     

          </th>
        </tr>
      </thead>
      <tbody>
        {
          (results.length !== 0) ? results.map((item, index) => (
            <tr key={index}>
              <th scope="row">
                {item.billNumber}
              </th>
              <td>
                {
                  `${new Date(item.periodFrom).toDateString().substring(4,7)}. ${new Date(item.periodFrom).toDateString().substring(8,10)} - 
                  ${new Date(item.periodTo).toDateString().substring(4,7)}. ${new Date(item.periodTo).toDateString().substring(8,10)}`
                }
              </td>
              <td>
                {`${item.cumUsed} Cu. Meters` }
              </td>
              <td>
                {`PHP ${item.totalAmountDue}.00` }
              </td>
              <td className="d-flex justify-content-around">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={(e) => {viewBill(e.target.value)}}
                  value={item.billNumber}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))
          :
          (
            <tr>
              <td colSpan={5} className="py-4">
                <em>
                  No Available Records for {new Date(selectedYear).toDateString()}
                </em>
              </td>
            </tr>
          )
        }
      </tbody>
    </table>      
  )
}
     