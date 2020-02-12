import React, { Fragment } from 'react'
import { inView } from '../../functions/functions';
import s from './Start.module.scss';

class Start extends React.Component{
    
    state = {
        animationId: false,
    }

    componentDidMount(){
        window.addEventListener('scroll', this.componentRendered);
    }

    componentWillMount(){
        window.removeEventListener('scroll', this.componentRendered);
    }

    componentRendered = () => {
        if(inView(this.mainRef)){
            this.setState({ animationId: true })
        }
    }
    
    render(){
        const { first, second } = this.props;
        const { animationId } = this.state;
        const barWidth = second.length * 4;
        return (
            <Fragment>
                <div 
                 ref={(input) => this.mainRef = input}
                 id={animationId ? s.animation : ''}
                 style={{ visibility: animationId ? 'visible' : 'hidden' }} 
                >
                <div className='text_block'>
                    {first}
                </div>
                <div className='heading' style={{ width: `${barWidth}%` }}>
                    {second}
                    <hr className='heading_rule' align='left'></hr>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default Start;