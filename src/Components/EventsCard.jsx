import React from 'react'
import { Link } from 'react-router-dom';
import styles from './EventsCard.module.css'

// vi tar emot objekten från vår events.jsx 
function EventsCard({name, date, from, to, price, where}){
    return(
    
        // på vår button använder vi link som länkar till nästa sida som är AddToCart. 
        //Och med state: from skickar vi det som vi vill få över till AddToCart
    <section className={styles.center}>
         <section className={styles.wrapper}>
             <article className={styles.date}>
                 {date}
             </article>

             <article>
                 <button> <Link className={styles.btn} to="/AddToCart" state={{ from: {name, date, from, to, where, price}}}  > {name}  </Link> </button>
                 <p className={styles.italic} > {where}</p>
            </article>
         </section>
        
         <article className={styles.flex}>
             <article>
                 <p> {from} - <span>{to} </span> </p>
             </article>
            
            <article>
                 <p className={styles.green} > {price}sek </p>
            </article>
         </article>
        
     </section>
    )
}

export default EventsCard;
