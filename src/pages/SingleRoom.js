import React, { Component } from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import defaultBcg from '../images/room-3.jpeg'
import StyledHero from '../Components/StyledHero'
export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg,
        }
    }
    componentDidMount(){
        
    }
    static contextType=RoomContext
    render() {
        const {getRoom}=this.context;
         const room=getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to='/Rooms' className="btn-primary">
                    back to rooms
                </Link> 
            </div>
        }
        const {name,description, capacity,size,price,extras,breakfast,pets,images}=room
        const [mainImg,...defaultImg]=images;
        return (
            <>
            <StyledHero img={mainImg||this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Return to Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className='desc'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>size : ${size}</h6>
                        <h6>
                            max capacity :
                            {
                                capacity>1 ? ` ${capacity} people` : ` ${capacity} person `
                            }
                        </h6>
                        <h6>
                            {pets?"pets allowed": "no pets allowed"}
                        </h6>
                        <h6>{breakfast? "breakfast included":""}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
