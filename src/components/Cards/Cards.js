import React from 'react'
import s from './Cards.module.scss';
import Card from '../Card/Card';
import mobile from './../../assets/mobile.jpeg';
import desktop from './../../assets/desktop.jpeg';
import { web_text, mobile_text, mobile_list, web_list } from './../../srtings';

function Cards() {
    return (
        <React.Fragment>
            <div className={s.container}>
                <Card
                 image={desktop}
                 heading='Website Development' 
                 text={web_text}
                 list={web_list}
                />
                <Card
                 image={mobile}
                 heading='Application Development'
                 text={mobile_text}
                 list={mobile_list}
                />
            </div>
        </React.Fragment>
    )
}

export default Cards;