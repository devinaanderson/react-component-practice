import React from 'react'

export const Button = (props) => {
    return (
        <div className='app' onClick={props.counter}>
            <button>{props.title}</button>
            <div>{props.count}</div>

        </div>
    );
}