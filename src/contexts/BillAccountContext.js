import { createContext, useContext, useState } from "react";


export const BillAccountContext = createContext();

export const BillAccountProvider = ({children}) => {
  const [billAccount, setBillAccount] = useState({});

  return (
    <BillAccountContext.Provider value={{billAccount, setBillAccount}}>
      {children}
    </BillAccountContext.Provider>
  )
}


export const useBillAccountContext = () => {
  return useContext(BillAccountContext);
}