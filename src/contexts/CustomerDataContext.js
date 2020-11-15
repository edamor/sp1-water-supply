import { createContext } from "react";


export const CustomerDataContext = createContext();


export const CustomerDataProvider = ({children}) => {

  let data =  [
    {
      accountNo: "2015-06-047",
      billNo: 1,
      period: {
        from: 1598547600000,
        to: 1601226000000,
        year: 2020
      },
      reading: {
        present: 863,
        previous: 844
      },
      consumption: {
        cuMeter: 19,
        rates: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 11
        },
        amount: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 99
        }
      }
    },
    {
      accountNo: "2015-06-047",
      billNo: 2,
      period: {
        from: 1601226000000,
        to: 1603818000000,
        year: 2020
      },
      reading: {
        present: 888,
        previous: 863
      },
      consumption: {
        cuMeter: 25,
        rates: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 11
        },
        amount: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 165
        }
      }
    },
    {
      accountNo: "2015-06-047",
      billNo: 3,
      period: {
        from: 1603818000000,
        to: 1606496400000,
        year: 2020
      },
      reading: {
        previous: 912,
        present: 888
      },
      consumption: {
        cuMeter: 24,
        rates: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 11
        },
        amount: {
          currency: "PHP",
          zeroToTenCuM: 50,
          aboveTenPerCuM: 154
        }
      }
    },
  ];

  return (
    <CustomerDataContext.Provider value={data} >
      {children}
    </CustomerDataContext.Provider>
  )
}