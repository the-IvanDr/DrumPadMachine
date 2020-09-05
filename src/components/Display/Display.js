import React from 'react';
import { connect } from 'react-redux';

import './Display.scss';

function Display(props) {
    return (
        <p className={`Display ${props.power ? null : 'powerOff'}`}>{props.display}</p>
    )
}

const mapStateToProps = state => ({
    power: state.power,
    display: state.display
})

export default connect(mapStateToProps)(Display);