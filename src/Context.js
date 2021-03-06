import React, { Component } from 'react'
import items from './data'
const RoomContext=React.createContext();
class RoomProvider extends Component {
    state={
        rooms:[],
        SortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }


    componentDidMount(){
        let rooms=this.formatData(items)
        let featuredRooms=rooms.filter(room=>room.featured===true)
        let maxPrice=Math.max(...rooms.map(room=>room.price))
        let maxSize=Math.max(...rooms.map(room=>room.size))
        this.setState({
            rooms,
            SortedRooms:rooms,
            featuredRooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id
            let images=item.fields.images.map(image=>image.fields.file.url)
            let room={...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
    getRoom = slug =>{
        const room=this.state.rooms.find(room=>room.slug===slug)
        return room
    }
    handleChange=event=>{
        const target=event.target
        const name=event.target.name
        const value=event.type==='checkbox' ? 
        target.checked:target.value
        // console.log(type,name,value);

        this.setState({
            [name]:value
            
        },
            this.filterRooms
        )
        
    }

    filterRooms=()=>{
        let {
            rooms,type,capacity,price,
            minSize,maxSize,breakfast,pets
        } = this.state;
        let tempRooms=[...rooms];

        // transform
        capacity=parseInt(capacity);
        price=parseInt(price);
        if(type!=="all"){
            tempRooms=tempRooms.filter(room => room.type===type)
        }
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
        }
        tempRooms=tempRooms.filter(room=>room.price<=price)
        this.setState({
            SortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer
export {RoomProvider,RoomConsumer,RoomContext}