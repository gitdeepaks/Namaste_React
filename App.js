
import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
     return (
          <div className="header">
               <div>
                    <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" />
               </div>
               <div className="nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About</li>
                         <li>Contact Us</li>
                         <li>Cart</li>
                    </ul>
               </div>
          </div>
     )
}


const styleCard = {
     backgroundColor: "#f0f0f0",

}

const RestaurantCart = (props) => {


     return (
          <div className="res-cart" style={styleCard}>
               <img className="res-logo"
                    src="https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg" />
               <h3>{props.resName}</h3>
               <h4>{props.cuisine}</h4>
               <h4>4.4 stars</h4>
               <h4>38 Minutes</h4>
          </div>
     )
}

const Body = () => {

     return (
          <div className="body">
               <div>
                    <div className="search">
                         <input className="search" type={"search"} />
                    </div>
                    <div className="res-container">
                         <RestaurantCart
                              resName="Meghna Food"
                              cuisine="Biryani, North Indian, Asian"
                         />
                         <RestaurantCart resName="KFC"
                              cuisine="Burger, Fast Food"
                         />

                    </div>
               </div>
          </div>
     )
}

const AppLayout = () => {
     return (
          <div className="app">
               <Header />
               <Body />
          </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head);
root.render(<AppLayout />);



