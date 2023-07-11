import React, { Suspense, lazy, useEffect,useState } from "react";
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
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const About = lazy(() => import("./components/About"));
// ^^^^^^^^^^^^^^^^^^
// This is a dynamic import. It will load the component only when it is required.
// It is also called code splitting.
// It is also called Chunking.
// It is also called lazy loading.
// It is also called Dynamic import/loading.
// It is also called On demand loading.


const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Chetan Updated",
        email: "chetanupdated@localhost"
    });   
    // useEffect(() => {
    //     //authinticate the user
    //     //update using set user  
    // }, []);

    //now to send user data to the child components we can use props but it leads to prop drilling or THE PAIN
    //so we use context api or redux store to store the user data and access it in any component which are children of the provider
    // provider is the component which provides the data to the children
    // consumer is the component which consumes the data provided by the provider
    // context api is used to avoid prop drilling
    return (
        <>
            <Provider store={store}>
            <Header /> 
            <UserContext.Provider value={{user, setUser}}>
                <Outlet />
                <Footer />
            </UserContext.Provider>
            </Provider>
        </>
    )
    // usercontext provider is the provider i,e to update the context and the usercontext consumer is the consumers
    // if <Header/> is outside the provider then it will not be able to access the updated usercontext
    // proof check About component
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
            },
            {
                path:"cart",
                element: <Cart />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter}/>);
