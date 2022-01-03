import React, {useState, useEffect} from "react";
import gear from './images/gear.svg';


export function App() {
    const [minutes, setMinutes] = useState(15)
    const [seconds, setSeconds] = useState(0)
    const [canEdit, setCanEdit] = useState(false)
    const [interval, setIntervalValue] = useState(0)
    const [stop, setStop] = useState(false)

    useEffect(() => {
        if (stop) {
            alert('stop');
            setMinutes(15)
            setSeconds(0)
            setStop(false);
        }
    });


    const startTimer = () => {
        setCanEdit(false);
        if (interval == 0) {
            let value = minutes * 60 + seconds;
            let startInterval = setInterval(() => {
                value = value - 1;
                setMinutes(Math.floor(value / 60));
                setSeconds(value % 60);
                if (value === 0) {
                    clearInterval(startInterval);
                    setIntervalValue(0);
                    setStop(true);
                }
            }, 1000);
            setIntervalValue(startInterval);
        } else {
            clearInterval(interval);
            setIntervalValue(0);
        }
    }

    const handleSetMinutes = (event) => {
        const val = parseInt(event.target.value);
        if (isNaN(val)) {
            setMinutes(0);
        } else if (val >= 0 && val < 99) {
            setMinutes(val);
        }
    }

    const handleSetSeconds = (event) => {
        const val = parseInt(event.target.value);
        if (isNaN(val)) {
            setSeconds(0);
        } else if (val >= 0 && val < 60) {
            setSeconds(val);
        }
    }


    const secondText = seconds < 9 ? '0' + seconds : seconds;
    const startText = interval === 0 ? 'start' : 'pause';
    const ringClass = stop ? 'ring ending' : 'ring';

    return (
        <>
            <div className={ringClass}>
                <svg width="518" height="518" viewBox="0 0 518 518">
                    <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
                </svg>
            </div>

            <div className="timer">
                <div className="time">
                    <div className="minutes">
                    <input type="text" value={minutes} disabled={!canEdit} onChange={handleSetMinutes}/>
                    </div>
                    <div className="colon">:</div>
                    <div className="seconds">
                    <input type="text" value={secondText} disabled={!canEdit} onChange={handleSetSeconds}/>
                    </div>
                </div>
                <button className="start" onClick={startTimer}>{startText}</button>
                <button className="settings" onClick={() => setCanEdit(true)}>
                    <img src={gear} alt="Settings" />
                </button>
            </div>
        </>
    );
}