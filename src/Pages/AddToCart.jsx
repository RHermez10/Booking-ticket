import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { userContext } from "../Components/Context";
import styles from './AddToCart.module.css'

function AddToCart({ name, date, to, where, price }) {
    const location = useLocation()
    const { from } = location.state
    const { newprod, setNewProd, chosenEvents, setChosenEvents, ticketAmount, setTicketAmount } = useContext(userContext)
    const prod = location.state.from

    const [count, setCount] = useState(0)

    useEffect(() => {
        setNewProd([...newprod, { ...prod }]);
        setTicketAmount(countTicketsAmount);
    }, [])

   

    useEffect(() => {
        let currentEventCount = chosenEvents.filter((chosenEvent) => chosenEvent.name == from.name);
        setTicketAmount(currentEventCount.length)
         console.log(currentEventCount)
    }, [chosenEvents])

    function countTicketsAmount() {
        let currentEventCount = chosenEvents.filter((chosenEvent) => chosenEvent.name == from.name);
        setTicketAmount(currentEventCount.length);
        return currentEventCount.length;
    }

    function countTicketAmountMinus(){
     let currentEventCount = chosenEvents.filter((chosenEvent) => chosenEvent.name == from.name);
     chosenEvents.pop(name)
     setChosenEvents([...chosenEvents])
     setTicketAmount(currentEventCount.length)
     return currentEventCount.length;
    }


    function countPlus() {
        setCount(count + from.price)
        countTicketsAmount();
        setChosenEvents([...chosenEvents, from])
    }
    function countMinus() {
        setCount( count - from.price)
        countTicketAmountMinus()
  
    }

    return (
        <section className={styles.center}>
            <article>
                <h1> Event </h1>
                <p className={styles.txtCenter} >You are about to score some tickets to </p>
            </article>
            <article className={styles.info}>
                <h1 className={styles.title}> {from.name} </h1>
                <p className={styles.greenText}> {from.date} kl <span> {from.from} - {from.to} </span> </p>
                <p> {from.where} </p>
            </article>

            <article className={styles.border}>
                <p className={styles.price}> {count} sek </p>
                <p><span onClick={countMinus}>-</span> {ticketAmount} <span onClick={countPlus} >+</span></p>
            </article>

            <button className={styles.bttn}> <Link className={styles.btn} to="/SendOrder" state={{ from: { name, date, from, to, where, price, count} }} > Lägg i varukorg </Link></button>

        </section>
    )
}

export default AddToCart;