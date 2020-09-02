import React from 'react';
import './DrumPad.scss';

export default function DrumPad(props){
    return (
        <div className='DrumPad'>
            <audio className='clip' id='A' src='#'></audio>
            A
        </div>
    )
}