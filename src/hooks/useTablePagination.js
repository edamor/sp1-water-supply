import { useEffect, useState } from "react"



export const useTablePagination = ({data, rowsPerPage, pageNumber}) => {
  const [state, setState] = useState({
    currentPage: null,
    totalPages: 0,
    emptyRows: 0
  });
 
  useEffect(() => {
    let indexLastItem = pageNumber * rowsPerPage;
    let indexFirstItem = indexLastItem - rowsPerPage;
    let emptyRows = (indexLastItem - data.length);
    setState({
      currentPage: [...data].slice(indexFirstItem, indexLastItem),
      totalPages: Math.round((data.length / rowsPerPage) + 0.5),
      emptyRows: (emptyRows < 0  ? 0 : emptyRows)
    });
  }, [data, rowsPerPage, pageNumber])

  return state;
}