import ResturantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
    const [listOfRestaurants, setListOfRestaurants]=  useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.02760&lng=72.58710&str=kfc&trackingId=c22c0812-5126-9ecc-9f7d-d005be1190e5&submitAction=ENTER&queryUniqueId=549aefc1-caca-bd4c-f2a3-64b492fc6f60"
        );
        const json= await data.json();
        console.log(json); 
        setListOfRestaurants(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);

    }
    if (listOfRestaurants.length === 0) {
    return <Shimmer />;
}


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