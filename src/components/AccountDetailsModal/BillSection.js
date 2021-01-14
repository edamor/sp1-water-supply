import { useState } from "react";
import { SelectedBill } from "./SelectedBill";



export const BillSection = (props) => {
  const { account } = props;
  const { bills } = account;
  const [selectedBill, setSelectedBill] = useState(Object.values(bills)[0] || {})


  function renderSelectMenu() {
    if (Object.keys(bills).length <= 0) {
      return (
        <select 
            className="form-select" 
            aria-label="Select a statement period"
            disabled={true}
            defaultChecked={true}
          >
            <option>No Available Statements</option>
        </select>
      )
    } else {
      return (
        <select
          className="form-select" 
          aria-label="Select a statement period"
          defaultChecked={true}
          onChange={e => {
            setSelectedBill(bills[e.target.value])
          }}  
        >
          {Object.keys(bills).map((key) => {
            return <option
              key={key}
              value={key}
            >
              { key }
            </option>
          }
          )}
        </select>
      )
    }
  }


  return (
    <div>

      <div className="row align-items-center justify-content-center">
        <div className="col-7 h5">Statement Summary</div>
        <div className="col-5">
          {renderSelectMenu()}
        </div>
      </div>

      <SelectedBill {...selectedBill} />

    </div>
  )
}