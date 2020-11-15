import { useEffect, useState } from "react"




export const useFakeData = () => {

  
  // const fakeData = [
  //   {
  //     accountNo: "2015-06-047",
  //     billNo: 1,
  //     period: {
  //       from: 1598547600000,
  //       to: 1601226000000
  //     },
  //     reading: {
  //       present: 863,
  //       previous: 844
  //     },
  //     consumption: {
  //       cuMeter: 19,
  //       rates: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 11
  //       },
  //       amount: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 99
  //       }
  //     },
  //     selected: true
  //   },
  //   {
  //     accountNo: "2015-06-047",
  //     billNo: 2,
  //     period: {
  //       from: 1601226000000,
  //       to: 1603818000000
  //     },
  //     reading: {
  //       present: 888,
  //       previous: 863
  //     },
  //     consumption: {
  //       cuMeter: 25,
  //       rates: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 11
  //       },
  //       amount: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 165
  //       }
  //     },
  //     selected: false
  //   },
  //   {
  //     accountNo: "2015-06-047",
  //     billNo: 3,
  //     period: {
  //       from: 1601226000000,
  //       to: 1606496400000
  //     },
  //     reading: {
  //       previous: 912,
  //       present: 888
  //     },
  //     consumption: {
  //       cuMeter: 24,
  //       rates: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 11
  //       },
  //       amount: {
  //         currency: "PHP",
  //         zeroToTenCuM: 50,
  //         aboveTenPerCuM: 154
  //       }
  //     },
  //     selected: false
  //   },
  // ];


  // const [state, setState] = useState({data: null, loading: true});

  // useEffect(() => {
  //   setState({data: null, loading: true});

  //   setTimeout(() => {
  //     setState({data: fakeData, loading:false})
  //   }, 3000);
  // }, [fakeData])

  // return state;
}