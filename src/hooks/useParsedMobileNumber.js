import { useEffect, useState } from "react"



export const useParsedMobileNumber = ({mobileNumber}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState("+63" + mobileNumber)
  }, [mobileNumber])


  return state;
}