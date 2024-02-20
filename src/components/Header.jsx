import useOnlineStatus from "../utils/useOnlineStatus";
import React, { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import { useCart } from "../utils/ContextReducer";

export default  Header=()=>{
  let data=useCart();
  const [cartView,setCartView]=useState(0);
  let [logbtn,setLogBtn]=useState("Login");
  function login(){
    logbtn==="Login"?setLogBtn("Logout"):setLogBtn("Login")
  }
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between mb-4 flex-wrap  items-center shadow-sm">
      <div className="logo flex justify-center items-center">
        <img className="w-[150px] h-[150px] mix-blend-multiply rounded-full"
          src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=626&ext=jpg&ga=GA1.1.999666586.1705236377&semt=ais"
          alt=""/>
          <div className=" text-3xl italic font-semibold"><Link to={"/"}>Quick Foods</Link></div>    
      </div>
      
      <div className="">
        <ul className="flex p-4 gap-2">
        <li className="hover:shadow-md hover:cursor-pointer rounded-lg  p-3">Online Status :{(onlineStatus)? "🟢": "🔴" } </li>
          <li className="hover:shadow-md hover:cursor-pointer rounded-lg p-3"><Link to={"/"}><i class="fa-solid fa-house"></i>&nbsp;Home</Link></li>
          <li className="hover:shadow-md hover:cursor-pointer rounded-lg p-3"><Link to={"/about"}><i class="fa-solid fa-address-card"></i>&nbsp;About Us</Link></li>
          <li className="hover:shadow-md hover:cursor-pointer rounded-lg p-3"><Link to={"/contactus"}><i class="fa-solid fa-phone"></i>&nbsp;Contact Us </Link></li>
          <li className="hover:shadow-md hover:cursor-pointer rounded-lg p-3"><Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>&nbsp;My Cart <span className="bg-red-600 px-1 rounded-full text-white">{data.length}</span></Link></li>
          <li className="hover:shadow-md hover:cursor-pointer rounded-lg p-3"><button className="login-btn" onClick={login}><i class="fa-solid fa-user"></i>&nbsp;{logbtn}</button></li>
        </ul>
      </div>
    </div>
  );
};