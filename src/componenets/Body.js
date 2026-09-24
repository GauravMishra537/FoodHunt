import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{
    const [listOfRestaurants, setListOfRestaurants]=  useState(resList);

    return (
        <div className="body">
            <div className="filter">
               <button 
                className="filter-btn" 
                onClick={() => {
                const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants  
                </button>
            </div>
            <div className="res-container">
               {
                listOfRestaurants.map((restaurant)=>(
                    <ResturantCard key={restaurant.info.id}resData={restaurant} />
                ))
               }
               
                 {/* <ResturantCard 
                resData={resList[14]}
                /> */}
               
                {/* <ResturantCard 
                resName="KFC"
                cuisine="Burger , Fast Food"
                rating="4.8"
                avgdelivery="25 min"
                />
                */}
            </div>
        </div>
    )
}
export default Body;