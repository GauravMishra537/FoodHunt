import React from "react";
import ReactDom from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-vUvKgmZuhzCt0ApmfN2cYw2RTvbEgECZkd22QDh8g&s"/>
            </div>
            <div className="nav-items">
                <ul>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                   <li>Cart</li> 
                </ul>
            </div>

        </div>
    );
};

const resList = [
    {
        info: {
            id: "395939",
            name: "KFC",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/178a63d5-5676-4621-baac-ca031513ec67_395939.JPG",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4,
            costForTwo: "₹400 for two",
            sla: { slaString: "20-25 MINS" },
        },
    },
    {
        info: {
            id: "505182",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/710864cb-4973-494d-bca3-a14868019568_505182.JPG",
            cuisines: ["Pizzas"],
            avgRating: 4.2,
            costForTwo: "₹350 for two",
            sla: { slaString: "30-35 MINS" },
        },
    },
    {
        info: {
            id: "70279",
            name: "McDonald's",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/9e0ae133-a83d-418b-aec8-0ca614e4ff25_70279.JPG",
            cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
            avgRating: 4.3,
            costForTwo: "₹400 for two",
            sla: { slaString: "25-30 MINS" },
        },
    },
    {
        info: {
            id: "1030832",
            name: "Thalaiva Biryani",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/25fd6e88-fe02-434b-bf72-bd7d74c4ecfb_1030832.JPG",
            cuisines: ["Biryani", "Mughlai", "Lucknowi", "Hyderabadi", "Kebabs"],
            avgRating: 4.3,
            costForTwo: "₹400 for two",
            sla: { slaString: "30-35 MINS" },
        },
    },
    {
        info: {
            id: "542526",
            name: "Taco bell",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/e6aea00d-73d8-4d42-b09a-bf3e5b39270d_542526.JPG",
            cuisines: ["Mexican", "Fast Food", "Snacks"],
            avgRating: 4.3,
            costForTwo: "₹300 for two",
            sla: { slaString: "20-25 MINS" },
        },
    },
    {
        info: {
            id: "384540",
            name: "Shawarma Souk",
            cloudinaryImageId: "84f521eb4eb0c8d93744781b4fc1027e",
            cuisines: ["Arabian", "wraps", "high protien", "fast food"],
            avgRating: 4.3,
            costForTwo: "₹250 for two",
            sla: { slaString: "35-40 MINS" },
        },
    },
    {
        info: {
            id: "1010958",
            name: "Murgh-E-Matka",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/b517846a-601a-4828-9043-26107f5de07d_1010958.jpg",
            cuisines: ["Tandoor"],
            avgRating: 3.7,
            costForTwo: "₹599 for two",
            sla: { slaString: "50-60 MINS" },
        },
    },
    {
        info: {
            id: "398565",
            name: "Biryani Stock Exchange",
            cloudinaryImageId: "f4479928f4e031faff7ea61bed86e998",
            cuisines: ["Biryani", "mughlai", "hyderabadi", "north indian"],
            avgRating: 4.1,
            costForTwo: "₹400 for two",
            sla: { slaString: "30-35 MINS" },
        },
    },
    {
        info: {
            id: "37488",
            name: "The Chocolate Room",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/85b2e097-34c2-406a-b0c9-bbbca22b05d9_37488.jpg",
            cuisines: ["Bakery", "Desserts", "Beverages", "Fast Food", "Cafe"],
            avgRating: 4.4,
            costForTwo: "₹400 for two",
            sla: { slaString: "15-20 MINS" },
        },
    },
    {
        info: {
            id: "91030",
            name: "Behrouz Biryani",
            cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
            cuisines: ["Biryani", "North Indian", "Kebabs", "Mughlai", "Beverages", "Desserts"],
            avgRating: 4.2,
            costForTwo: "₹500 for two",
            sla: { slaString: "35-40 MINS" },
        },
    },
    {
        info: {
            id: "395261",
            name: "McDonald's Gourmet Burger Collection",
            cloudinaryImageId: "zubk0ubghevapnvw6u9c",
            cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
            avgRating: 3.9,
            costForTwo: "₹500 for two",
            sla: { slaString: "20-25 MINS" },
        },
    },
    {
        info: {
            id: "883763",
            name: "Crunch - Sandwich Series By Nomad",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/ced8e0dd-7eae-4133-b719-bc740d0a5a5f_883763.jpg",
            cuisines: ["Pizzas", "Fast Food", "Beverages"],
            avgRating: 4.2,
            costForTwo: "₹400 for two",
            sla: { slaString: "25-30 MINS" },
        },
    },
    {
        info: {
            id: "494284",
            name: "Micro Cafe",
            cloudinaryImageId: "5318a252a9f5ba99da762d0ad957d0af",
            cuisines: ["Burgers", "American", "Fast Food"],
            avgRating: 4.7,
            costForTwo: "₹200 for two",
            sla: { slaString: "25-30 MINS" },
        },
    },
    {
        info: {
            id: "936323",
            name: "Mad Over Donuts",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/3/5cc1a4cc-aafe-4272-a55b-97bb9a28a082_936323.jpg",
            cuisines: ["Desserts", "Sweets", "Bakery"],
            avgRating: 4.3,
            costForTwo: "₹200 for two",
            sla: { slaString: "30-35 MINS" },
        },
    },
    {
        info: {
            id: "37579",
            name: "Tummy Fillers",
            cloudinaryImageId: "cvixuieqe08gqcnl33mi",
            cuisines: ["Burgers", "Fast Food", "Snacks"],
            avgRating: 4.4,
            costForTwo: "₹200 for two",
            sla: { slaString: "25-30 MINS" },
        },
    },
];


const ResturantCard=(props)=>{
    const {resData}=props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info;
    return(
        <div className="res-card" >
            <img
            className="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating}</h5>
           <h5>{costForTwo }</h5>
           <h5>{deliveryTime}</h5>

        </div>
    )
}
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

const AppLayout= ()=>{
    return(
        <div className="app">
            <Header />
            <Body />

        </div>
    );
};
const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);