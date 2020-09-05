import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './DrumPad.scss';

import { addRef, setDisplay } from './../../redux/actions';


function DrumPad(props) {
    const audioRef = useRef(null);
    const padRef = useRef(null);

    useEffect(() => {
        props.addRef(props.index, audioRef, padRef);
    })

    const playAudio = () => {
        if (props.power) {
            audioRef.current.load();
            audioRef.current.volume = props.volume;
            audioRef.current.play();
            props.setDisplay(props.name);
        }
    }

    return (
        <div
            ref={padRef}
            onClick={playAudio}
            onMouseDown={ev => ev.preventDefault()}
            className={`DrumPad ${props.bankActive ? null : 'bank2'} ${props.power ? null : 'powerOff'}`}
        >
            <audio ref={audioRef} className='clip' src={props.src} />
            {props.key_b}
        </div>
    )
}

const mapDispatchToProps = {
    addRef, setDisplay
}

const mapStateToProps = state => ({
    power: state.power,
    volume: state.volume,
    bankActive: state.bankActive
})

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);