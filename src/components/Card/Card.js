import React from 'react'
import s from './Card.module.scss';

function Card(props) {
    const { image, heading, text, list } = props;
    const renderList = () => {
        return list.map((item, index) => (
            <li key={index} className={s.card_list_holder_item}>{item}</li>
        ))
    }
    return (
        <React.Fragment>
            <div className={s.card}>
                <div className={s.card_image}
                 style={{ backgroundImage: `url(${image})` }}
                >
                </div>
                <div className={s.card_heading}>
                    {heading}
                </div>
                <div className={s.card_text}>
                    {text}
                </div>
                <div className={s.card_list}>
                    <ol className={s.card_list_holder}>
                        {renderList()}
                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
