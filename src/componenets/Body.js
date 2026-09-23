import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
               {
                resList.map((restaurant)=>(
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