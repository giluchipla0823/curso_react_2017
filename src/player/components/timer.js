import React from 'react';
import "./timer.css";
import { formattedTime } from "../../utils.js";

function Timer(props){
    return (
        <div className="Timer">
            <p>
                <span>{ formattedTime(props.currentTime) } / { formattedTime(props.duration) }</span>
            </p>
        </div>
    );
}

export default Timer;