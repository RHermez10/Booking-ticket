import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Events from "./Pages/Events";
import AddToCart from "./Pages/AddToCart";
import SendOrder from "./Pages/SendOrder";
import {ContextProvider} from "./Components/Context";
import EventsCard from "./Components/EventsCard";
import Tickets from "./Pages/Tickets";

function App() {
  return (
 
       <Router>

            <section className="wrapper" >
                <article>
                  <Link to="/Events">All events</Link>
                </article>
                       <ContextProvider>
                <Routes>
                 <Route path="/Events" element={<Events/>}/>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/EventsCard" element={<EventsCard/>}/>
                 <Route path="/AddToCart" element={<AddToCart/>} />
                 <Route path="/SendOrder" element={<SendOrder/>} />
                 <Route path="/Tickets" element={ <Tickets/> } />
                </Routes>
                       </ContextProvider>
               
        
                </section>
        </Router>
     
  

  );
}

export default App;
