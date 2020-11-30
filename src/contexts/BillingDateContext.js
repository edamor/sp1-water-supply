const { createContext, useContext } = require("react");



export const BillingDateContext = createContext();


export const BillingDateContextProvider = ({children}) => {

  const billingDates = [
    {
      label: "December 28 - January 28",
      short: "12/28/19 - 01/28/20",
      value: {
        periodFrom: 1577462400000,
        periodTo: 1580140800000
      }
    },
    {
      label: "January 28 - February 28",
      short: "01/28/20 - 02/28/20",
      value: {
        periodFrom: 1580140800000,
        periodTo: 1582819200000
      }
    },
    {
      label: "February 28 - March 28",
      short: "02/28/20 - 03/28/20",
      value: {
        periodFrom: 1582819200000,
        periodTo: 1585324800000
      }
    },
    {
      label: "March 28 - April 28",
      short: "03/28/20 - 04/28/20",
      value: {
        periodFrom: 1585324800000,
        periodTo: 1588003200000
      }
    },
    {
      label: "April 28 - May 28",
      short: "04/28/20 - 05/28/20",
      value: {
        periodFrom: 1588003200000,
        periodTo: 1590595200000
      }
    },
    {
      label: "May 28 - June 28",
      short: "05/28/20 - 06/28/20",
      value: {
        periodFrom: 1590595200000,
        periodTo: 1593273600000
      }
    },
    {
      label: "June 28 - July 28",
      short: "06/28/20 - 07/28/20",
      value: {
        periodFrom: 1593273600000,
        periodTo: 1595865600000
      }
    },
    {
      label: "July 28 - August 28",
      short: "07/28/20 - 08/28/20",
      value: {
        periodFrom: 1595865600000,
        periodTo: 1598544000000
      }
    },
    {
      label: "August 28 - September 28",
      short: "08/28/20 - 09/28/20",
      value: {
        periodFrom: 1598544000000,
        periodTo: 1601222400000
      }
    },
    {
      label: "September 28 - October 28",
      short: "09/28/20 - 10/28/20",
      value: {
        periodFrom: 1601222400000,
        periodTo: 1603814400000
      }
    },
    {
      label: "October 28 - November 28",
      short: "10/28/20 - 11/28/20",
      value: {
        periodFrom: 1603814400000,
        periodTo: 1606492800000
      }
    },
    {
      label: "November 28 - December 28",
      short: "11/28/20 - 12/28/20",
      value: {
        periodFrom: 1606492800000,
        periodTo: 1609084800000
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