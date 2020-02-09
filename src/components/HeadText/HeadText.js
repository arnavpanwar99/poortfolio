import React from 'react'
import s from './HeadText.module.scss';

function HeadText() {
    return (
        <div className={s.textContainer}>
            <div className={s.textContainer_head}>
                Hello, I am Arnav
            </div>
            <div  className={s.textContainer_subHead}>
                Welcome!
            </div>
        </div>
    )
}

export default HeadText;