import React from 'react';
import s from './Footer.module.scss';



class Footer extends React.Component{
    
    sendTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
    
    render(){
        return ( 
            <React.Fragment>
                <footer className={s.footer}>
                    <div className={s.footer_part1}>
                        <div className={s.footer_part1_sub}>
                            <h2 className={s.footer_part1_sub_heading}>let's stay in touch</h2>
                            <ul className={s.footer_part1_sub_list}>
                                <li className={s.footer_part1_sub_list_item}>Facebook</li>
                                <li className={s.footer_part1_sub_list_item}>Instagram</li>
                                <li className={s.footer_part1_sub_list_item}>Github</li>
                            </ul>
                        </div>
                        <div className={s.footer_part1_sub}>
                            <h2 className={s.footer_part1_sub_heading}>contact info</h2>
                            <ul className={s.footer_part1_sub_list}>
                                <li className={s.footer_part1_sub_list_item}>+91 9897019592</li>
                                <li className={s.footer_part1_sub_list_item}>New delhi, India</li>
                                <li className={s.footer_part1_sub_list_item}>panwar@arnav.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.footer_part2}>
                        <div className={s.footer_part2_right}>
                            &copy;arnav.com 2020 developed by me for me 🙂
                        </div>
                        <div onClick={this.sendTop} className={s.footer_part2_button}>
                            <div className={s.footer_part2_button_void}></div>
                            <div className={s.footer_part2_button_up}></div>
                            <div className={s.footer_part2_button_up}></div>
                            <div className={s.footer_part2_button_void}></div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
 
export default Footer;
