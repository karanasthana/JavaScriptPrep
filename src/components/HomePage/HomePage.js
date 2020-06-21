import React from 'react';
import SectionComponent from './SectionComponent';
import ReduxImage from '../../assets/images/coding.jpg';
import ReactNativeImage from '../../assets/images/mobile-dev.jpg';
import ReactImage from '../../assets/images/computer-table.jpg';
import JavascriptImage from '../../assets/images/computer.jpg';
import javascriptJSON from '../../staticData/javascript.json';
import reactNativeJSON from '../../staticData/react-native.json';
import reactJSON from '../../staticData/react-js.json';
import reduxJSON from '../../staticData/redux.json';


export default function HomePage() {
    return (
        <div>
            <SectionComponent image={JavascriptImage} text={'Javascript'} id={'javascript'} json={javascriptJSON} />
            <SectionComponent image={ReactNativeImage} text={'React Native'} id={'react-native'} json={reactNativeJSON} />
            <SectionComponent image={ReactImage} text={'React JS'} id={'react-js'} json={reactJSON} />
            <SectionComponent image={ReduxImage} text={'Redux'} id={'redux'} json={reduxJSON} />
        </div>
    )
}