import { useEffect, useRef, useState } from "react";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const useDateStringToday = () => {
  
  const [dateStringToday, setDateStringToday] = useState(null);
  const dateInstanceRef = useRef(null);

  useEffect(() => {
    dateInstanceRef.current = new Date();
  })

  useEffect(() => {
    let day = days[dateInstanceRef.current.getDay()];
    let month = months[dateInstanceRef.current.getMonth()];
    let date = dateInstanceRef.current.getDate();
    let year = dateInstanceRef.current.getFullYear();

    setDateStringToday(`${day}, ${month} ${date}, ${year}`)
  }, [])

  return dateStringToday;
}