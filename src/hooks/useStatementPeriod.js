import { useEffect, useRef, useState } from "react"



export const useStatementPeriod = ({year, periodToIndex}) => {
  const [periodState, setPeriodState] = useState(null);
  const periodFromRef = useRef(null);
  const periodToRef = useRef(null);
  const day = 28;

  useEffect(() => {
    let periodFromIndex = periodToIndex - 1;
    periodFromRef.current = new Date(year, periodFromIndex, day);
    periodToRef.current = new Date(year, periodToIndex, day);
  })

  useEffect(() => {
    if (periodFromRef.current !== null && periodToRef.current !== null) {
      setPeriodState({
        periodFrom: periodFromRef.current.getTime(),
        periodTo: periodToRef.current.getTime()
      })
    }
  }, [])

  return periodState;
}