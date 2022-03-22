import React, {useContext, useState} from "react";
import { userContext } from "../Components/Context"
import EventsCard from "../Components/EventsCard";

const Events = () => {

    // Vi använder events statet som vi skapade i vår Conetxt som innehåller datan från api.
    const {events}=useContext(userContext)

    //Skapar en ny state där vi lägger in det valuet som använder skriver sök inputen.
    const [searchTicket,setSearchTicket]=useState([])

    function search(e){
        setSearchTicket(e.target.value)
    }


    return( 

        //Vi filterar genom vår events och kollar med hjälp av if sats efter matchningar.
       <section>
             <article className="input">
                  <h1>Events </h1>
                  <input type="text" onChange={search} />
             </article>
             
               {
                  events.filter((event)=> {
                          
                    if (searchTicket == ""){
                         return events
                        }
                         else if (event.name.toLowerCase().includes(searchTicket.toLowerCase())){
                         return event.name }


                }) .map((event, i) =>(
               <EventsCard events={event} name={event.name} date={event.when.date} from={event.when.from} 
               to={event.when.to} price={event.price} where={event.where} key={i}  />
          ))
         }
          
        </section> 
    )
}

export default Events;

