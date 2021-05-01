import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'
//get all unique value
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {
    const context=useContext(RoomContext);
    const {
        handleChange,type,price,minPrice,capacity,maxPrice,minSize,maxSize,breakfast,pets
    }=context
    //get unique types
    let types=getUnique(rooms,"type");
    types=['all',...types];
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people=getUnique(rooms,"capacity");
    people=people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className='filter-form'>
                {/* start type */}
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>

                {/* end type */}
            
                {/* guest */}
                <div className="form-group">
                    <label htmlFor="capacity">capacity</label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>

                {/* guest */}

                {/* price-range */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name='price' min={minPrice} max={maxPrice} 
                    id='price' value={price} onChange={handleChange} className='form-control'/>
                </div>
                {/* price-rang */}
            </form>
        </section>
    )
}
