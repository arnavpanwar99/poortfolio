import React from 'react'
import s from './RemainNav.module.scss';

class RemainNav extends React.Component{
    
    state = {
        current: 0
    }

    componentWillReceiveProps(){
        const { tab } = this.props;
        this.setState({ current: tab });
    }

    toggleTab = (tabIndex) => {
        const scrollingKeys = [650, 2400, 3500, 4480, 5700];
        this.setState({ current: tabIndex });
        window.scroll({
            top: scrollingKeys[tabIndex], 
            left: 0, 
            behavior: 'smooth'
        });
    }

    returnStyle = (condition) => {
        if(condition){
            return {
                backgroundColor: '#127aaf'
            }
        }else{
            return {
                backgroundColor: '#191919'
            }
        }
    }
    
    render(){
        const { current } = this.state;
        return (
            <div className={s.remainNav}>
                <div
                 onClick={() => this.toggleTab(0)}
                 className={s.remainNav_block}
                 style={this.returnStyle(current===0)}
                >
                    About Me
                </div>
                <div
                 onClick={() => this.toggleTab(1)}
                 className={s.remainNav_block}
                 style={this.returnStyle(current===1)}
                >
                    Resume
                </div>
                <div 
                 onClick={() => this.toggleTab(2)}
                 className={s.remainNav_block}
                 style={this.returnStyle(current===2)}
                >
                    Services
                </div>
                <div
                 onClick={() => this.toggleTab(3)}
                 className={s.remainNav_block}
                 style={this.returnStyle(current===3)}
                >
                    Skills
                </div>
                <div
                 onClick={() => this.toggleTab(4)}
                 className={s.remainNav_block}
                 style={this.returnStyle(current===4)}
                >
                    Clients
                </div>
                <div 
                 className={s.remainNav_void}
                >
                </div>
            </div>   
        )
    }
}

export default RemainNav;