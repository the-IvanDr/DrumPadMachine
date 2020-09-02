import React from 'react';
import './VolumeSlider.scss';

export default function VolumeSlider(){
    return (
        <div className="VolumeSlider">
            <p>Volume</p>
            <input onChange={()=>{}} type="range" step="0.01" min="0" max="1" value="0.9" />
        </div>
    )
}