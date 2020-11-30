import { useEffect, useState } from "react"



export const useTableFilter = ({data, filter}) => {
  const [state, setState] = useState({
    filteredArr: [...data]
  });


  useEffect(() => {
    let filtered = data.filter(item => (item.lastBillPeriodTo < filter));

    setState({
      filteredArr: filtered
    })
  }, [data, filter])


  return state;
} 