

export const Listing = () => {


  let accounts = [
    {
      accountNo: "1101",
      name: "juan santos",
      mobileNo: "912-3456"
    },
    {
      accountNo: "1102",
      name: "john cruz",
      mobileNo: "912-5205"
    },
    {
      accountNo: "1103",
      name: "mark lopez",
      mobileNo: "912-6812"
    },
    {
      accountNo: "1104",
      name: "peter tan",
      mobileNo: "912-2546"
    },
    {
      accountNo: "1105",
      name: "beth carlos",
      mobileNo: "912-6481"
    }
  ];


  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Account No.</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile No.</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(item => {
          return (
            <tr key={item.accountNo}>
              <th scope="row">
                {item.accountNo}
              </th>
              <td>
                {item.name}
              </td>
              <td>
                {`0${item.mobileNo}` }
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