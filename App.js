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

const ResturantCard=(props)=>{
    const {resName , cuisine , rating ,avgdelivery}=props;
    return(
        <div className="res-card" >
            <img
            className="res-logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVqxfmsUlXci4Gq_0qCR1iZgxxRKitcH5m_9uj7LPlw&s=10"/>
            <h4>{resName}</h4>
            <h5>{cuisine}</h5>
            <h5>{rating}</h5>
            <h5>{avgdelivery}</h5>

        </div>
    )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
               
                <ResturantCard 
                resName="Meghna Food"
                cuisine="Birayani, North Indian"
                rating="4.4"
                avgdelivery="38 min"
                />
                <ResturantCard 
                resName="KFC"
                cuisine="Burger , Fast Food"
                rating="4.8"
                avgdelivery="25 min"
                />
               
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