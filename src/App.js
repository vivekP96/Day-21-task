import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import data from "./data/data.json";
export default function App() {
  const [itemCount,setItemCount]=useState(0);
  const manageItems = (e) => {
    if (e.target.innerText === "Add to cart") {
      setItemCount(itemCount + 1);
      e.target.innerText = "Remove from cart";
      e.target.classList.value = "btn btn-primary mt-auto";
    } else if (e.target.innerText === "Remove from cart") {
      setItemCount(itemCount - 1);
      e.target.innerText = "Add to cart";
      e.target.classList.value = "btn btn-danger mt-auto";
    }
  };
  return(
    <>
    <Navbar itemCount={itemCount}/>
    <Header />
< Cards data={data} manageItems={manageItems}/>
    <Footer />

    </>
  )
    
 
}
