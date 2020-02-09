import $ from 'jquery';
import React from 'react'
import s from './About.module.scss';
import { about_first, about_second, likes, skills } from './../../srtings';
import Start from '../Start/Start';

export default class About extends React.Component{
    render(){
        return (
            <div className={s.main}>
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
                            <ul>
                                {this.renderList(skills)}
                            </ul>
                            <a href='#' className={s.main_holder_col2_third_button}>
                                <div className='main_button'>
                                    View Portfolio
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.main_stats} id='counter'>
                    <div className={s.main_stats_box}>
                        Some facts
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div data-count="4" className="counter-value">0</div>
                        </div>
                        <p>years of experience</p>
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div data-count="2" className="counter-value">0</div>
                        </div>
                        <p>ongoing projects</p>
                    </div>
                    <div className={s.main_stats_dad}>
                        <div className={s.main_stats_dad_stat}>
                            <div data-count="17" className="counter-value">0</div>
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

    componentDidMount(){
        this.checkCounter();        
    }

    checkCounter = () => {
        var a = 0;
        $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },

                {

                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

                });
            });
            a = 1;
        }

        });
    }

}

