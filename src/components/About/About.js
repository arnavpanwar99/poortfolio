import React from 'react'
import s from './About.module.scss';
import { about_first, about_second, likes, skills } from './../../srtings';
import { inView } from './../../functions/functions';
import Start from '../Start/Start';

let c=0;

export default class About extends React.Component{

    state={
        years: 0,
        exactYears: 0,
        exactGoing: 0,
        going: 0,
        finished: 0,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if (!inView(this.divRef) || c>=1)
            return
        c++;
        const period = Math.floor(1500/17);
        const call = setInterval(() => {
            this.setState((prevState) => {
                return {
                    exactYears: prevState.exactYears + (4/17),
                    exactGoing: prevState.exactGoing + (2/17),
                    finished: prevState.finished + 1,
                    years: Math.ceil(prevState.exactYears),
                    going: Math.ceil(prevState.exactGoing)
                }
            }, () => {
                this.state.finished > 16 && clearTimeout(call);
            })    
        }, period);
    }
 

    render(){
        const { years, going, finished } = this.state;
        return (
            <div className={s.main} >
                <Start first='who i am' second='about me' />
                <div className={s.main_holder}>
                    <div className={s.main_holder_col1}>
                        <div className={s.main_holder_col1_img}></div>
                    </div>
                    <div className={s.main_holder_col2}>
                        <div className={s.main_holder_col2_first}>
                            Arnav panwar
                        </div>
                        <div className={s.main_holder_col2_second}>
                            Full Stack developer
                        </div>
                        <div className={s.main_holder_col2_third}>
                            <p>{about_first}</p>
                            <p>{about_second}</p>
                            <p>I really enjoy doing:</p>
                            <ol className={s.main_holder_col2_third_list}>
                                {this.renderList(likes)}
                            </ol>
                            <p>My skill set:</p>
                            <ul className={s.main_holder_col2_third_list}>
                                {this.renderList(skills)}
                            </ul>
                            <a href='www.google.com' className={s.main_holder_col2_third_button}>
                                <div className='main_button'>
                                    View Portfolio
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.main_stats}>
                    <div className={s.main_stats_box}>
                        Some facts
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div ref={(input) => { this.divRef = input; }}>{years}</div>
                        </div>
                        <p>years of experience</p>
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div>{going}</div>
                        </div>
                        <p>ongoing projects</p>
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div>{finished}</div>
                        </div>
                        <p>finished projects</p>
                    </div>
                </div>
                <div className={s.main_line}></div>
            </div>
        )
    }

    renderList = (list) => {
        return list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }

}