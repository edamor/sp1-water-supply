const { createContext, useContext } = require("react");



export const BillingDateContext = createContext();


export const BillingDateContextProvider = ({children}) => {

  const billingDates = [
    {
      label: "December 28 - January 28",
      short: "12/28/20 - 01/28/21",
      value: {
        periodFrom: 1609084800000,
        periodTo: 1611763200000
      }
    },
    {
      label: "January 28 - February 28",
      short: "01/28/21 - 02/28/21",
      value: {
        periodFrom: 1611763200000,
        periodTo: 1614441600000
      }
    },
    {
      label: "February 28 - March 28",
      short: "02/28/21 - 03/28/21",
      value: {
        periodFrom: 1614441600000,
        periodTo: 1616860800000
      }
    },
    {
      label: "March 28 - April 28",
      short: "03/28/21 - 04/28/21",
      value: {
        periodFrom: 1616860800000,
        periodTo: 1619539200000
      }
    },
    {
      label: "April 28 - May 28",
      short: "04/28/21 - 05/28/21",
      value: {
        periodFrom: 1619539200000,
        periodTo: 1622131200000
      }
    },
    {
      label: "May 28 - June 28",
      short: "05/28/21 - 06/28/21",
      value: {
        periodFrom: 1622131200000,
        periodTo: 1624809600000
      }
    },
    {
      label: "June 28 - July 28",
      short: "06/28/21 - 07/28/21",
      value: {
        periodFrom: 1624809600000,
        periodTo: 1627401600000
      }
    },
    {
      label: "July 28 - August 28",
      short: "07/28/21 - 08/28/21",
      value: {
        periodFrom: 1627401600000,
        periodTo: 1630080000000
      }
    },
    {
      label: "August 28 - September 28",
      short: "08/28/21 - 09/28/21",
      value: {
        periodFrom: 1630080000000,
        periodTo: 1632758400000
      }
    },
    {
      label: "September 28 - October 28",
      short: "09/28/21 - 10/28/21",
      value: {
        periodFrom: 1632758400000,
        periodTo: 1635350400000
      }
    },
    {
      label: "October 28 - November 28",
      short: "10/28/21 - 11/28/21",
      value: {
        periodFrom: 1635350400000,
        periodTo: 1638028800000
      }
    },
    {
      label: "November 28 - December 28",
      short: "11/28/21 - 12/28/21",
      value: {
        periodFrom: 1638028800000,
        periodTo: 1640620800000
      }
    }
  ];

  return (
    <BillingDateContext.Provider value={billingDates}>
      {children}
    </BillingDateContext.Provider>
  )
}


export const useBillingDate = () => {
  return useContext(BillingDateContext);
}