import { ChevronDoubleLeft, ChevronDoubleRight, ChevronDown, ChevronUp } from "../../pages/main/Accounts/SvgIcons";


export const ColGroup = ({columns}) => {
  return (
    <colgroup>
      {columns.map((column, index) => <col key={index} style={{ width: `${column.width}%`}} />)}
    </colgroup>
  )
};


export const ColHeadings = (props) => {
  const {columns, setOrderBy, setDirection, arrow} = props;

  const arrowIcons = {
    asc: <ChevronUp />,
    desc: <ChevronDown />
  };

  return (
    <thead>
      <tr>
        {
          columns.map((column, index) => (
            (column.id === "actions") ?
            <th key={index} scope="col" className={column.className}></th>
            :
            <th key={index} scope="col" className={column.className}>
              <div
                className="d-flex w-100 justify-content-between align-items-center py-2"
                style={{cursor: "pointer"}}
                title={column.title || ""}
                onClick={() => {
                  setOrderBy(column.id);
                  setDirection(dir => (dir === "asc") ? "desc" : "asc")
                }}
              >
                <div>
                  {column.title || ""}
                </div>
                {arrow && arrowIcons[arrow[column.id]]}
              </div>
            </th>
          ))
        }
      </tr>
    </thead>
  )
};


export const TableBody = (props) => {
  const { array, rows, emptyRows } = props;
  const height = `2.9rem`;


  const renderRows = (element) => {
    return rows.map((row, index) => {
      if (index === 0) {
        return (
          <th key={row.id} scope="row" className={row.className}>
            {element && element[row.id]}
          </th>
        )
      } else {
        if (row.type === "longDate") {
          return (
            <td key={row.id} className={row.className}>
              {element[row.id] === 0 ? "-" : ((new Date(element[row.id])).toDateString().substring(4,7))}
            </td>
          )
        } else if (row.type === "barangay") {
          return (
            <td key={row.id} className={row.className}>
              {element[row.id].split(",")[0]}
            </td>
          )
        } else if (row.type === "action") {
          return (
            <td key={row.id} className={row.className}>
              {
                row.actions.map((action, index) => {
                  return (
                    <button
                      key={index} 
                      className={`btn btn-sm ${action.className}`}
                      onClick={() => {action.callback(element)}}
                    >
                      {action.label}
                    </button>
                  )
                })
              }   
            </td>
          )
        } else return (
          <td key={row.id} className={row.className}>
            {element[row.id]}
          </td>
        )
      }
    })
  }

  
  const renderEmptyRows = () => {
    let empArr;

    if (emptyRows > 0) {
      empArr = [...Array(emptyRows).keys()];
      
    } 
    
    if (empArr !== undefined) {
      return empArr.map(item => (
        <tr key={item} style={{ height: height }}>
          <td className="bg-paper" colSpan={rows.length}></td>
        </tr>
      ))
    }
  }
   

  return (
    <tbody>
      {
        array && array.map((item, index) => {
          return (
            <tr key={item.id} >
              {renderRows(item)}
            </tr>
          )
        })
      }
      { renderEmptyRows() }
    </tbody>
  )
}


export const Pagination = (props) => {
  const { length, pagination, setPagination, totalPages } = props;

  const handleLeftButton = () => {
    if (pagination.pageNumber <= 1 ) {
      return false;
    }
    setPagination({
      ...pagination,
      pageNumber: pagination.pageNumber - 1
    })
  }
  const handleRightButton = () => {
    if (pagination.pageNumber >= totalPages) {
      return false;
    }
    setPagination({
      ...pagination,
      pageNumber: pagination.pageNumber + 1
    })
  }

  const options = [5, 10, 25, 50];

 
  

  return (
    <tfoot>
      <tr>
        <td colSpan={length} >
          <div className="d-flex justify-content-center">
            
            <ul className="pagination my-0">
              <li 
                className={`page-item ${(pagination.pageNumber <= 1 ) && "disabled"}`} 
                style={{cursor: `${(pagination.pageNumber > 1) ? "pointer" : "default"}`}} 
                onClick={handleLeftButton}>
                <span className="page-link" aria-hidden={true} style={{ color: "#3a3a3a" }}>
                  <ChevronDoubleLeft />
                </span>
              </li>
              <li className="page-item" style={{cursor: "default"}}>
                <span className="page-link" aria-hidden={true} style={{ color: "#3a3a3a" }}>
                  No. of Rows
                  <select 
                    className="ml-1" 
                    style={{border: "0px"}}
                    aria-label="Rows Per Page"
                    defaultChecked={true}
                    defaultValue={pagination.rowsPerPage}
                    onChange={(e) => {
                      setPagination({
                        ...pagination,
                        rowsPerPage: parseInt(e.target.value)
                      })
                    }}
                  >
                    {options.map((item, index) => (
                      <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                </span>
              </li>
              <li className="page-item" style={{cursor: "default"}}>
                <span className="page-link" aria-hidden={true} style={{ color: "#3a3a3a" }}>
                  Page <b>{pagination.pageNumber}</b> of <b>{totalPages}</b>
                </span>
              </li>
              <li 
                className={`page-item ${(pagination.pageNumber >= totalPages) && "disabled"}`} 
                style={{cursor: `${(pagination.pageNumber < totalPages) ? "pointer" : "default"}`}} 
                onClick={handleRightButton}>
                <span className="page-link" aria-hidden={true} style={{ color: "#3a3a3a" }}>
                  <ChevronDoubleRight />
                </span>
              </li>
            </ul>

          </div>
        </td>
      </tr>
    </tfoot>
  )
}