import React, { PureComponent } from 'react'
import s from './NavBar.module.scss';

class NavBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={s.main}>
                <div className={s.main_name}>
                    <div className={s.main_name_para}>arnav.com</div>
                </div>
                <div className={s.main_rest}>
                    <div className={s.main_rest_void}></div>
                    <div className={s.main_rest_restNav} id={s.tester}>
                        <hr className={s.main_rest_restNav_line}></hr>
                        <hr className={s.main_rest_restNav_line}></hr>
                        <hr className={s.main_rest_restNav_line}></hr>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar