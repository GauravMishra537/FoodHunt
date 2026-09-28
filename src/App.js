import React from "react";
import ReactDom from "react-dom/client";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Body from "./componenets/Body";
import Error from "./componenets/Error";
import { createBrowserRouter , RouterProvider} from "react-router-dom";

const AppLayout= ()=>{
    return(
        <div className="app">
            <Header />
            <Body />

        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error />,
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
]);

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={(appRouter)} />);