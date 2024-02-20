import React from "react";
import { IMG_LINK } from "../utils/constant";
import { useDispatchCart,useCart } from "../utils/ContextReducer";

export default function ResCard(props) {
  const {data}=props;
  
  const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId}=data?.info;
  return (
    <div className="res-card m-4 p-4 w-[300px] border-2 shadow-lg h-[500px] bg-gray-50 rounded-lg hover:bg-gray-100 hover:scale-105  ">
      <img className="res-img rounded-lg h-[250px] w-[300px]" src={IMG_LINK+cloudinaryImageId} alt="" />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="font-semibold py-1">{cuisines.join(" , ",",")}</h4>
      <h4 className="font-semibold py-1">{costForTwo}</h4>
      <h4 className="font-semibold py-1">{avgRating} <span className="text-yellow-600"><i class="fa-solid fa-star"></i></span></h4>
      <h4 className="font-semibold py-1">{sla.deliveryTime} Minutes</h4>
    </div>
  );
}



