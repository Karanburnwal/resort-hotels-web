import React from 'react'
import {Link} from 'react-router-dom'
export default function Room({room}) {
    const {name,slug,images,price}=room;
    console.log(slug);
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0]} alt="single Room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/Rooms/${slug}`} className="btn-primary room-link">
                    Feature
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
