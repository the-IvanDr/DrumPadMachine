import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './PadPannel.scss';

import DrumPad from './../../components/DrumPad/DrumPad';
import { playSound } from '../../redux/actions';

function PadPannel(props) {

    const playSound = event => {
        switch (event.key) {
            case 'Q': case 'q': case 'й': case 'Й':
                props.playSound(0); break
            case 'W': case 'w': case 'ц': case 'Ц':
                props.playSound(1); break
            case 'E': case 'e': case 'у': case 'У':
                props.playSound(2); break
            case 'A': case 'a': case 'ф': case 'Ф':
                props.playSound(3); break
            case 'S': case 's': case 'ы': case 'Ы':
                props.playSound(4); break
            case 'D': case 'd': case 'в': case 'В':
                props.playSound(5); break
            case 'Z': case 'z': case 'я': case 'Я':
                props.playSound(6); break
            case 'X': case 'x': case 'ч': case 'Ч':
                props.playSound(7); break
            case 'C': case 'c': case 'с': case 'С':
                props.playSound(8); break

            default: return;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', playSound);
        return () => window.removeEventListener('keydown', playSound);
    })

    return (
        <div className='PadPannel'>
            <DrumPad key_b='Q' src={props.bank[0]} index={0} />
            <DrumPad key_b='A' src={props.bank[3]} index={3} />
            <DrumPad key_b='Z' src={props.bank[6]} index={6} />
            <DrumPad key_b='W' src={props.bank[1]} index={1} />
            <DrumPad key_b='S' src={props.bank[4]} index={4} />
            <DrumPad key_b='X' src={props.bank[7]} index={7} />
            <DrumPad key_b='E' src={props.bank[2]} index={2} />
            <DrumPad key_b='D' src={props.bank[5]} index={5} />
            <DrumPad key_b='C' src={props.bank[8]} index={8} />
        </div>
    )
}

const mapStateToProps = state => ({
    bank: state.bankActive ? state.bank1 : state.bank2
});

const mapDispatchToProps = {
    playSound
}

export default connect(mapStateToProps, mapDispatchToProps)(PadPannel);