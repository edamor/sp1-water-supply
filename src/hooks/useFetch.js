import { useEffect, useState } from "react"

const DOMAIN = "https://sp1-blue-sparrow.herokuapp.com/api/v1";

export const useFetch = ({endpoint, token}) => {
  const [state, setState] = useState({data: null, loading: true});
  useEffect(() => {
    setState({data: null, loading: true});
    fetch(DOMAIN + endpoint, {
      method: "GET",
      headers: {
        "x-auth-token": token
      }
    })
    .then(response => response.text())
    .then(x => {
      setState({data: JSON.parse(x), loading: false});
      console.log("NAG FETCH!");
    })
    .catch(e => {
      alert(e)
    })
  }, [endpoint, token]);


  return state;
}