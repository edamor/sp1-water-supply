import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';



export default function Loader() {

  let history = useHistory();

  let {isAuth, setIsAuth} = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("token")) {
      setIsAuth(true)
      history.push("/")
    } else {
      setIsAuth(false)
      history.push("/login")
    } 
    }, 1500);

    return () => clearTimeout(timer);
    
  })

  return (
    <div className="loader-wrapper">
      <div className="ball-loader">
        <div className="ball-loader-ball ball1"></div>
        <div className="ball-loader-ball ball2"></div>
        <div className="ball-loader-ball ball3"></div>
      </div>
    </div>

  ) 
  
}