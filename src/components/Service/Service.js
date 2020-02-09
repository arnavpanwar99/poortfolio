import React from 'react'
import Start from '../Start/Start'
import Cards from '../Cards/Cards'
import s from './Service.module.scss';

function Service() {
    return (
        <React.Fragment>
            <Start first='WhaT I DO' second='services' />
            <Cards />
            <div className={s.line}></div>
        </React.Fragment>
    )
}

export default Service;