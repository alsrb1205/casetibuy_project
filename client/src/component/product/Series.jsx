import React from "react";
import { NavLink } from "react-router-dom";
import Title from "./Title.jsx";

export default function series() {
  return (
    <>
      {/* series title */}
      <div className="m-5 p-15">
        <h1 className="font-bold text-25">시리즈</h1>
      </div>

      {/* media series content */}

      <div className="">
        {/* series */}
        {/* 시리즈 수정 중 */}
        <div className="flex p-10 m-10 gap-25">
          {/* 임팩트 시리즈 */}
          <NavLink
            to="/homelist"
            className={({ isActive }) =>
              `w-180 h-full min-h-100 rounded-16 cursor-pointer p-8 
                            bg-[#234a89] ${
                              isActive
                                ? "border-solid border-black border-[3px]"
                                : ""
                            }`
            }
          >
            <img
              src="/images/series/series2.png"
              alt="img-err"
              className="w-full rounded-13"
            />
            <p className="text-[#e8e6e3] font-extrabold text-13">
              임팩트 시리즈
            </p>
          </NavLink>
        </div>{" "}
        {/* series */}
        {/* ********************************************************* */}
        {/* media button series item */}
        <div className="flex justify-center">
          <div className="flex p-2 rounded sm:block lg:hidden">
            <button
              type="button"
              className="bg-[#21a664] rounded-full h-6 w-25"
            />

            <button type="button" className="bg-[black] rounded-full" />
          </div>

          <div className="hidden p-2 ml-2 rounded md:block lg:hidden">
            <p className=""></p>
          </div>
        </div>
      </div>

      {/* ********************************************************* */}
      {/* All title */}

      <Title />
    </>
  );
}
