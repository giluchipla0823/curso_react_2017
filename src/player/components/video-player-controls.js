import React from 'react';
import './video-player-controls.css';

function Controls(props){
    return(
        <div className="VideoPlayerControls">
            { props.children }
        </div>
    );
}

export default Controls;