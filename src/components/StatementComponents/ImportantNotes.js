import { useEffect, useRef, useState } from "react"
import { useDateStringToday } from "../../hooks/useDateStringToday";
import "./importantNotes.css";

export const ImportantNotes = () => {
  
  const [visible, setVisible] = useState(true);

  const [animate, setAnimate] = useState(true);

  const timeoutRef = useRef(null);

  useEffect(() => {
    
    if (animate) {
      timeoutRef.current = setTimeout(() => {
        setAnimate(visible)
      }, 800);
    } else {
      setAnimate(visible)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [visible, animate])

  const dateToday = useDateStringToday();

  return (
    <div className="col-md-12 mr-auto py-2">
      <div className="row bg-light align-items-center">
          <button
            className={`${visible && "active"} btn btn-outline-primary btn-lg btn-important-notes col-6 mb-2 text-left`}
            type="button"
            onClick={() => setVisible(!visible)}
          >
            <span className="font-xl btn-important-notes">
              {
                visible ?
                "Hide Reminders"
                :
                "Show Reminders"
              } 
            </span>
          </button>
          <div className="font-3xl col-6 text-right ">
              <span> {dateToday} </span>
          </div>
      </div>
      {animate && <div className={`${visible ? "notes-in" : "notes-out"} col-11`} >
        <ul>
          <li>
            Only unbilled accounts for the selected statement period will be shown in the list.
          </li>
          <li>
            The available options for the statement period depends on current date.
          </li>
          <li>
            Statements can only be issued
          </li>
          <li>
              Begin by clicking the Hide Notes button.
          </li>
        </ul>
      </div>}
    </div>
  )
}

