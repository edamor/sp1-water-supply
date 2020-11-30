import { createContext, useContext, useState } from "react";


export const AccountsForBillingContext = createContext(null);


export const AccountsForBillingContextProvider = ({children}) => {

  const [accounts, setAccounts] = useState([]);


  return (
    <AccountsForBillingContext.Provider value={{accounts, setAccounts}}>
      {children}
    </AccountsForBillingContext.Provider>
  )
}


export const useAccountsForBillingContext = () => {
  return useContext(AccountsForBillingContext);
}