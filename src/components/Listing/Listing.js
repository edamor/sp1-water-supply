

export const Listing = ({accounts}) => {
   

  // let accounts = [
  //   {
  //     accountNo: "1101",
  //     name: "juan santos",
  //     mobileNo: "912-3456"
  //   },
  //   {
  //     accountNo: "1102",
  //     name: "john cruz",
  //     mobileNo: "912-5205"
  //   },
  //   {
  //     accountNo: "1103",
  //     name: "mark lopez",
  //     mobileNo: "912-6812"
  //   },
  //   {
  //     accountNo: "1104",
  //     name: "peter tan",
  //     mobileNo: "912-2546"
  //   },
  //   {
  //     accountNo: "1105",
  //     name: "beth carlos",
  //     mobileNo: "912-6481"
  //   }
  // ];


  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Account No.</th>
          <th scope="col">Name</th>
          <th scope="col" className="text-center">Last Reading</th>
          <th scope="col" className="text-center">Last Period Covered</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(item => {
          return (
            <tr key={item.accountNumber}>
              <th scope="row">
                {item.accountNumber}
              </th>
              <td>
                {item.fullName}
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
                  Issue Statement
                </button>
              </td>
            </tr>
          )
        })}
        
      </tbody>
    </table>    
  )
}