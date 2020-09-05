import React from 'react';
import { connect } from 'react-redux';

import './VolumeSlider.scss';

import { setVolume, setDisplay } from './../../redux/actions';

function VolumeSlider(props) {

    const onChangeHandler = event => {
        props.setVolume(event.target.value);
        props.setDisplay(`Volume: ${Math.round(event.target.value * 100)}`);
    }

    return (
        <div className="VolumeSlider">
            <p className={props.power ? null : 'powerOff'}>Volume</p>
            <input
                onChange={onChangeHandler}
                className={props.power ? null : 'powerOff'}
                value={props.volume}
                type="range"
                step="0.01"
                min="0"
                max="1"
            />
        </div>
    )
}

const mapStateToProps = state => ({
    power: state.power,
    volume: state.volume
});

const mapDispatchToProps = {
    setVolume, setDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider);