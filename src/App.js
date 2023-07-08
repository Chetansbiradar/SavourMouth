import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
const About = lazy(() => import("./components/About"));
// ^^^^^^^^^^^^^^^^^^
// This is a dynamic import. It will load the component only when it is required.
// It is also called code splitting.
// It is also called Chunking.
// It is also called lazy loading.
// It is also called Dynamic import/loading.
// It is also called On demand loading.


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const BrowserRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "about",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                </Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    }
                ]
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "restaurant/:id",
                element: <RestaurantMenu />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter}/>);
