

export const HomeCard = ({cardImg, cardTitle, cardText, buttonLabel, handleClick}) => {

  const processedText = cardText.split(".");

  return (
    <div className="col-md-4">
      <div className="card h-100 p-2">
        <img 
          src={cardImg} 
          className="card-img-top" 
          alt="..."
          style={{
            objectFit: "contain",
            height: "150px"
          }}
        />
        <div className="card-body">
          <h5 className="card-title pb-2">
            {cardTitle}
          </h5>
          <div className="card-text">
            {processedText.map((text, index) => <div key={index} className="pb-1">{text}</div>)}
          </div>
        </div>
        <div className="card-footer">
          <button 
            type="button" 
            className="btn btn-primary w-100 my-1"
            onClick={handleClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>            
    </div>

  )
}