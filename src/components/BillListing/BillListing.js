import { useEffect, useState } from "react";


export const BillListing = ({bills, filter, viewBill}) => {

  let yearStep = 31556952000;
  const years = [
    {name: "2020", value: 1577808000000},
    {name: "2019", value: 1546272000000}
  ]



  let [selectedYear, setSelectedYear] = useState(1577808000000)
  let [results, setResults] = useState(bills
    .sort((a,b) => b.billNumber - a.billNumber)
    .filter(item => ((item.periodTo - selectedYear) < yearStep)))
  

  // let results = bills
  //   .sort((a,b) => b.billNumber - a.billNumber)
  //   .filter(item => ((item.periodTo - years[yearFilter]) < yearStep));

  useEffect(() => {
    setResults(bills
    .sort((a,b) => b.billNumber - a.billNumber)
    .filter(item => ((item.periodTo - selectedYear) < yearStep)))
  }, [bills, selectedYear, yearStep])
  

  return (
    <div className="list-group">
    
    <div className="container col-12 col-md-10 mx-auto">
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Bill No.</th>
            <th scope="col">Period Covered</th>
            <th scope="col">Consumption</th>
            <th scope="col">Amount</th>
            <th scope="col">
              
              
              <select 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-lg example"
                onChange={(e) => {
                  setSelectedYear(e.target.value)
                }}
              >
                {years.map(item => <option value={item.value}>{item.name}</option>)}
              </select>     

            </th>
          </tr>
        </thead>
        <tbody>
          {
            (results.length !== 0) ?
              results.map(item => (
                <tr key={item.billNumber}>
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
                      No Available Records for {new Date(filter).toDateString()}
                    </em>
                  </td>
                </tr>
              )
          }

        </tbody>
      </table>    
    </div>
    </div>    
  )
}



      // <button 
      //   type="button" 
      //   className="list-group-item list-group-item-action active" 
      //   aria-current="true"
      // >
      //   Cras justo odio
      // </button>
     