import React from 'react';
import './ControlsPannel.scss';

export default function ControlsPannel(props){
    return (
        <div className='ControlsPannel'>
            {props.children}
        </div>
    )
}