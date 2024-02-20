import React from "react";
import { useDispatchCart } from "../utils/ContextReducer";

export default function CartCard(props) {
  let dispatch=useDispatchCart();
    let data=props;
    let index=props.key;
    const {name,price,image,qty,isVeg}=data.data;
    console.log(data)
  return <div className="cart-card w-[600px] h-[220px] border flex justify-between p-3 shadow-lg rounded-md">
    <div className="img">
    <p>{isVeg?<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" width={20} alt="" /></p>:<p><img src="https://m.media-amazon.com/images/I/31BQewBVXRL.jpg" width={20} alt="" /></p>}</p>
    <p className="text-2xl">{name}</p>
        <img className="rounded-xl h-[120px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+image} width={170} alt="" />
    </div> 
    <div className="details flex flex-col mt-6 gap-4 text-xl items-center">
    <div className="qty">
        Quantity - {qty} Items
    </div>
    <div className="price">Total Price - Rs {price*qty}
    </div>
    <div className="delete">
        <button className="text-red-600" onClick={()=>(dispatch({type:"REMOVE",index:index}))}><i className="fa-solid fa-trash"></i></button>
    </div>
    </div>
    
  </div>;
}
