import React, {createContext, useState,useEffect} from 'react'

//Skapar context som kan avnändas sen för att skicka data mellan andra componenter/pages 
export const userContext=createContext()

//Här läger vi in grejerna som ska vara globala, tex som for fetch. 
export const ContextProvider= props => {

    //Skapar states som är globala som vi sen avänder för att lägga in grejer i staten. 
    const [events,setEvents]= useState([]);
    const [items,setItems]=useState([])
    const [ticketAmount, setTicketAmount] = useState(0);
    const[newprod,setNewProd]=useState([])
    //Lista som ska innehålla de valde biljetterna
    const[chosenEvents,setChosenEvents]=useState([])
    
    const url ='https://my-json-server.typicode.com/majazocom/events/events'

    useEffect(()=> [
        fetch(url)
        .then(response => response.json())
        .then(data => setEvents(data))
    ], []);

    useEffect(() => {
    }, [chosenEvents])
    
    return(

        //Här lägger vi i valu de state som vi vill skicka till våra children.
        //I vår userContextProvider med hjälp av props så skickas den till alla våra children
        <section>
           <userContext.Provider value={{events,setEvents, newprod,setNewProd, items,setItems, chosenEvents,setChosenEvents, ticketAmount, setTicketAmount}} >
              {props.children}
           </userContext.Provider>
       </section>
    )
}