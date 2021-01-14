import { useState } from "react";




export const TestPage = () => {
  const TOKEN = localStorage.getItem("token");
  const [selectedMonth, setSelectedMonth] = useState(0);
  const URI = "https://sp1-blue-sparrow.herokuapp.com";
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState({
    accounts: false,
    statements: false
  })

  
  function downloadAccounts() {
    setLoadingBtn({...loadingBtn, accounts: true})
    setLoading(true)
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
					a.download = response.headers.get("Content-Disposition").split("=")[1] || "AllAccounts.xlsx";
        
        	a.click();
          setLoading(false)
          setLoadingBtn({...loadingBtn, accounts: false})
				});
		}).catch(e => {
      console.log(e);
      alert("There was a problem with your download. Refresh the page and try again.")
      setLoading(false)
      setLoadingBtn({...loadingBtn, accounts: false})
    })
  }
  function downloadStatements(month) {
    setLoadingBtn({...loadingBtn, statements: true})
    setLoading(true)
    const endpoint = `/api/v1/reports-management/export/statements/${month}`
    fetch(URI + endpoint, {
      method: "GET",
      headers: { "x-auth-token": TOKEN }
    })
    .then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = response.headers.get("Content-Disposition").split("=")[1] || "Statements.xlsx";
					a.click();
          setLoading(false)
      setLoadingBtn({...loadingBtn, statements: false})
				});
		}).catch(e => {
      console.log(e);
      alert("There was a problem with your download. Refresh the page and try again.")
      setLoading(false)
      
      setLoadingBtn({...loadingBtn, statements: false})
    })
  }


  return (
    <div className="container h-100">
      <p className="display-5 text-center py-3">
        Reports
      </p>
      <div className="row gy-4 flex-column">
          <div className="col-md-6">
            <span>
              Download All Accounts to Excel
            </span>
              <button
                type="button"
                className="btn btn-primary mx-3"
                style={{ width: "200px" }}
                disabled={loading}
                onClick={downloadAccounts}
              >
            
                { loadingBtn.accounts ? 
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Downloading...</span>
                  </>                  
                  :
                  <span>
                    Download Accounts
                  </span>
                }
              </button>
            </div>
            <hr/>
          <div className="col-md-6">
            Download Statement of Accounts. Select a month to download.
            <select
              className="form-select my-3"
              defaultChecked={true}
              disabled={loading}
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
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "200px" }}
              disabled={loading}
              onClick={() => {
                downloadStatements(selectedMonth)
              }}
            >
              { loadingBtn.statements ? 
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="visually-hidden">Downloading...</span>
                </>                  
                :
                <span>
                  Download Statements
                </span>
              }
            </button>
          </div>
      </div>
      </div>
  )
}