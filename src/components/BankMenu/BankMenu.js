import React from 'react';
import { connect } from 'react-redux';

import './BankMenu.scss';

import { changeBank } from '../../redux/actions';

function BankMenu(props) {
    let select1Classes = ['select-1'];
    let select2Classes = ['select-2'];

    if(props.bank){
        select1Classes.push('active');
    } else {
        select2Classes.push('active');
    }

    if(!props.power){
        select1Classes.push('powerOff');
        select2Classes.push('powerOff');
    }

    const changeBank = () => {
        if(!props.power) return;
        props.changeBank();
    }

    return (
        <div className='BankMenu'>
            <p className={props.power ? null : 'powerOff'}>Bank</p>
            <div className={`select ${props.power ? null : 'powerOff'}`}>
                <div onClick={props.bank ? null : changeBank} className={select1Classes.join(' ')} />
                <div onClick={!props.bank ? null : changeBank} className={select2Classes.join(' ')} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    power: state.power,
    bank: state.bankActive
});

const mapDispatchToProps = {
    changeBank
}

export default connect(mapStateToProps, mapDispatchToProps)(BankMenu);