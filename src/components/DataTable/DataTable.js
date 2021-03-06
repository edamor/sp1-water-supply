import { useState } from "react";
import { useTablePagination } from "../../hooks/useTablePagination";
import { useTableSorting } from "../../hooks/useTableSorting";
import { ColGroup, ColHeadings, Pagination, TableBody } from "./TableComponents";





export const DataTable = (props) => {

  const { rows, columns, data } = props;

  const [orderBy, setOrderBy] = useState(data.length > 0 && Object.keys(data[0])[1]);
  const [direction, setDirection] = useState("asc");
  const [pagination, setPagination] = useState({
    rowsPerPage: 10,
    pageNumber: 1
  });


  const { sortedArray, sortArrow } = useTableSorting({
    data: data,
    orderBy: orderBy,
    direction: direction
  });

  const { currentPage, totalPages, emptyRows } = useTablePagination({
    data: sortedArray,
    rowsPerPage: pagination.rowsPerPage,
    pageNumber: pagination.pageNumber
  });

  
  
  

  return (
    <table className="table table-hover table-striped w-100 align-middle" >
      <ColGroup columns={columns} />
      <ColHeadings 
        columns={columns}
        setOrderBy={setOrderBy}
        setDirection={setDirection}
        arrow={sortArrow}
      />
      <TableBody 
        array={currentPage}
        rows={rows}
        emptyRows={emptyRows}
      />
      <Pagination 
        length={rows.length} 
        pagination={pagination} 
        setPagination={setPagination}
        totalPages={totalPages}
      />
    </table>    
  )
}