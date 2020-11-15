

export const BillListing = ({bills, filter, viewBill}) => {

  let results = bills
    .sort((a,b) => b.billNo - a.billNo)
    .filter(item => item.period.year === parseInt(filter));


  

  return (
    <div className="list-group">
    
    <div className="container">
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Bill No.</th>
            <th scope="col">Period Covered</th>
            <th scope="col">Consumption</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            (results.length !== 0) ?
              results.map(item => (
                <tr key={item.billNo}>
                  <th scope="row">
                    {item.billNo}
                  </th>
                  <td>
                    {
                      `${new Date(item.period.from).toDateString().substring(4,10)} - 
                      ${new Date(item.period.to).toDateString().substring(4,10)}`
                    }
                  </td>
                  <td>
                    {`${item.consumption.cuMeter} CU.M` }
                  </td>
                  <td>
                    {`${item.consumption.amount.currency} 
                    ${item.consumption.amount.zeroToTenCuM + item.consumption.amount.aboveTenPerCuM}` }
                  </td>
                  <td className="d-flex justify-content-around">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary"
                      onClick={(e) => {viewBill(e.target.value)}}
                      value={item.billNo}
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
                      No Available Records for {filter}
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
     