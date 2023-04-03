import React from 'react'
import RestaurantCart from './RestaurantCart';
import resObj from '../utils/mockData';



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

export default Body