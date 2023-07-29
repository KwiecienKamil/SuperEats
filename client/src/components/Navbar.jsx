import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { Context } from "../context/Context";

const Navbar = (props) => {
  const [chooseOption, setChooseOption] = useState(true);
  const { cartItems } = useContext(Context);

  const switchToDelivery = () => {
    setChooseOption(true);
  };

  const switchToPickup = () => {
    setChooseOption(false);
  };

  const { loggedIn, setLoggedIn } = useContext(Context);

  const getEmail = localStorage.getItem("LoggedIn");
  if (getEmail === "true") {
    setLoggedIn(true);
  }
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="w-full mx-auto px-2 sm:px-8 py-4 flex justify-between items-center  text-black font-Roboto ">
      {/* Logo & nav */}
      <div className="flex items-center justify-center gap-1 sm:gap-4">
        <FaBars
          size="1.3em"
          className="pt-1 cursor-pointer"
          onClick={props.onOpenSideModal}
        />
        <a href="/" className="flex justify-between items-center gap-1">
          <h1 className="text-[20px] xl:text-[28px] flex font-semibold">
            Super<span className="font-bold px-[2px]">Eats</span>
          </h1>
        </a>
      </div>
      <div className="p-[5px] bg-gray rounded-full text-[12px] hidden xl:block">
        <button
          className={
            chooseOption
              ? "p-1 bg-white rounded-full"
              : "p-1 bg-gray rounded-full"
          }
          onClick={switchToDelivery}
        >
          Delivery
        </button>
        <button
          className={
            chooseOption
              ? "p-1 bg-gray rounded-full"
              : "p-1 bg-white rounded-full"
          }
          onClick={switchToPickup}
        >
          Pickup
        </button>
      </div>
      <div className="hidden xl:flex p-1 bg-gray rounded-full items-center justify-between hover:bg-darkgray duration-400 ease-out ">
        <HiMapPin />
        <button className="flex items-center justify-center gap-1 p-[5px] text-[12px]">
          <p>Warsaw</p>
          <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
          <p>Now</p>
        </button>
      </div>
      <div className="flex justify-center items-center bg-gray p-[6px] rounded-full ">
        <BiSearch size=".8em" />
        <input
          type="text"
          className="bg-gray text-[10px] lg:text-[12px]  w-[100px] lg:w-[350px] xl:w-[650px] p-[3px] focus:outline-none"
          placeholder="Food, groceries, drinks etc."
        />
      </div>
      {/* Nav */}
      <div className="flex items-center justify-between pl-4 gap-1 sm:gap-4  text-[10px] lg:text-[12px] ">
        <button
          onClick={props.onOpen}
          className="flex items-center justify-center gap-1 py-[6px] px-2 bg-black text-white rounded-full font-semibold hover:opacity-75 duration-400 ease-out"
        >
          <BsCart />
          Cart
          <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
          <p>{cartItems.length}</p>
        </button>
        <a
          href="/login"
          className="hidden sm:flex items-center justify-center py-[6px] px-2 text-[10px] lg:text-[12px]  bg-gray text-black rounded-full font-semibold hover:bg-darkgray duration-400 ease-out"
        >
          {loggedIn ? <span className="pr-1">Hi</span> : <AiOutlineUser />}
          {loggedIn ? localStorage.getItem("email") : "Login"}
        </a>
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="py-[6px] px-2 text-[8px] lg:text-[12px]  bg-black text-white rounded-full font-semibold hover:bg-darkgray duration-400 ease-out"
          >
            Logout
          </button>
        ) : (
          <a
            href="/signIn"
            className="hidden sm:flex flex items-center justify-center py-[6px] px-2 text-[10px] lg:text-[12px]  bg-gray text-black rounded-full font-semibold hover:bg-darkgray  duration-400 ease-out"
          >
            Sign Up
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
