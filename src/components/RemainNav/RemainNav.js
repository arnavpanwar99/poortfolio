import React from 'react'
import s from './RemainNav.module.scss';

function RemainNav() {
    return (
        <div className={s.remainNav}>
            <div className={s.remainNav_block}>About Me</div>
            <div className={s.remainNav_block}>Resume</div>
            <div className={s.remainNav_block}>Services</div>
            <div className={s.remainNav_block}>Skills</div>
            <div className={s.remainNav_block}>Clients</div>
            <div className={s.remainNav_void}></div>
        </div>   
    )
}

export default RemainNav;