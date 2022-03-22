import { useContext} from "react";
import { userContext } from "../Components/Context";

function TicketUpdate(props){
  const {newprod,setNewProd,chosenEvents,setChosenEvents,setTicketAmount,ticketAmount}=useContext(userContext)

  // let total = subtotal.subtotal

// console.log(havet)


function ticketsPlus() {

// let addTicket= +1



let list = [...newprod]

 setNewProd(list)
  setTicketAmount(ticketAmount + 1)
  setChosenEvents([...chosenEvents, props.event])
  }

  function ticketMinus() {
    chosenEvents.pop(props.event)
      setTicketAmount(ticketAmount -1)
    setChosenEvents([...chosenEvents])
  }



  return(
      <section>
      

                <article>
                    <button onClick={ticketMinus}>-</button>
                    <p> {ticketAmount} </p>
                    <button onClick={ticketsPlus} >+</button>
                        
                </article>


        
      </section>
  )

}

export default TicketUpdate;