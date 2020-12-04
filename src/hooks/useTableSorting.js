import { useEffect, useState } from "react"



export const useTableSorting = ({data, orderBy, direction}) => {
  const [state, setState] = useState({
    sortedArray: [...data],
    sortArrow: null
  });

  useEffect(() => {
    if (direction === "asc") {
      setState({
        sortedArray: [...data].sort((a, b) => {
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
        sortArrow: { [orderBy]: direction}
      })
    } else {
      setState({
        sortedArray: [...data].sort((a, b) => {
          if (typeof a[orderBy] !== "number") {
            if (a[orderBy] < b[orderBy]) {
              return 1;
            } else if (b[orderBy] < a[orderBy]) {
              return -1;
            } else return 0;
          } else {
            return b[orderBy] - a[orderBy];
          }
        }),
        sortArrow: { [orderBy]: direction}
      })
    } 
  }, [data, direction, orderBy])

  return state;
}

