import React from 'react'
import s from './Background.module.scss';
import About from '../About/About';
import Resume from '../Resume/Resume';
import RemainNav from '../RemainNav/RemainNav';
import Service from '../Service/Service';
import Skill from '../Skill/Skill';

function Background(props) {
    return (
        <div className={s.main}>
            <div className={s.main_background}></div>
            <div className={s.main_content}>
                <RemainNav />
                <About />
                <Resume />
                <Service />
                <Skill />
            </div>
        </div>
    )
}

export default Background
