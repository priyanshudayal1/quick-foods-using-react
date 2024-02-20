import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Dish from "./Dish";

export default function RestaurantMenu() {
  const res_img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    avgRatingString,
    areaName,
    sla,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
    expectationNotifiers,
  } = resInfo.data.cards[2].card.card.info;
  const { itemCards } =
    resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <>
      <div className="details flex justify-center">
        <div className="restaurant border w-[800px] flex flex-row justify-between p-4 shadow-lg mt-8">
          <div className="name ml-4">
            <h1 className="text-2xl font-bold ml-[300px]">{name}</h1>
            <div className="res-img">
              <img src={res_img_url+cloudinaryImageId} width={150} className="rounded-3xl" alt="" />
            </div>
            <h3 className="text-lg text-slate-500">{name}</h3>
            <p className="text-slate-500 text-sm">{cuisines.join(", ")}</p>
            <h4 className="text-slate-500 text-sm">
              {areaName}, {sla.lastMileTravel} km
            </h4>
            <p className="text-sm text-slate-500 mb-2">
              <i class="fa-solid fa-person-biking"></i>{" "}
              {expectationNotifiers[0].text}
            </p>
            <div className="flex flex-row mb-2">
              <p className="">
                <i class="fa-regular fa-clock"></i> &nbsp; {sla.deliveryTime}{" "}
                MINS
              </p>
              &nbsp; &nbsp;
              <p>
                 &nbsp;
                {costForTwoMessage}
              </p>
            </div>
          </div>
          <div className="rating border h-14 px-2 mt-6 text-center rounded-xl shadow-sm ml-[200px]">
            <div>
              <span className="text-green-600 text-sm ">
                <i class="fa-solid fa-star"></i> &nbsp;{avgRatingString}
              </span>
              <hr />
              <span className="text-slate-600 text-sm">
                {totalRatingsString}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-3xl font-bold font-sans mt-5 mb-5">MENU</p>
      <div className="menu flex justify-center flex-row flex-wrap ml-[10px] gap-3">
      
      <div>
      {
        itemCards.map((items)=>(
          <Dish data={items.card.info}/>
        ))
      }
      </div>
      

      </div>
      

    </>
  );
};