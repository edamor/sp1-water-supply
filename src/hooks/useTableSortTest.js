import { useEffect, useState } from "react"



export const useTableSortTest = ({data, orderBy, direction}) => {
  const [state, setState] = useState({
    array: [...data],
    arrow: null
  });

  useEffect(() => {
    if (direction === "asc") {
      setState({
        array: [...data].sort((a, b) => {
          console.log(typeof a[orderBy])
          if (typeof a[orderBy] !== "number") {
            if (a[orderBy] > b[orderBy]) {
              return 1;
            } else if (b[orderBy] > a[orderBy]) {
              return -1;
            } else return 0;
          } else {
            return a[orderBy] - b[orderBy];
          }
        }),
        arrow: { [orderBy]: direction}
      })
    } else if (direction === "desc") {
      setState({
        array: [...data].sort((a, b) => {
          if (typeof a[orderBy] !== "number") {
            
            console.log("hello");
            if (a[orderBy] < b[orderBy]) {
              return 1;
            } else if (b[orderBy] < a[orderBy]) {
              return -1;
            } else return 0;
          } else {
            return b[orderBy] - a[orderBy];
          }
        }),
        arrow: { [orderBy]: direction}
      })
    } else {
      setState({
        array: [...data].sort((a, b) => {
          if (typeof a[orderBy] !== "number") {
            if (a[orderBy] > b[orderBy]) {
              return 1;
            } else if (b[orderBy] > a[orderBy]) {
              return -1;
            } else return 0;
          } else {
            return a[orderBy] - b[orderBy];
          }
        }),
        arrow: { [orderBy]: direction}
      })
    }
  }, [data, direction, orderBy])

  return state;
}




// useEffect(() => {
  //   switch (true) {
  //     case (sortBy === "accountNumberDesc" ):
  //       setState({
  //         array: [...data].sort((a,b) => (a.accountNumber < b.accountNumber) ? 1 : ((b.accountNumber < a.accountNumber) ? -1 : 0)),
  //         arrow: { accountNumber: "down"}
  //       })
  //       break;
  //     case (sortBy === "fullNameAsc"):
  //       setState({
  //         array: [...data].sort((a,b) => (a.fullName > b.fullName) ? 1 : ((b.fullName > a.fullName) ? -1 : 0)),
  //         arrow: { fullName: "up"}
  //       })
  //       break;
  //     case (sortBy === "fullNameDesc" ):
  //       setState({
  //         array: [...data].sort((a,b) => (a.fullName < b.fullName) ? 1 : ((b.fullName < a.fullName) ? -1 : 0)),
  //         arrow: { fullName: "down"}
  //       })
  //       break;
  //     case (sortBy === "barangayAsc"):
  //       setState({
  //         array: [...data].sort((a,b) => (a.barangay > b.barangay) ? 1 : ((b.barangay > a.barangay) ? -1 : 0)),
  //         arrow: { barangay: "up" }
  //       })
  //       break;
  //     case (sortBy === "barangayDesc" ):
  //       setState({
  //         array: [...data].sort((a,b) => (a.barangay < b.barangay) ? 1 : ((b.barangay < a.barangay) ? -1 : 0)),
  //         arrow: { barangay: "down" }
  //       })
  //       break;
  //     case (sortBy === "lastBillReadingAsc"):
  //       setState({
  //         array: [...data].sort((a,b) => a.lastBillReading - b.lastBillReading),
  //         arrow: { lastBillReading: "up" }
  //       })
  //       break;
  //     case (sortBy === "lastBillReadingDesc"):
  //       setState({
  //         array: [...data].sort((a,b) => b.lastBillReading - a.lastBillReading),
  //         arrow: { lastBillReading: "down" }
  //       })
  //       break;
  //     case (sortBy === "lastBillPeriodToAsc"):
  //       setState({
  //         array: [...data].sort((a,b) => a.lastBillPeriodTo - b.lastBillPeriodTo),
  //         arrow: { lastBillPeriodTo: "up" }
  //       })
  //       break;
  //     case (sortBy === "lastBillPeriodToDesc"):
  //       setState({
  //         array: [...data].sort((a,b) => b.lastBillPeriodTo - a.lastBillPeriodTo),
  //         arrow: { lastBillPeriodTo: "down" }
  //       })
  //       break;
    
  //     default:
  //       setState({
  //         array: [...data].sort((a,b) => (a.accountNumber > b.accountNumber) ? 1 : ((b.accountNumber > a.accountNumber) ? -1 : 0)),
  //         arrow: { accountNumber: "up"}
  //       })
  //       break;
  //   }

  // }, [data, sortBy])
