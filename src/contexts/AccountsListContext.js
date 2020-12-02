import { createContext, useContext, useState } from "react";


export const AccountsListContext = createContext(null);

export const AccountsListContextProvider = ({children}) => {

  const [accountList, setAccountList] = useState([]);


  return (
    <AccountsListContext.Provider value={{ accountList, setAccountList }}>
      {children}
    </AccountsListContext.Provider>
  )
}

export const useAccountsListContext = () => {
  return useContext(AccountsListContext);
}

