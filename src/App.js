import React, { lazy, Suspense } from 'react'
import  ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { CartProvider } from './utils/ContextReducer';

const Grocery=lazy(()=>{
  import("./components/Grocery");
});

function AppLayout() {
   return (
     <div className='app'>
       <Header></Header>
       <Outlet/> 
       <Footer/>
     </div>
   )
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[{
      path:"/",
      element:<Body/>
    }
      ,
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"contactus",
        element:<Contactus/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/grocery",
        element:<Suspense fallback=<h1>Loading</h1> ><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<CartProvider><RouterProvider router={appRouter}/></CartProvider>);
 