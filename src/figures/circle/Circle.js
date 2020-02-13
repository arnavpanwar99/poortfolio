import propTypes from 'prop-types';
import React from 'react';
import { inView } from '../../functions/functions';
import { Line, Circle } from 'rc-progress';
import s from './Circle.module.scss';

let c=0;

const data = [
  {
    heading: 'frontend development',
    skills: ['JavaScript', 'ReactJS', 'CSS3'],
    caps: [95, 95, 90],
    total: 92.5
  }, {
    heading: 'backend development',
    skills: ['PHP', 'NodeJS', 'SQL'],
    caps: [80, 95, 85],
    total: 87.5
  }, {
    heading: 'website building',
    skills: ['WordPress', 'Website Optimisation', 'Server Administration'],
    caps: [85, 80, 75],
    total: 80,
  }
]

class CircleComponent extends React.Component{

  state = {
    renderCircle: false,
    frontend: {
      name: 'frontend',
      value: 0
    },
    js: {
      name: 'javascript',
      value: 0
    },
    react: {
      name: 'react',
      value: 0
    },
    css: {
      name: 'css',
      value: 0
    },
    backend: {
      name: 'backend',
      value: 0
    },
    php: {
      name: 'php',
      value: 0
    },
    node: {
      name: 'node',
      value: 0
    },
    sql: {
      name: 'sql',
      value: 0
    },
    website: {
      name: 'website',
      value: 0
    },
    wordpress: {
      name: 'wordpress',
      value: 0
    },
    optimisation: {
      name: 'optimisation',
      value: 0
    },
    server: {
      name: 'server',
      value: 0
    },
  }

  componentDidMount(){
    window.addEventListener('scroll', this.startProgress);
    
  }


  componentWillUnmount(){
    window.removeEventListener('scroll',this.startProgress);
  }

  startProgress = () => {
    const keys = [93, 95, 95, 90, 83, 70, 95, 85, 80, 85, 80, 75];
    let percent=0;
    if(inView(this.circleRef) && c<1){
      this.setState({ renderCircle: true })
      c++;
      const id = setInterval(() => {
        percent++;
        this.setState((prevState) => {
          return{
            frontend: prevState.frontend.value<keys[0] ? { name: 'Frontend Development', value: percent } : prevState.frontend,
            js: prevState.js.value<keys[1] ? { name: 'JavaScript', value: percent } : prevState.js,
            react: prevState.react.value<keys[2] ? { name: 'ReactJS', value: percent } : prevState.react,
            css: prevState.css.value<keys[3] ? { name: 'CSS', value: percent } : prevState.css,
            backend: prevState.backend.value<keys[4] ? { name: 'Backend Development', value: percent } : prevState.backend,
            php: prevState.php.value<keys[5] ? { name: 'PHP', value: percent } : prevState.php,
            node: prevState.node.value<keys[6] ? { name: 'NodeJS', value: percent } : prevState.node,
            sql: prevState.sql.value<keys[7] ? { name: 'SQL', value: percent } : prevState.sql,
            website: prevState.website.value<keys[8] ? { name: 'Website Development', value: percent } : prevState.website,
            wordpress: prevState.wordpress.value<keys[9] ? { name: 'WordPress', value: percent } : prevState.wordpress,
            optimisation: prevState.optimisation.value<keys[10] ? { name: 'Website Optimisation', value: percent } : prevState.optimisation,
            server: prevState.server.value<keys[11] ? { name: 'Server Administration', value: percent } : prevState.server,
          }
        })
        percent >=100 && clearInterval(id);
      }, 50);
    }
  }

  renderChart = (one, two, three, four) => {
    return(
      <div className={s.container}>
        <div className={s.container_circleContainer}>
          <Circle  
           percent={one.value}
           strokeLinecap='butt' 
           strokeWidth="4" 
           trailWidth='3'
           strokeColor="#127aaf" 
           style={{
             height: '30vh'
           }}
          />
          <div className={s.container_circleContainer_text}>{one.name}</div>
        </div>
        <div className={s.container_lineContainer }>
          <div className={s.container_lineContainer_line }>
            <div className={s.container_lineContainer_line_text}>
              <span className={s.container_lineContainer_line_text_view}>{two.name}</span>
              <span className={s.container_lineContainer_line_text_view}><span className={s.special}>{two.value}</span>%</span>
            </div>
            <div className={s.container_lineContainer_line_original}>
              <Line percent={two.value} trailWidth='3' strokeLinecap='butt' strokeWidth="3" strokeColor="#127aaf" />
            </div>
          </div>
          <div className={s.container_lineContainer_line}>
            <div className={s.container_lineContainer_line_text}>
              <span className={s.container_lineContainer_line_text_view}>{three.name}</span>
              <span className={s.container_lineContainer_line_text_view}><span className={s.special}>{three.value}</span>%</span>
            </div>
            <div className={s.container_lineContainer_line_original}>
              <Line percent={three.value} strokeLinecap='butt' trailWidth='3' strokeWidth="3" strokeColor="#127aaf" />
            </div>
          </div>
          <div className={s.container_lineContainer_line}>
            <div className={s.container_lineContainer_line_text}>
              <span className={s.container_lineContainer_line_text_view}>{four.name}</span>
              <span className={s.container_lineContainer_line_text_view}><span className={s.special}>{four.value}</span>%</span>
            </div>
            <div className={s.container_lineContainer_line_original}>
              <Line percent={four.value} strokeLinecap='butt' trailWidth='3' strokeWidth="3" strokeColor="#127aaf" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const { renderCircle, frontend, js, react, css, backend, php, node, sql, website, wordpress, optimisation, server } = this.state;
    return(
      <div
       ref={(input) => { this.circleRef = input; }}>
        {
          renderCircle
            &&
          <React.Fragment>
          <React.Fragment>
            {this.renderChart(frontend, js, react, css)}
          </React.Fragment>
          <React.Fragment>
            {this.renderChart(backend, php, node, sql)}
          </React.Fragment>
          <React.Fragment>
            {this.renderChart(website, wordpress, optimisation, server)}
          </React.Fragment>
          </React.Fragment>
        }
      </div>
    )
  }
}

Circle.propTypes = {
  cap: propTypes.number,
}

export default CircleComponent;