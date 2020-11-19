

export const BillListing = ({bills, filter, viewBill}) => {

  let yearStep = 31556952000;
  

  let results = bills
    .sort((a,b) => b.billNumber - a.bullNumber)
    .filter(item => (item.periodTo > parseInt(filter) && item.periodTo < parseInt(filter+yearStep)));


  

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
                <tr key={item.bullNumber}>
                  <th scope="row">
                    {item.bullNumber}
                  </th>
                  <td>
                    {
                      `${new Date(item.periodFrom).toDateString().substring(4,10)} - 
                      ${new Date(item.periodTo).toDateString().substring(4,10)}`
                    }
                  </td>
                  <td>
                    {`${item.cumUsed} Cu. Meters` }
                  </td>
                  <td>
                    {`PHP ${item.totalAmountDue}` }
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
     