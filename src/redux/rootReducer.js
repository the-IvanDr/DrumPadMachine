import { ADD_REF, PLAY_SOUND, POWER_TOGGLE } from './types';

const initialState = {
    volume: 50,
    power: false,
    bankActive: false,
    pads: new Array(9),
    bank1: [
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    ],
    bank2: [
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    ],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_REF:
            let newPads = state.pads;
            newPads[action.payload.index] = {
                padRef: action.payload.padRef,
                audioRef: action.payload.audioRef
            };
            return {...state, pads: newPads};
        
        case PLAY_SOUND:
            state.pads[action.index].audioRef.current.load();
            state.pads[action.index].audioRef.current.play();
            state.pads[action.index].padRef.current.classList.add('pressed');
            setTimeout(()=>state.pads[action.index].padRef.current.classList.remove('pressed'), 100);
            return state;

        case POWER_TOGGLE:
            return {...state, power: !state.power}
        default: return state;
    }
}