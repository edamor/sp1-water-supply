import { createContext, useState } from "react";


export const CustomerDataContext = createContext();


export const CustomerDataProvider = ({children}) => {

  let [data, setData] = useState()


  return (
    <CustomerDataContext.Provider value={{data, setData}} >
      {children}
    </CustomerDataContext.Provider>
  )
}




  // let data =  [
  //   {
  //     accountNo: "2015-06-047",
  //     billNo: 1,
  //     period: {
  //       from: 1598547600000,
  //       to: 1601226000000,
  //       year: 2020
  //     },
  //     reading: {
  //       present: 863,
  //       previous: 844
  //     },
  //     consumption: {
  //       cuMeter: 19,
  //       rates: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 11
  //       },
  //       amount: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 99
  //       }
  //     }
  //   }
  // ];
// {state, setState}