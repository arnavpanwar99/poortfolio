import React from 'react'
import s from './Background.module.scss';
import About from '../About/About';
import Resume from '../Resume/Resume';
import RemainNav from '../RemainNav/RemainNav';
import Service from '../Service/Service';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';

import Back02 from './../../assets/back02.jpg'
import Back04 from './../../assets/back04.jpg';
import test from './../../assets/test.jpg';
import Back03 from './../../assets/back03.jpg';

class Background extends React.Component{
    
    state = {
        info: 'About Me',
        tabIndex: 0,
        styleObject: {
            background: `url(${Back04})`,
        }
    }



    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }


    handleScroll = () => {
        const scrollingKeys = [650, 2400, 3500, 4480, 5700];
        if(window.scrollY >= scrollingKeys[0] && window.scrollY < scrollingKeys[1]){
            this.setState({ 
                info: 'About Me', 
                tabIndex: 0,
                styleObject: {
                    background: `url(${Back04})`,
                } 
            })
        }else if(window.scrollY >= scrollingKeys[1] && window.scrollY < scrollingKeys[2]){
            this.setState({
                info: 'Resume', 
                tabIndex: 1, 
                styleObject: {
                background: `url(${test})`,
                //backgroundSize: '100%'
                } 
            })
        }else if(window.scrollY >= scrollingKeys[2] && window.scrollY < scrollingKeys[3]){
            this.setState({ 
                info: 'Services', 
                tabIndex: 2,
                styleObject: {
                    background: `url(${Back03})`,
                    //backgroundSize: '100%'
                }
            })
        }else if(window.scrollY >= scrollingKeys[3] && window.scrollY < scrollingKeys[4]){
            this.setState({ 
                info: 'Skills', 
                tabIndex: 3,
                styleObject: {
                    background: `url(${Back02})`,
                    backgroundSize: '100%'
                } 
            })
        }else{
            this.setState({ 
                tabIndex: 0 
            })
        }
    }
    
    render() {
        const { info, tabIndex, styleObject } = this.state;
        return (
            <React.Fragment>
            <div className={s.main} ref={(input) => this.mainRef = input}>
                <div className={s.main_background} style={styleObject}>
                    <div className={s.main_background_infoBox}>
                        <div className={s.main_background_infoBox_text}>
                            {info}
                        </div>
                    </div>
                </div>
                <div className={s.main_content}>
                    <RemainNav tab={tabIndex}/>
                    <About />
                    <Resume />
                    <Service />
                    <Skill />
                    <Footer />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Background
