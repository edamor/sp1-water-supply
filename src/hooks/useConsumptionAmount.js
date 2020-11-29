import { useEffect, useState } from "react";


export const useConsumptionAmount = ({consumption}) => {
  const [state, setState] = useState({});
  
  useEffect(() => {
    let excess = consumption - 10;
    let excessAmount = (excess > 0) ? (excess * 11) : 0;
    setState({
      chargeTenBelow: 50,
      chargeAboveTen: excessAmount,
      total: 50 + excessAmount
    });
  }, [consumption])

  return state;
}