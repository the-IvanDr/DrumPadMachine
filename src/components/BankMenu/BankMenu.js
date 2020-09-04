import React from 'react';
import './BankMenu.scss';

export default function BankMenu() {
    return (
        <div className='BankMenu'>
            <p>Bank</p>
            <div className='select'>
                <div className='select-1 active' />
                <div className='select-2' />
            </div>
        </div>
    )
}