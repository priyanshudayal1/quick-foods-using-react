import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart} from "../utils/ContextReducer";


export default function Dish(props) {
  let dispatch=useDispatchCart();
  const incCount=()=>{
    setQty(curr=>curr+1)
  };
  const decCount=()=>{
    setQty(curr=>curr-1)
  };
  
  let Data=useCart();
  const { data } = props;
  const { name, isVeg, description, price, imageId } = data;
  const [qty,setQty]=useState(1);
  const handleAddToCart=async ()=>{
    await dispatch({type:"ADD",name:name,price:price/100,image:imageId,isVeg:isVeg,qty:qty,totalPrice:(qty*price)});
    console.log(Data);
  };
  const img_url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  
  return (
    <div className="flex flew-row h-[280px] gap-2 w-[800px] border mb-5 shadow-lg p-4">
      <div className="details flex gap-4 flex-col w-full ">
        <p>{isVeg?<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" width={20} alt="" /></p>:<p><img src="https://m.media-amazon.com/images/I/31BQewBVXRL.jpg" width={20} alt="" /></p>}</p>
        <h1>{name}</h1>
        <h1>₹ {price / 100}</h1>
        <p className="text-sm text-slate-500 ">{description}</p>
      </div>
      <div className="dish-img flex flex-col justify-center items-center">
        <img src={img_url + imageId} className="rounded-xl h-[180px]" width={256} alt="Image not availble" />
        <div className="flex flex-col mt-2">
        <p className="flex gap-4 "><button onClick={decCount} className="hover:cursor-pointer hover:bg-green-600 bg-green-500 px-2 py-1 rounded-lg"><i class="fa-solid fa-minus"></i></button> <span className="border-2 px-9 rounded-lg">{qty}</span> <button onClick={incCount} className="hover:cursor-pointer hover:bg-green-600 bg-green-500 px-2 py-1 rounded-lg"><i class="fa-solid fa-plus"></i></button></p>
        
        <button className="mt-2 border rounded-lg px-2 py-2 bg-red-500 text-white hover:bg-red-600" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
