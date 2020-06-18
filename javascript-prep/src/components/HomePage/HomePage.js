import React from 'react';
import SectionComponent from './SectionComponent';
import ReduxImage from '../../assets/images/coding.jpg';
import ReactNativeImage from '../../assets/images/mobile-dev.jpg';
import ReactImage from '../../assets/images/computer-table.jpg';
import JavascriptImage from '../../assets/images/computer.jpg';

export default function HomePage() {
    return (
        <div>
            <SectionComponent image={JavascriptImage} text={'Learn Javascript'} id={'javascript'} />
            <SectionComponent image={ReactNativeImage} text={'Learn ReactNative'} id={'react-native'} />
            <SectionComponent image={ReactImage} text={'Learn ReactJS'} id={'react-js'} />
            <SectionComponent image={ReduxImage} text={'Learn Redux'} id={'redux'} />
        </div>
    )
}