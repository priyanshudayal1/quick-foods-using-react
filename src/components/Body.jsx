import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
  const onlineStatus = useOnlineStatus();
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [resUpdate,setResUpdate]=useState([]);
  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // const updateData=async()=>{
  //   const newData=await fetch("https://www.swiggy.com/dapi/restaurants/list/update&lat=23.1685786&lng=79.9338798");
  //   const newJson=await newData.json();
  //   console.log(newJson);
  // };
  // updateData();
  useEffect(() => {
    fetchData();
  }, []);
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  if (resList.length === 0) {
    return (
      <>
        <div className="filter flex justify-center">
          <div className="search m-4 p-4">
            <label htmlFor="s-bar">
              <input
                type="text"
                id="s-bar"
                placeholder="Search Restraunts"
                className="focus:ring-1 focus:ring-[#ed1b24] focus:outline-none appearance-none mr-4 text-sm leading-6 text-slate-900 placeholder-black rounded-md py-1 pl-10 ring-1 ring-slate-200 shadow-sm"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="bg-[#ed1b24] text-white px-4 py-1 rounded-lg"
                onClick={() => {
                  let filteredList = resList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilterRes(filteredList);
                }}
              >
                <i class="fa-solid fa-magnifying-glass"></i>&nbsp;Search
              </button>
            </label>
          </div>
          <div className="filter flex justify-center items-center">
            <button
              className="filter-btn bg-slate-600 px-4 py-1 text-white rounded-xl"
              onClick={() => {
                let topList = resList.filter((res) => res.info.avgRating > 4);
                setFilterRes(topList);
              }}
            ><i class="fa-solid fa-star"></i> &nbsp;
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <Shimmer />
      </>
    );
  }

  return (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <label htmlFor="s-bar">
            <input
              type="text"
              id="s-bar"
              placeholder="Search Restraunts"
              className="focus:ring-1 focus:ring-[#ed1b24] focus:outline-none appearance-none mr-4 text-sm leading-6 text-slate-900 placeholder-black rounded-md py-1 pl-10 ring-1 ring-slate-200 shadow-sm "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-[#ed1b24] text-white px-4 py-1 rounded-lg"
              onClick={() => {
                let filteredList = resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterRes(filteredList);
              }}
            ><i class="fa-solid fa-magnifying-glass"></i> &nbsp;
              Search
            </button>
          </label>
        </div>
        <div className="filter flex justify-center items-center">
          <button
            className="filter-btn bg-slate-600 px-4 py-1 text-white rounded-xl"
            onClick={() => {
              let topList = resList.filter((res) => res.info.avgRating > 4);
              setFilterRes(topList);
            }}
          ><i class="fa-solid fa-star"></i> &nbsp;
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filterRes.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <ResCard data={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};


// search-box px-4 mr-2 rounded-lg border border-solid border-black