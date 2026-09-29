import React from "react";
import ReactDom from "react-dom/client";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Body from "./componenets/Body";
import Error from "./componenets/Error";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import RestaurantMenu from "./componenets/RestaurantMenu";

const AppLayout= ()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
           children: [
        { 
            path: "", 
            element: <Body /> 
        },
        { 
            path: "about",
            element: <About />
        },
        { 
            path: "contact",
            element: <Contact /> 
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />
        }
        ],
        errorElement: <Error />,
    }
]);

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={(appRouter)} />);