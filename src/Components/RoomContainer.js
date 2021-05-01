import React, { Component } from 'react'
import {RoomContext} from '../Context'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
export default class RoomContainer extends Component {
    static contextType=RoomContext;
    render() {
        const {rooms,SortedRooms,loading}=this.context
        return (
            <div>
                <RoomFilter rooms={rooms}/>
                <RoomList rooms={SortedRooms}/>
            </div>
        )
    }
}
