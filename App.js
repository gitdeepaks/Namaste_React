
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
     const { resData } = props;

     const {
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          costForTwo,
          deliveryTime
     }
          = resData?.data;

     return (
          <div className="res-cart" style={styleCard}>
               <img
                    className="res-logo"
                    src={
                         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}

               />
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{costForTwo / 100}</h4>
               <h4>{deliveryTime} Minutes</h4>
          </div>
     )
}

const resObj = [
     {
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
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "249749",
               "name": "McDonald's",
               "uuid": "7a53e1b3-02fd-4ab7-8a02-97ac75cdf807",
               "city": "12",
               "area": "Bais Godam",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
               "cuisines": [
                    "American"
               ],
               "tags": [],
               "costForTwo": 40000,
               "costForTwoString": "₹400 FOR TWO",
               "deliveryTime": 23,
               "minDeliveryTime": 23,
               "maxDeliveryTime": 23,
               "slaString": "23 MINS",
               "lastMileTravel": 1.399999976158142,
               "slugs": {
                    "restaurant": "mcdonalds-rj-jaipur-crystal-palm-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "RJ Jaipur Crystal Palm, Plot no-2, Shakar Circle, Sardar Patel Marg,C-scheme, Jaipur - 302004",
               "locality": "Crystal Palm Mall",
               "parentId": 630,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "1.3 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "249749",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.1",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "45977",
               "name": "Burger Farm",
               "uuid": "e318b0df-2f35-4a73-88cc-1b9347392a71",
               "city": "12",
               "area": "C Scheme",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "nzcyy3dllok64io32kva",
               "cuisines": [
                    "American",
                    "Continental",
                    "Italian-American",
                    "Snacks",
                    "Grill",
                    "Beverages",
                    "Bakery",
                    "Desserts",
                    "Barbecue"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 22,
               "minDeliveryTime": 22,
               "maxDeliveryTime": 22,
               "slaString": "22 MINS",
               "lastMileTravel": 1,
               "slugs": {
                    "restaurant": "burger-farm-c-scheme-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "GROUND FLOOR PLOT NO.F-30, AZAD MARG C-SCHEME JAIPUR, Jaipur, Jaipur, Rajasthan-302001",
               "locality": "Azad Marg",
               "parentId": 4660,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                         {
                              "meta": "30% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "30% off up to ₹75 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "30% off up to ₹75 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "1 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "45977",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 1,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.2",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "137295",
               "name": "GVD Soni's Cafe - Vaishali Nagar ",
               "uuid": "9bb720e3-7777-4e2a-a097-ea170bdc56fa",
               "city": "12",
               "area": "Vaishali Nagar",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "iagvmbi0jghhqxepv1gw",
               "cuisines": [
                    "Fast Food",
                    "Burgers",
                    "Snacks",
                    "Pizzas",
                    "Chinese",
                    "American",
                    "Italian",
                    "Pastas",
                    "Beverages",
                    "Desserts",
                    "Indian"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 31,
               "minDeliveryTime": 31,
               "maxDeliveryTime": 31,
               "slaString": "31 MINS",
               "lastMileTravel": 6,
               "slugs": {
                    "restaurant": "gvd-sonis-cafe-chitrakoot-vaishali-nagar",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "6/18 A, chitrakoot yogna,vaishali nagar-302020",
               "locality": "Chitrakoot",
               "parentId": 4737,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                         {
                              "meta": "50% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off up to ₹100 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off up to ₹100 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
                              "fee": 4600,
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
                    "totalFees": 4600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4600",
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
               "adTrackingID": "cid=6283951~p=4~eid=00000187-3266-7ed6-074f-3c7e00110444",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "6 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "137295",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 6,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": true,
               "avgRating": "3.9",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "47268",
               "name": "Dzurt Patisserie and Cafe",
               "uuid": "0aa359bf-1dbe-4b95-85b7-d4e09aa6865d",
               "city": "12",
               "area": "Civil Lines",
               "totalRatingsString": "1000+ ratings",
               "cloudinaryImageId": "ystfg2ssde5ujauz7ff6",
               "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages"
               ],
               "tags": [],
               "costForTwo": 60000,
               "costForTwoString": "₹600 FOR TWO",
               "deliveryTime": 22,
               "minDeliveryTime": 22,
               "maxDeliveryTime": 22,
               "slaString": "22 MINS",
               "lastMileTravel": 0.4000000059604645,
               "slugs": {
                    "restaurant": "dzurt-patisserie-and-cafe-achrol-house-civil-lines-lal-kothi",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "Achrol House, Jacob Road, Civil Lines, Near Hari Mahal Palace, Jaipur, Rajasthan 302006",
               "locality": "Achrol House",
               "parentId": 75649,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "0.4 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "47268",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.0",
               "totalRatings": 1000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "44439",
               "name": "Kanha",
               "uuid": "548f2b08-6dae-499b-822f-22c923ce3c4f",
               "city": "12",
               "area": "C Scheme",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "nbbc3rtpcqq1dss7bcmi",
               "cuisines": [
                    "Sweets",
                    "Fast Food",
                    "North Indian",
                    "South Indian",
                    "Chinese",
                    "Snacks",
                    "Beverages",
                    "Indian",
                    "Continental",
                    "Italian",
                    "American",
                    "Rajasthani",
                    "Chaat",
                    "Thalis",
                    "Bakery",
                    "Grill",
                    "Salads",
                    "Healthy Food",
                    "Pizzas"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 23,
               "minDeliveryTime": 23,
               "maxDeliveryTime": 23,
               "slaString": "23 MINS",
               "lastMileTravel": 2,
               "slugs": {
                    "restaurant": "kanha-c-scheme-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "E-62 First Floor, Bhagat Singh Marg, C Scheme, Jaipur, Rajasthan 302001",
               "locality": "C Scheme",
               "parentId": 4650,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                         {
                              "meta": "40% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "44439",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.3",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "223159",
               "name": "Oven Story Pizza",
               "uuid": "ba4b54b5-70d6-41ce-8222-7171f7dcbbc1",
               "city": "12",
               "area": "Bais Godam",
               "totalRatingsString": "1000+ ratings",
               "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
               "cuisines": [
                    "Pizzas"
               ],
               "tags": [],
               "costForTwo": 40000,
               "costForTwoString": "₹400 FOR TWO",
               "deliveryTime": 30,
               "minDeliveryTime": 30,
               "maxDeliveryTime": 30,
               "slaString": "30 MINS",
               "lastMileTravel": 2.799999952316284,
               "slugs": {
                    "restaurant": "ovenstory-pizza-kartarpura-lal-kothi",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "Ground Floor, Prakash Square, Plot No 36, Off Bais Godam Main Road, Industrial Area, Kartarpura, Jaipur 302019",
               "locality": "Kartarpura",
               "parentId": 3534,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                         {
                              "meta": "60% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "60% off up to ₹120 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "60% off up to ₹120 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "cid=6285436~p=7~eid=00000187-3266-7ed6-074f-3c7f0011071a",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "2.7 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "223159",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 2.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": true,
               "avgRating": "3.7",
               "totalRatings": 1000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "55887",
               "name": "Rawat Mishthan Bhandar",
               "uuid": "137609bc-bd8f-4a70-914e-7dea1b2e49d8",
               "city": "12",
               "area": "Sindhi Camp",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "uzklu7r1dd7kc1lto5l5",
               "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Chinese",
                    "Mughlai",
                    "Chaat",
                    "Punjabi",
                    "Desserts",
                    "Snacks",
                    "Rajasthani",
                    "Tandoor",
                    "Sweets",
                    "Indian",
                    "Beverages",
                    "Ice Cream",
                    "Italian",
                    "Pastas"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 23,
               "minDeliveryTime": 23,
               "maxDeliveryTime": 23,
               "slaString": "23 MINS",
               "lastMileTravel": 2.200000047683716,
               "slugs": {
                    "restaurant": "rawat-mishthan-bhandar-sindhi-camp-sindhi-camp",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "Opposite Polovictory Cinema, Station Road, Sindhi Camp, Jaipur",
               "locality": "Kanti Nagar",
               "parentId": 167813,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "2.2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "55887",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 2.200000047683716,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.3",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "464295",
               "name": "Brot Company",
               "uuid": "145d1ade-65b1-4002-bfe5-298f739df5ab",
               "city": "12",
               "area": "Civil Lines",
               "totalRatingsString": "100+ ratings",
               "cloudinaryImageId": "visblary5rfqbr5iz5fx",
               "cuisines": [
                    "Asian",
                    "Italian",
                    "Desserts",
                    "Pizzas",
                    "Continental",
                    "Bakery",
                    "Chinese",
                    "Pastas"
               ],
               "tags": [],
               "costForTwo": 60000,
               "costForTwoString": "₹600 FOR TWO",
               "deliveryTime": 21,
               "minDeliveryTime": 21,
               "maxDeliveryTime": 21,
               "slaString": "21 MINS",
               "lastMileTravel": 0.20000000298023224,
               "slugs": {
                    "restaurant": "brot-company-c-scheme-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "FIRST FLOOR, 5 BARWARA KOTHI, Jacob Rd, Madrampur, Civil Lines, Jaipur, Rajasthan 302006, India",
               "locality": "Civil Lines",
               "parentId": 278801,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "0.2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "464295",
                    "deliveryTime": 21,
                    "minDeliveryTime": 21,
                    "maxDeliveryTime": 21,
                    "lastMileTravel": 0.20000000298023224,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.2",
               "totalRatings": 100,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "46153",
               "name": "Sai Chaap Corner-Vaishali Nagar",
               "uuid": "870037db-faac-4aa3-800c-67b87401f5b9",
               "city": "12",
               "area": "Vaishali Nagar",
               "totalRatingsString": "10000+ ratings",
               "cloudinaryImageId": "zzpuentpavpnupc9t5mo",
               "cuisines": [
                    "Indian",
                    "Snacks"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 33,
               "minDeliveryTime": 33,
               "maxDeliveryTime": 33,
               "slaString": "33 MINS",
               "lastMileTravel": 6,
               "slugs": {
                    "restaurant": "sai-chaap-corner-vaishali-nagar-vaishali-nagar",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "S-30, Ground Floor, JDA Commercial Complex, Near Mini Punjab, Vaishali Nagar, Jaipur",
               "locality": "Nemi Nagar",
               "parentId": 174967,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                         {
                              "meta": "20% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "20% off up to ₹50 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "20% off up to ₹50 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
                              "fee": 4600,
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
                    "totalFees": 4600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4600",
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
               "adTrackingID": "cid=6194103~p=10~eid=00000187-3266-7ed6-074f-3c8000110a33",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "6 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "46153",
                    "deliveryTime": 33,
                    "minDeliveryTime": 33,
                    "maxDeliveryTime": 33,
                    "lastMileTravel": 6,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": true,
               "avgRating": "3.9",
               "totalRatings": 10000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "375271",
               "name": "Burger Shack by Brown Sugar",
               "uuid": "4e1111c6-fb07-44a8-b4c2-f4ddf1a593ff",
               "city": "12",
               "area": "Subhash Nagar",
               "totalRatingsString": "1000+ ratings",
               "cloudinaryImageId": "hcnhkmsffushhtoelcuj",
               "cuisines": [
                    "American",
                    "Continental",
                    "Burgers",
                    "Snacks",
                    "Fast Food",
                    "Desserts",
                    "Beverages",
                    "Pizzas"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 20,
               "minDeliveryTime": 20,
               "maxDeliveryTime": 20,
               "slaString": "20 MINS",
               "lastMileTravel": 1.2999999523162842,
               "slugs": {
                    "restaurant": "burger-shack-c-scheme-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "J-2 Shubhash Marg, Jamna Lal Bajaj Marg C-Scheme Jaipur",
               "locality": "Subhash Nagar",
               "parentId": 11388,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                         {
                              "meta": "40% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "1.2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "375271",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "4.0",
               "totalRatings": 1000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "60482",
               "name": "Roll Express",
               "uuid": "b05af642-e240-45fc-9cfa-662a9181e54a",
               "city": "12",
               "area": "C Scheme",
               "totalRatingsString": "5000+ ratings",
               "cloudinaryImageId": "bj8dju5wf8h0wikjrr11",
               "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "North Indian",
                    "Chinese",
                    "Bengali",
                    "Beverages",
                    "Lucknowi",
                    "Mughlai",
                    "Indian",
                    "Continental"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 28,
               "minDeliveryTime": 28,
               "maxDeliveryTime": 28,
               "slaString": "28 MINS",
               "lastMileTravel": 1.2999999523162842,
               "slugs": {
                    "restaurant": "roll-express-ramesh-marg-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": " J-23 Subhash Marg, Bhagadiya bhawan, C-scheme, Jaipur",
               "locality": "Ramesh Marg",
               "parentId": 16561,
               "unserviceable": false,
               "veg": false,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                         {
                              "meta": "50% off on all orders",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         },
                         {
                              "meta": "Free Aloo Roll on orders above ₹499",
                              "discountType": "Freebie",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off on all orders",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         },
                         {
                              "meta": "Free Aloo Roll on orders above ₹499",
                              "discountType": "Freebie",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off on all orders",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         },
                         {
                              "meta": "Free Aloo Roll on orders above ₹499",
                              "discountType": "Freebie",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "1.2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "60482",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "3.9",
               "totalRatings": 5000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "266336",
               "name": "THE WAFFLE BITE",
               "uuid": "1009e8ce-a11b-4b00-847b-850a060974c3",
               "city": "12",
               "area": "Lal Kothi",
               "totalRatingsString": "1000+ ratings",
               "cloudinaryImageId": "qsacol8dqamotovi5ad5",
               "cuisines": [
                    "Desserts",
                    "Snacks",
                    "Beverages"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 29,
               "minDeliveryTime": 29,
               "maxDeliveryTime": 29,
               "slaString": "29 MINS",
               "lastMileTravel": 3,
               "slugs": {
                    "restaurant": "the-waffle-bite-c-scheme-c-scheme",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "A-1 KRISHNA NAGAR-11,LAL KOTHI JAIPUR,RAJASTHAN - 302015",
               "locality": "C Scheme",
               "parentId": 215248,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                         {
                              "meta": "40% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "40% off up to ₹80 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
                              "fee": 2900,
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
                    "totalFees": 2900,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2900",
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
               "adTrackingID": "cid=6270032~p=13~eid=00000187-3266-7ed6-074f-3c8100110d57",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "3 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "266336",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": true,
               "avgRating": "3.7",
               "totalRatings": 1000,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "654536",
               "name": "Shree Thali N Curry By Kilo",
               "uuid": "4b349248-ea2b-4596-b40e-171fe594f624",
               "city": "12",
               "area": "Madrampur",
               "totalRatingsString": "Too Few Ratings",
               "cloudinaryImageId": "c2a73fbd7676b318e5afb3cfe381039d",
               "cuisines": [
                    "North Indian",
                    "Thalis"
               ],
               "tags": [],
               "costForTwo": 20000,
               "costForTwoString": "₹200 FOR TWO",
               "deliveryTime": 25,
               "minDeliveryTime": 25,
               "maxDeliveryTime": 25,
               "slaString": "25 MINS",
               "lastMileTravel": 0.20000000298023224,
               "slugs": {
                    "restaurant": "shree-thali-n-curry-by-kilo-c-scheme-c-scheme-2",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "5, Jacob Rd, Madrampur, Civil Lines, Jaipur, Rajasthan 302006, India",
               "locality": "Jacob Road",
               "parentId": 393809,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                         {
                              "meta": "30% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "30% off | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "30% off | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "0.2 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "654536",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 0.20000000298023224,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "--",
               "totalRatings": 0,
               "new": false
          },
          "subtype": "basic"
     },
     {
          "type": "restaurant",
          "data": {
               "type": "F",
               "id": "529795",
               "name": "Shekhawati Thali",
               "uuid": "7c079164-35bb-413c-a0d1-b68c1c6e164a",
               "city": "12",
               "area": "Gopalbari",
               "totalRatingsString": "50+ ratings",
               "cloudinaryImageId": "gq1qzctjmvoawrj5oa21",
               "cuisines": [
                    "North Indian",
                    "Indian"
               ],
               "tags": [],
               "costForTwo": 30000,
               "costForTwoString": "₹300 FOR TWO",
               "deliveryTime": 18,
               "minDeliveryTime": 18,
               "maxDeliveryTime": 18,
               "slaString": "18 MINS",
               "lastMileTravel": 0.800000011920929,
               "slugs": {
                    "restaurant": "daawat-e-chaska-malviya-nagar-malviya-nagar",
                    "city": "jaipur"
               },
               "cityState": "12",
               "address": "Plot no 74/75  opposite corporate park, ajmer road,gopalbari (Hotal spark) jaipur",
               "locality": "Janpath Road",
               "parentId": 182729,
               "unserviceable": false,
               "veg": true,
               "select": false,
               "favorite": false,
               "tradeCampaignHeaders": [],
               "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                         {
                              "meta": "50% off | Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off up to ₹100 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
               "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                         {
                              "meta": "Use TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "descriptionList": [
                         {
                              "meta": "50% off up to ₹100 | Use code TRYNEW",
                              "discountType": "Percentage",
                              "operationType": "RESTAURANT"
                         }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
               },
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
               "adTrackingID": "",
               "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
               },
               "lastMileTravelString": "0.8 kms",
               "hasSurge": false,
               "sla": {
                    "restaurantId": "529795",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "lastMileTravel": 0.800000011920929,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
               },
               "promoted": false,
               "avgRating": "3.8",
               "totalRatings": 50,
               "new": false
          },
          "subtype": "basic"
     }
];

//not using keys (not acceptable) <<<<< index as keys <<<<<<< unique id (best practice)

const Body = () => {

     return (
          <div className="body">

               <div className="search">
                    Search
               </div>
               <div className="res-container">
                    {
                         resObj.map((restaurant) =>
                         (<RestaurantCart key={restaurant.data.id} resData={restaurant} />
                         ))}


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



