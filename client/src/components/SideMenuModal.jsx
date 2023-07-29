import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const SideMenuModal = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full sm:w-[360px] h-full bg-white shadow-md flex items-center pt-8">
      <div className="w-full flex justify-start items-center gap-4 flex-col">
        <a
          href="/signIn"
          className="w-3/4 flex items-center justify-center py-[6px] text-[15px] bg-black text-white rounded-lg font-semibold hover:opacity-75 duration-400 ease-out"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="w-3/4 flex items-center justify-center py-[6px] text-[15px]  bg-gray text-black rounded-lg font-semibold hover:bg-darkgray duration-400 ease-out"
        >
          <AiOutlineUser />
          Login
        </a>
        <a
          onClick={props.onCloseSideModal}
          className="absolute bottom-16 w-3/4 flex items-center justify-center mt-8 py-[6px] text-[15px] bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 duration-400 ease-out cursor-pointer"
        >
          Close
        </a>
      </div>
    </div>
  );
};

export default SideMenuModal;
