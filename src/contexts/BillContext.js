import { createContext, useContext, useState } from "react";
import { CustomerDataContext } from "./CustomerDataContext";


export const BillContext = createContext();

export const BillProvider = ({children}) => {

  let data = useContext(CustomerDataContext);

  let [billOnDisplay, setBillOnDisplay] = useState(data[0])

  return (
    <BillContext.Provider value={{billOnDisplay, setBillOnDisplay}} >
      {children}
    </BillContext.Provider>
  )
}