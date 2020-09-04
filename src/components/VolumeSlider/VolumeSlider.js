import React from 'react';
import {connect} from 'react-redux';

import './VolumeSlider.scss';

function VolumeSlider(props){
    return (
        <div className="VolumeSlider">
            <p className={props.power ? null : 'powerOff'}>Volume</p>
            <input onChange={()=>{}} className={props.power ? null : 'powerOff'} type="range" step="0.01" min="0" max="1" value="0.9" />
        </div>
    )
}

const mapStateToProps = state => ({
    power: state.power
});

export default connect(mapStateToProps)(VolumeSlider);