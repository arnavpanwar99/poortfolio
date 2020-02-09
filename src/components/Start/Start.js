import React, { Fragment } from 'react'

function Start({ first, second }) {

    const barWidth = second.length * 5;

    return (
        <Fragment>
            <div className='text_block'>
                {first}
            </div>
            <div className='heading' style={{ width: `${barWidth}%` }}>
                {second}
                <hr className='heading_rule' align='left'></hr>
            </div>
        </Fragment>
    )
}

export default Start;