import { useEffect, useRef, useState } from "react"

const DOMAIN = "https://sp1-blue-sparrow.herokuapp.com/api/v1";

export const useFetch = ({endpoint, token}) => {
  const [state, setState] = useState({data: null, loading: true});

  const controllerRef = useRef(null);
  
  useEffect(() => {
    controllerRef.current = new AbortController();
  })

  useEffect(() => {
    const { signal } = controllerRef.current;
    setState({data: null, loading: true});
    fetch(DOMAIN + endpoint, {
      method: "GET",
      headers: { "x-auth-token": token },
      signal
    })
    .then(response => response.text())
    .then(x => {
      setState({data: JSON.parse(x), loading: false});
    })
    .catch(e => {
      alert(e)
    })

    return () => controllerRef.current.abort();
  }, [endpoint, token]);


  return state;
}