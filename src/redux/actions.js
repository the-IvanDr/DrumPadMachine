import { ADD_REF, PLAY_SOUND, POWER_TOGGLE, BANK_CHANGE, SET_DISPLAY, SET_VOLUME } from './types';

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

export function changeBank(){
    return {
        type: BANK_CHANGE
    }
}

export function setDisplay(str){
    return {
        type: SET_DISPLAY,
        str
    }
}

export function setVolume(value){
    return {
        type: SET_VOLUME,
        value
    }
}