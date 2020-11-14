import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({children}) => {

  let [activeUser, setActiveUser] = useState(true);

  return (
    <UserContext.Provider value={{activeUser, setActiveUser}}>
      {children}
    </UserContext.Provider>
  )
}