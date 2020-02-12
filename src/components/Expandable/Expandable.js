import React, { PureComponent } from 'react';
import s from './Expandable.module.scss';
import { data } from './../../srtings';

class Expandable extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active: 0
        }
    }

    toggleActive = (active) => {
        this.setState({ active });
    }

    renderData = () => {
        const { active } = this.state;
        const { show, hide } = s;
        return data.map((item, index) => (
            <React.Fragment key={index}>
                <li className={s.list_item}
                 onClick={() => this.toggleActive(index)}
                >
                    <span className={s.list_item_main}>2001-Present </span>
                    <span className={s.list_item_sub}> - {item.skill}</span>
                </li>
                <p className={index===active?show:hide}>
                    {item.para}
                </p>
                <hr className={s.list_line}></hr>
            </React.Fragment>
        ))
    }

    render() {
        return (
            <React.Fragment>
                <ol className={s.list}>
                    {this.renderData()}
                </ol>
                <div className={s.endLine}></div>
            </React.Fragment>
        )
    }
}

export default Expandable;