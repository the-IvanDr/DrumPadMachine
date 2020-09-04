import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './DrumPad.scss';

import { addRef } from './../../redux/actions';


function DrumPad(props) {
    const audioRef = useRef(null);
    const padRef = useRef(null);

    useEffect(() => {
        props.addRef(props.index, audioRef, padRef);
    })

    const playAudio = () => {
        audioRef.current.load();
        audioRef.current.play();
    }

    return (
        <div
            ref={padRef}
            onClick={playAudio}
            onMouseDown={ev => ev.preventDefault()}
            className='DrumPad'
        >
            <audio ref={audioRef} className='clip' src={props.src}></audio>
            {props.key_b}
        </div>
    )
}

const mapDispatchToProps = {
    addRef
}

export default connect(null, mapDispatchToProps)(DrumPad);