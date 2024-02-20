import React, { useContext } from "react";
import CartCard from "./CartCard";
import { useCart, useDispatchCart } from "../utils/ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="cart-cont flex justify-center flex-col ">
        <h1 className="text-6xl text-center">Your Cart</h1>
        <div className="cart h-[600px]">
          <p className="text-5xl text-center mt-6 mb-6">
            Looks Like Your Cart is Empty
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="cart-cont flex justify-center flex-col ">
      <h1 className="text-6xl text-center">Your Cart</h1>
      <div className="cart ">
        <div className="card flex justify-center ">
          <ul className="flex justify-center mt-6 gap-4 mb-6 flex-col ">
            {data.map((item,index) => (
              <li>
                <CartCard data={item} key={index} />
              </li>
            ))}
            <li className="flex justify-center"><button className="bg-green-500 hover:bg-green-600 text-white w-[150px] rounded-lg px-2 py-2 text-center">Checkout</button></li>
          </ul>
        </div>
        
      </div>
      
    </div>
  );
}
