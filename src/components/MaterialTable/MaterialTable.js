import React, { useRef } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Menu, MenuItem } from '@material-ui/core';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  { id: 'billNumber', numeric: true, padding: 'none', label: 'Bill No.' },
  { id: 'periodFrom', numeric: true, padding: 'default', label: 'From (date)' },
  { id: 'periodTo', numeric: true, padding: 'default', label: 'To (date)' },
  { id: 'cumUsed', numeric: true, padding: 'default', label: 'Used (m³)' },
  { id: 'totalAmountDue', numeric: true, padding: 'default', label: 'Amount (Php)' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.padding}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="default">
        </TableCell>
      </TableRow>
    </TableHead>
  );
}


const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const anchorRef = useRef(null);
  const [open,setOpen] = React.useState(false)
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    anchorRef.current = event.currentTarget
    setOpen(true)
  };
  
  const handleClose = () => {
    setOpen(false)
  };

  const years = [
    {name: "2020", value: 1577808000000},
    {name: "2019", value: 1546272000000}
  ];


  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {`My Bills for ${props?.selectedYear.name}`}
        </Typography>

       
          <IconButton ref={anchorRef} aria-label="filter list" aria-controls="filter-menu" aria-haspopup="true" onClick={handleClick}>
            <FilterListIcon />
          </IconButton>
          <Menu
            id="filter-menu"
            anchorEl={anchorRef.current}
            open={open}
            onClose={handleClose}
          >
            {years.map(year => (
              <MenuItem key={year.name} onClick={() => {
                props.setSelectedYear(year);
                handleClose();
              }}> {year.name} </MenuItem>
            ))}
          </Menu>
          
      
    </Toolbar>
  );
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable({billArray, viewBill}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('billNumber');
  const [page, setPage] = React.useState(0);
  const dense = true;
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  
  const yearStep = 31536000000;
  const [selectedYear, setSelectedYear] = React.useState({
    name: "2020", value: 1577808000000
  })
  const [rows, setRows] = React.useState(billArray
    .filter(item => ((item.periodTo - selectedYear.value) < yearStep)))

  
  
  
  const handleFilterChange = (year) => {
    setSelectedYear(year);
    setRows((e) => billArray.filter(item => ((item.periodTo - year.value) < yearStep)))
  };


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);




  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          setSelectedYear={handleFilterChange}
          selectedYear={selectedYear}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              { rows.length > 0 ? stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const periodFrom = `${new Date(row.periodFrom).toDateString().substring(4,7)}. ${new Date(row.periodFrom).toDateString().substring(8,10)}`
                  const periodTo = `${new Date(row.periodTo).toDateString().substring(4,7)}. ${new Date(row.periodTo).toDateString().substring(8,10)}`
                  
                  return (
                    <TableRow
                      hover
                      onClick={(event) => viewBill(row.billNumber)}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell component="th" scope="row" padding="default" align="right">
                        {row.billNumber}
                      </TableCell>
                      <TableCell align="right">{periodFrom}</TableCell>
                      <TableCell align="right">{periodTo}</TableCell>
                      <TableCell align="right">{row.cumUsed}</TableCell>
                      <TableCell align="right">{row.totalAmountDue}</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="View More" onClick={() => viewBill(row.billNumber)}>
                          <MoreHorizIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                }) : <TableRow style={{ height: 72 }}>
                        <TableCell colSpan={7} align="center" >
                          <p className="font-xl text-center m-0 p-0">No Available Data</p>
                        </TableCell>
                      </TableRow>}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6, 12]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
