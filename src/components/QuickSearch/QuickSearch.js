

export const QuickSearch = () => {

  return (
    <div className="row w-100 justify-content-center">
      <div className="col-12 col-md-8">
        <div className="input-group input-group-lg">
          <input 
            type="text" 
            className="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Type an account number or name..."
          />
            <button
              className="btn btn-lg btn-outline-secondary" 
              type="button"
              id="inputGroup-sizing-lg"
            >
              Search
            </button>
        </div>        
      </div>
    </div>
  )
}