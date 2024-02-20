import React from "react";

export default function Footer() {
  return (
    <div className="footer relative w-full mb-0 bottom-0 bg-black h-[100px] text-white flex justify-center flex-row">
      <div className="ul">
        <h1></h1>
        <ul className="flex gap-3">
          <li className="ml-4 mt-7 text-5xl font-mono">Quick Foods</li>
          <li className="m-10">&copy; &nbsp; All Rights Reserved</li>
          <li className="mt-10">Privacy Policy</li>
          <li className="m-10">Facebook</li>
          <li className="m-10">Instagram</li>
          <li className="m-10">Twitter</li>
          <li className="m-10">LinkedIn</li>
        </ul>
      </div>
    </div>
  );
}
