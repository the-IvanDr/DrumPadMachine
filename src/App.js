import React from 'react';

import './App.scss';

import PadPannel from './containers/PadPannel/PadPannel';
import ControlsPannel from './containers/ControlsPannel/ControlsPannel';

import PowerToggle from './components/PowerToggle/PowerToggle';
import Display from './components/Display/Display';
import VolumeSlider from './components/VolumeSlider/VolumeSlider';
import BankMenu from './components/BankMenu/BankMenu';

// import {useDispatch} from 'react-redux';
export default function App() {
    return (
        <div className='App'>
            <PadPannel />
            <ControlsPannel>
                <PowerToggle />
                <Display />
                <VolumeSlider />
                <BankMenu />
            </ControlsPannel>
        </div>
    )
}