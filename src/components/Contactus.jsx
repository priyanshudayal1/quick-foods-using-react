import React from "react";

export default function Contactus() {
  return (
    <div className="cont  w-full h-full flex flex-col justify-center">
      <div className="head">
        <h1 className="text-6xl text-center mb-2 mt-6 font-bold font-serif">Contact Us</h1>
      </div>
      <div className="form ">
        <form action="" className="">
          <div className="flex flex-col justify-center gap-4 px-4 items-center mt-6 ml-[30%] mr-[30%]  mb-10 shadow-md" >
            <input
              type="text"
              placeholder="Enter name"
              className="px-4 border  rounded-md ml-3 w-[350px] mt-10 shadow-md py-2 "
            />
            <input
              type="text"
              placeholder="Enter email"
              className="px-4 border  rounded-md ml-3 w-[350px] shadow-md py-2"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              className="border  rounded-md w-[350px] ml-3 shadow-md px-4  py-2"
              placeholder="Enter your query"
            ></textarea>
            <button className="px-5 border border-black rounded-md bg-blue-600 text-white mb-10 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="socials flex justify-center">
        <ul className="flex gap-5 text-4xl mt-6 mb-6">
          <li>
            <a href="https://twitter.com/home?lang=en">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
