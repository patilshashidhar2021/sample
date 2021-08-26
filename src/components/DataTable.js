import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./DataTable.css";
import { dummyData } from "./DummyData";
import moment from 'moment'


const useStyles = makeStyles({
  fullTable: {
    width: "80vw ",
  },
  table: {
    background: "#9acd32",
  },
  row: {
    height: 60,
    background: "grey",
  },
});

export default function DataTable(props) {

  

 

  const classes = useStyles();
  let [a] = props.data;

  // const getTypePrice = (data, type) => {
  //   console.log(data.high, data.low, data.close, data.open);

  //   if (type === "all") {
  //     return [data.open, data.high, data.low, data.close];
  //   }

  //   return data[type];
  // };

  // useEffect(() => {
  //   setInterval(() => {

  //   }, 100000);
  // }, []);
  const filterdArray = dummyData.filter((element) => {
    if (
      element.time >= a.startTime &&
      element.time <= a.endTime &&
      (element.company === a.company)
    ) {
      return element;
     
    }
  });
  // console.log("filtred array", filterdArray);

  return (
    <div className="dataTable">
      <TableContainer component={Paper} className={classes.fullTable}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.heading}>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Date</TableCell>

              <TableCell align="right">Time</TableCell>
              {/* <TableCell align="right">Type</TableCell> */}

              {props.data[0].selectType === "all" ? (
                <>
                  <TableCell align="right">Open</TableCell>
                  <TableCell align="right">High</TableCell>
                  <TableCell align="right">Low</TableCell>
                  <TableCell align="right">Close</TableCell>
                </>
              ) : (
                <TableCell align="right">Type: {props.data[0].selectType}</TableCell>
              )}

             
            </TableRow>
          </TableHead>
          <TableBody>
            {filterdArray.map((rowData, index) => {
              
              return (
                <TableRow key={index} className={classes.row}>
                  <TableCell>{rowData.company}</TableCell>
                  {/* <TableCell align="right">{moment(`${rowData.date}`).toLocaleString()}</TableCell> */}
                  <TableCell align="right">{moment(`${rowData.date}`).format('MMMM Do YYYY')}</TableCell>
                  <TableCell align="right">{rowData.time}</TableCell>

                  {/* <TableCell align="right">
                    {getTypePrice(rowData, a.selectType)}
                  </TableCell> */}

                  {props.data[0].selectType === "all" ? (
                    <>
                      <TableCell align="right">
                        {/* {getTypePrice(rowData.open, a.selectType)} */}
                        {rowData.open}
                      </TableCell>
                      <TableCell align="right">
                      {rowData.high}
                        {/* {getTypePrice(rowData.high, a.selectType)} */}
                      </TableCell>
                      <TableCell align="right">
                        {/* {getTypePrice(rowData.low, a.selectType)} */}
                        {rowData.low}
                      </TableCell>
                      <TableCell align="right">
                        {/* {getTypePrice(rowData.close, a.selectType)} */}
                        {rowData.close}
                      </TableCell>
                    </>
                  ) : (
                    <TableCell align="right">
                      {/* {getTypePrice(rowData, a.selectType)} */}
                      {rowData[a.selectType]}
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
