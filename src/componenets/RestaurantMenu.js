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
            `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
        );
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const menuCategories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

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
                    ? items.filter(
                          (item) =>
                              !item.card.info.name.toLowerCase().includes("chicken") &&
                              !item.card.info.name.toLowerCase().includes("bbq")&&
                               !item.card.info.name.toLowerCase().includes("beef") 
                      )
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
                                {filteredItems.map((item) => (
                                    <li key={item.card.info.id}>
                                        {item.card.info.name} — ₹
                                        {item.card.info.price / 100}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantMenu;