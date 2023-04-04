
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantCart from "./components/RestaurantCart";
import Body from "./components/Body";


//not using keys (not acceptable) <<<<< index as keys <<<<<<< unique id (best practice)

const AppLayout = () => {
     return (
          <>

               <div className="app">
                    < Header />
                    <Body />

               </div>
          </>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head);
root.render(<AppLayout />);



