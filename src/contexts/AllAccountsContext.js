import { createContext, useContext, useState } from "react";


export const AllAccountsContext = createContext(null);


export const AllAccountsContextProvider = ({children}) => {

  const [accounts, setAccounts] = useState([]);


  return (
    <AllAccountsContext.Provider value={{accounts, setAccounts}}>
      {children}
    </AllAccountsContext.Provider>
  )
}


export const useAccountsContext = () => {
  return useContext(AllAccountsContext);
}