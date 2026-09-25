import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.02760&lng=72.58710&str=kfc&trackingId=c22c0812-5126-9ecc-9f7d-d005be1190e5&submitAction=ENTER&queryUniqueId=549aefc1-caca-bd4c-f2a3-64b492fc6f60"
        );
        const json = await data.json();
        console.log(json);

        const restaurants =
            json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants;

        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    //Conditional Rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filtered);
                        }}
                        className="search-button"
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setFilteredRestaurant(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;