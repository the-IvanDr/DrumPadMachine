import React from 'react';
import './PadPannel.scss';

export default function PadPannel(props) {
    return (
        <div className='PadPannel'>
            {props.children}
        </div>
    )
}