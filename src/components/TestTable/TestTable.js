import { useState } from "react";
import { useTableSortTest } from "../../hooks/useTableSortTest";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "../../pages/main/Accounts/SvgIcons";
import Loader from "../Loader/Loader";





export const TestTable = (props) => {

  const { rows, columns, data } = props;

  
  const [orderBy, setOrderBy] = useState(Object.keys(data[0])[1]);
  const [direction, setDirection] = useState("asc");


  const { array, arrow } = useTableSortTest({
    data: data,
    orderBy: orderBy,
    direction: direction
  });


  const arrowIcons = {
    asc: <ChevronUp />,
    desc: <ChevronDown />
  };


  const renderColGroup = columns.map((column, index) => (
    <col key={index} style={{ width: `${column.width}%`}} />
  ));

  const renderHeaders = columns.map((column, index) => (
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
  ));

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

  const renderBody = () => {
    if (!array) {
      return <Loader />
    } else {
      return array.map((item) => {
        return (
          <tr key={item.id}>
            {renderRows(item)}
          </tr>
        )
      })
    }
  }


  
  


  return (
    <table className="table table-hover table-striped w-100 align-middle" >
      <colgroup>
        {renderColGroup}
      </colgroup>
      <thead>
        <tr>
          {renderHeaders}
        </tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>    
  )
}