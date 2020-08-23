import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'
import { RoomConsumer } from '../Context'

export default function RoomsContainer() {
    return (

         <RoomConsumer>
             {
                 (value) => {
                    
                    const {loading, sortedRooms, rooms} = value

                    if (loading){
                        return <Loading />
                    }
                     
                     return (
                        <section>
                        
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms} />
                        </section>
                     )
                 }


             }
         </RoomConsumer>
        
    )
}
