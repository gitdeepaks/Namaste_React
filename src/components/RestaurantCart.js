import React from 'react'
import { CON_URL } from '../utils/constants';

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
        <div className="res-cart" >
            <img
                className="res-logo"
                src={CON_URL
                    + cloudinaryImageId}

            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCart