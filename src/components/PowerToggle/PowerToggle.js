import React from 'react';
import { connect } from 'react-redux';

import './PowerToggle.scss';

import { powerToggle } from './../../redux/actions';


function PowerToggle(props) {

    const powerToggle = () => {
        props.powerToggle();
    }

    return (
        <div className="PowerToggle">
            <p className={props.power ? null : 'off'}>Power (On/Off)</p>
            <div className={`select ${props.power ? null : 'off'}`}>
                <div onClick={powerToggle} className={`inner ${props.power ? null : 'off'}`} />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    powerToggle
}

const mapStateToProps = state => ({
    power: state.power
});

export default connect(mapStateToProps, mapDispatchToProps)(PowerToggle);