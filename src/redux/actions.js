import { ADD_REF, PLAY_SOUND, POWER_TOGGLE } from './types';

export function addRef(index, audioRef, padRef){
    return {
        type: ADD_REF,
        payload: {index, audioRef, padRef}
    }
}

export function playSound(index){
    return {
        type: PLAY_SOUND,
        index
    }
}

export function powerToggle(){
    return {
        type: POWER_TOGGLE
    }
}