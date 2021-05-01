import React from 'react'

export default function Banner({title,subtle,children}) {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            <div></div>
            <p>{subtle}</p>
            {children}
        </div>
    )
}
