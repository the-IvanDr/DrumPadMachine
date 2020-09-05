import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './PadPannel.scss';

import DrumPad from './../../components/DrumPad/DrumPad';
import { playSound, setDisplay } from './../../redux/actions';

function PadPannel(props) {
    const playSound = event => {
        switch (event.key) {
            case 'Q': case 'q': case 'й': case 'Й':
                props.playSound(0); props.setDisplay(props.bank[0].name); break
            case 'W': case 'w': case 'ц': case 'Ц':
                props.playSound(1); props.setDisplay(props.bank[1].name); break
            case 'E': case 'e': case 'у': case 'У':
                props.playSound(2); props.setDisplay(props.bank[2].name); break
            case 'A': case 'a': case 'ф': case 'Ф':
                props.playSound(3); props.setDisplay(props.bank[3].name); break
            case 'S': case 's': case 'ы': case 'Ы':
                props.playSound(4); props.setDisplay(props.bank[4].name); break
            case 'D': case 'd': case 'в': case 'В':
                props.playSound(5); props.setDisplay(props.bank[5].name); break
            case 'Z': case 'z': case 'я': case 'Я':
                props.playSound(6); props.setDisplay(props.bank[6].name); break
            case 'X': case 'x': case 'ч': case 'Ч':
                props.playSound(7); props.setDisplay(props.bank[7].name); break
            case 'C': case 'c': case 'с': case 'С':
                props.playSound(8); props.setDisplay(props.bank[8].name); break

            default: return;
        }
    }

    useEffect(() => {
        if (props.power) {
            window.addEventListener('keydown', playSound);
            return () => window.removeEventListener('keydown', playSound);
        }
    })

    return (
        <div className='PadPannel'>
            <DrumPad key_b='Q' src={props.bank[0].src} index={0} name={props.bank[0].name} />
            <DrumPad key_b='A' src={props.bank[3].src} index={3} name={props.bank[3].name} />
            <DrumPad key_b='Z' src={props.bank[6].src} index={6} name={props.bank[6].name} />
            <DrumPad key_b='W' src={props.bank[1].src} index={1} name={props.bank[1].name} />
            <DrumPad key_b='S' src={props.bank[4].src} index={4} name={props.bank[4].name} />
            <DrumPad key_b='X' src={props.bank[7].src} index={7} name={props.bank[7].name} />
            <DrumPad key_b='E' src={props.bank[2].src} index={2} name={props.bank[2].name} />
            <DrumPad key_b='D' src={props.bank[5].src} index={5} name={props.bank[5].name} />
            <DrumPad key_b='C' src={props.bank[8].src} index={8} name={props.bank[8].name} />
        </div>
    )
}

const mapStateToProps = state => ({
    bank: state.bankActive ? state.bank1 : state.bank2,
    power: state.power
});

const mapDispatchToProps = {
    playSound, setDisplay
}

export default connect(mapStateToProps, mapDispatchToProps)(PadPannel);