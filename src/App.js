import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import Feedback from './Component/Feedback';
import Cart from './Component/Cart';
import Contact from './Component/Contact';
import Navbar from './Navbar';

function App() {
  return (
   <>
   
    <Routes>
      <Route  element={<Navbar/>}>
      <Route path="/" element={<Home />} />     
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      </Route>
    
    </Routes>
    {/* <Form/> */}
    </>
  );
}
export default App;

