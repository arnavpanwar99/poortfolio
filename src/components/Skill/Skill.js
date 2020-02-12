import React from 'react'
import Start from '../Start/Start'
import Circle from '../../figures/circle/Circle'
import s from './Skill.module.scss';

export default class Skill extends React.Component{

    componentDidMount(){

    }

    render(){
        return (
            <React.Fragment>
                <Start first='Attainments' second='Skills' />
                <Circle />
                <div className={s.line}></div>
            </React.Fragment>        
        )
    }
}


/*

<div id="circle"></div>

<script>
  
</script>

*/
