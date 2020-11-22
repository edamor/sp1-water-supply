


export default function Loader() {

  

  return (
      <div className="d-flex w-100 align-items-center justify-content-center" style={{"height": "200px"}}>
        <div className="spinner-grow mx-2" style={{
          width: "2.2rem",
          height : "2.2rem",
          animationDelay: "0.08s"
          }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow mx-3" style={{
          width: "3rem",
          height : "3rem",
          animationDelay: "0.16s"
          }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow mx-2" style={{
          width: "2.2rem",
          height : "2.2rem",
          animationDelay: "0.24s"
          }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  ) 
  
}