import React from 'react'
import Start from '../Start/Start'    
import $ from 'jquery-circle-progress';

export default class Skill extends React.Component{
    
    componentDidMount(){
        $('#circle').circleProgress({
            value: 0.75,
            size: 80,
            fill: {
              gradient: ["red", "orange"]
            }
          });
    }
    
    render(){
        return (
            <React.Fragment>
                <Start first='Attainments' second='Skills' />
                <div id='circle'></div>
            </React.Fragment>        
        )
    }
}


/*

<div id="circle"></div>

<script>
  
</script>

*/
