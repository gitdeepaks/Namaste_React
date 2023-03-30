
import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
     return (
          <div className="header">
               <div>
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
          </div>
     )
}


const styleCard = {
     backgroundColor: "#f0f0f0",

}

const RestaurantCart = (props) => {
     const { resData } = props;

     return (
          <div className="res-cart" style={styleCard}>
               <img
                    className="res-logo"
                    src={
                         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId}

               />
               <h3>{resData.data.name}</h3>
               <h4>{resData.data.cuisines.join(", ")}</h4>
               <h4 h4 > {resData.data.avgRating} stars</h4>
               <h4>{resData.data.costForTwo / 100}</h4>
               <h4>{resData.data.deliveryTime} Minutes</h4>
          </div>
     )
}

const resObj = {
     "type": "restaurant",
     "data": {
          "type": "F",
          "id": "694226",
          "name": "Garage bakery and cafe",
          "uuid": "5e387feb-83d4-4b20-b6da-2df95e51e4ec",
          "city": "12",
          "area": "C Scheme",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "44a4b325cd9f47e70905f55b5779b93c",
          "cuisines": [
               "Desserts",
               "Snacks",
               "Fast Food"
          ],
          "tags": [],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 1.399999976158142,
          "slugs": {
               "restaurant": "garage-bakery-and-cafe-c-scheme-c-scheme",
               "city": "jaipur"
          },
          "cityState": "12",
          "address": "J 17 D, Ramesh Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302002, India",
          "locality": "Ashok Nagar",
          "parentId": 416353,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
               {
                    "type": "PROMOTED"
               }
          ],
          "chain": [],
          "feeDetails": {
               "fees": [
                    {
                         "name": "distance",
                         "fee": 2400,
                         "message": ""
                    },
                    {
                         "name": "time",
                         "fee": 0,
                         "message": ""
                    },
                    {
                         "name": "special",
                         "fee": 0,
                         "message": ""
                    }
               ],
               "totalFees": 2400,
               "message": "",
               "title": "Delivery Charge",
               "amount": "2400",
               "icon": ""
          },
          "availability": {
               "opened": true,
               "nextOpenMessage": "",
               "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6282530~p=1~eid=00000187-3266-7ed6-074f-3c7d00110117",
          "badges": {
               "imageBased": [],
               "textBased": [],
               "textExtendedBadges": []
          },
          "lastMileTravelString": "1.3 kms",
          "hasSurge": false,
          "sla": {
               "restaurantId": "694226",
               "deliveryTime": 29,
               "minDeliveryTime": 29,
               "maxDeliveryTime": 29,
               "lastMileTravel": 1.399999976158142,
               "lastMileDistance": 0,
               "serviceability": "SERVICEABLE",
               "rainMode": "NONE",
               "longDistance": "NOT_LONG_DISTANCE",
               "preferentialService": false,
               "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "--",
          "totalRatings": 0,
          "new": true
     },
     "subtype": "basic"
}

const Body = () => {

     return (
          <div className="body">

               <div className="search">
                    Search
               </div>
               <div className="res-container">
                    <RestaurantCart
                         resData={resObj}
                    />


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



