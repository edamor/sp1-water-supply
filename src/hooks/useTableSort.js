import { useEffect, useState } from "react"



export const useTableSort = ({data, sortBy}) => {
  const holder = [...data];
  const [state, setState] = useState(holder);

  useEffect(() => {
    switch (true) {
      case (sortBy === "accountNumberDesc" ):
        setState([...data].sort((a,b) => (a.accountNumber < b.accountNumber) ? 1 : ((b.accountNumber < a.accountNumber) ? -1 : 0)))
        break;
      case (sortBy === "fullNameAsc"):
        setState([...data].sort((a,b) => (a.fullName > b.fullName) ? 1 : ((b.fullName > a.fullName) ? -1 : 0)))
        break;
      case (sortBy === "fullNameDesc" ):
        setState([...data].sort((a,b) => (a.fullName < b.fullName) ? 1 : ((b.fullName < a.fullName) ? -1 : 0)))
        break;
      case (sortBy === "barangayAsc"):
        setState([...data].sort((a,b) => (a.barangay > b.barangay) ? 1 : ((b.barangay > a.barangay) ? -1 : 0)))
        break;
      case (sortBy === "barangayDesc" ):
        setState([...data].sort((a,b) => (a.barangay < b.barangay) ? 1 : ((b.barangay < a.barangay) ? -1 : 0)))
        break;
      case (sortBy === "lastBillReadingAsc"):
        setState([...data].sort((a,b) => a.lastBillReading - b.lastBillReading))
        break;
      case (sortBy === "lastBillReadingDesc"):
        setState([...data].sort((a,b) => b.lastBillReading - a.lastBillReading))
        break;
      case (sortBy === "lastBillPeriodToAsc"):
        setState([...data].sort((a,b) => a.lastBillPeriodTo - b.lastBillPeriodTo))
        break;
      case (sortBy === "lastBillPeriodToDesc"):
        setState([...data].sort((a,b) => b.lastBillPeriodTo - a.lastBillPeriodTo))
        break;
    
      default:
        setState([...data].sort((a,b) => (a.accountNumber > b.accountNumber) ? 1 : ((b.accountNumber > a.accountNumber) ? -1 : 0)))
        break;
    }

  }, [data, sortBy])


  return state;
}