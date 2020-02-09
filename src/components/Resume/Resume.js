import React from 'react'
import Start from '../Start/Start'
import s from './Resume.module.scss';
import Expandable from '../Expandable/Expandable';

export default class Resume extends React.Component{

    render(){
        return (
            <div className={s.main}>
                <Start first='my bio' second='resume' />
                <Expandable />
            </div>
        )
    }
}