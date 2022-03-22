import React, {useContext, useState} from "react";
import EventsCard from "../Components/EventsCard";
import { userContext } from "../Components/Context"

const Events = () => {
    const {events}=useContext(userContext)
    const [findTicket,setFindTicket]=useState([])

    function search(e){
        setFindTicket(e.target.value)
    }
    return(
 
       <section>

           <article className="input">
            <h1>Events </h1>
            <input type="text" onChange={search} />
          </article>
         {
            events.filter((event)=> {
                if (findTicket == ""){
                    return events
                }
                else if (event.name.toLowerCase().includes(findTicket.toLowerCase())){
                    return event.name
                }
            }) .map((event, i) =>(
               <EventsCard events={event} name={event.name} date={event.when.date} from={event.when.from} 
               to={event.when.to} price={event.price} where={event.where}  key={i}  />
          ))
         }
          
        </section> 
    )
}

export default Events;

















































// import { createContext, useEffect, useState } from "react";
// import EventsCard from "../Components/EventsCard";

// export const userContext= createContext()

// function Events(){
//     const [events,setEvents]= useState([]);
//     const url ='https://my-json-server.typicode.com/majazocom/events/events'

//     useEffect(()=> [
//         fetch(url)
//         .then(response => response.json())
//         .then(data => setEvents(data))
//     ], []);

//     return(
//       <userContext.Provider value={events} >
//         <section>

//              <h1>Events</h1>
//             <input type="text" />
            
//            {
//                events.map((event,index) => (
//                 <EventsCard events={event} key={index} />
        
//                ))
//            }


//         </section>
//          </userContext.Provider>

//     )
// }

// export default Events;