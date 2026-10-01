import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [vegOnly, setVegOnly] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=" +
                resId +
                "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const menuCategories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // helper: get a displayable price even for items that use variantsV2 instead of flat price
    const getItemPrice = (info) => {
        if (info.price) return info.price / 100;
        if (info.defaultPrice) return info.defaultPrice / 100;
        if (info.variantsV2?.pricingModels?.[0]?.price) {
            return info.variantsV2.pricingModels[0].price / 100;
        }
        return null;
    };

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>

            <div className="veg-toggle">
                <span>Veg Only</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={vegOnly}
                        onChange={() => setVegOnly(!vegOnly)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            {menuCategories?.map((category, index) => {
                const items = category?.card?.card?.itemCards;
                if (!items) return null;

                const filteredItems = vegOnly
                    ? items.filter((item) => item.card.info.isVeg === 1)
                    : items;

                if (filteredItems.length === 0) return null;

                const isOpen = openCategory === index;

                return (
                    <div key={index} className="category">
                        <div
                            className="category-header"
                            onClick={() =>
                                setOpenCategory(isOpen ? null : index)
                            }
                        >
                            <span>
                                {category?.card?.card?.title} ({filteredItems.length})
                            </span>
                            <span>{isOpen ? "▲" : "▼"}</span>
                        </div>
                        {isOpen && (
                            <ul>
                                {filteredItems.map((item) => {
                                    const price = getItemPrice(item.card.info);
                                    return (
                                        <li key={item.card.info.id}>
                                            {item.card.info.name}
                                            {price !== null ? ` — ₹${price}` : ""}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;