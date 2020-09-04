import React from 'react';
import {connect} from 'react-redux';

import './BankMenu.scss';

function BankMenu(props) {
    return (
        <div className='BankMenu'>
            <p className={props.power ? null : 'powerOff'}>Bank</p>
            <div className={`select ${props.power ? null : 'powerOff'}`}>
                <div className={`select-1 active ${props.power ? null : 'powerOff'}`} />
                <div className={`select-2 ${props.power ? null : 'powerOff'}`} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    power: state.power
})

export default connect(mapStateToProps)(BankMenu);