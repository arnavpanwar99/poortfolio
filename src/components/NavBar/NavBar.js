import React, { PureComponent } from 'react'
import s from './NavBar.module.scss';

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            addClass: false
        }
    }

    toggleClass = () => {
        this.setState((prevState) => {
            return{
                addClass: !prevState.addClass
            }
        })
    }
    
    goToSection = (val) => {
        window.scroll({
            top: val, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    render() {
        const { addClass } = this.state;
        const { open } = s;
        return (
            <div className={s.main}>
                <div className={s.main_name}>
                    <div className={s.main_name_para} onClick={() => this.goToSection(0)}>arnav.com</div>
                </div>
                <div className={s.main_rest}>
                    <div className={s.main_rest_void}></div>
                    <div onClick={this.toggleClass} id={s.nav_icon2} className={addClass ? open : ''}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {
                    addClass 
                        &&
                    <div className={s.main_expander}>
                        <div className={s.main_expander_container}>
                            <div className={s.main_expander_container_voidUp}></div>
                            <div className={s.main_expander_container_actual}>
                                <div onClick={() => this.goToSection(0)} className={s.main_expander_container_actual_text}>Home</div>
                                <div onClick={() => this.goToSection(650)} className={s.main_expander_container_actual_text}>About Me</div>
                                <div onClick={() => this.goToSection(2400)} className={s.main_expander_container_actual_text}>Resume</div>
                                <div onClick={() => this.goToSection(3500)} className={s.main_expander_container_actual_text}>Services</div>
                                <div onClick={() => this.goToSection(4480)} className={s.main_expander_container_actual_text}>Skills</div>
                                <div onClick={() => this.goToSection(5700)} className={s.main_expander_container_actual_text}>Contact</div>
                            </div>
                            <div className={s.main_expander_container_voidDown}></div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default NavBar