import { useState } from "react";




export const TestPage = () => {
  const TOKEN = localStorage.getItem("token");
  const [selectedMonth, setSelectedMonth] = useState(0);
  
  
  function downloadAccounts() {

    const URI = "https://sp1-blue-sparrow.herokuapp.com"
    const endpoint = "/api/v1/reports-management/export/accounts/all"

    fetch(URI + endpoint, {
      method: "GET",
      headers: { "x-auth-token": TOKEN }
    })
    .then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'accounts.xlsx';
					a.click();
				});
		})
  }


  return (
    <div className="container h-100">
      <p className="display-5 text-center py-3">
        Reports
      </p>
      <div>
        <ul>
          <li>
            Download All Accounts to Excel
            <button
              className="btn btn-primary mx-3"
              onClick={downloadAccounts}
            >
              Download
            </button>
          </li>
          <li>
            Download Statement of Accounts. Select a month to download.
            <select
              className="form-select"
              defaultChecked={true}
              onChange={e => {
                setSelectedMonth(e.target.value)
              }}
            >
              <option value={0} >January</option>
              <option value={1} >February</option>
              <option value={2} >March</option>
              <option value={3} >April</option>
              <option value={4} >May</option>
              <option value={5} >June</option>
              <option value={6} >July</option>
              <option value={7} >August</option>
              <option value={8} >September</option>
              <option value={9} >October</option>
              <option value={10} >November</option>
              <option value={11} >December</option>
            </select>
            <button>
              Download
            </button>
          </li>
        </ul>
      </div>
      </div>
  )
}