import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'
import Button from '../Components/StyledHero'
const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="luxury rooms" subtle="deluxe 
                rooms starting at $300">
                    <Link to='/Rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms />
        </>
    )
}

export default Home
