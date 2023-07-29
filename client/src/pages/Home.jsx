import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "./Menu";
import CartModal from "../components/CartModal";
import SideMenuModal from "../components/SideMenuModal";

const Home = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openSideModal, setSideModal] = useState(false);

  const openModalHandler = () => {
    setOpenCartModal(true);
    setSideModal(false);
  };
  const closeSideModalHandler = () => {
    setSideModal(false);
  };
  const openSideModalHandler = () => {
    setSideModal(true);
  };
  const closeCartModalHandler = () => {
    setOpenCartModal(false);
  };

  return (
    <div className="w-full">
      <Navbar
        onOpen={openModalHandler}
        onOpenSideModal={openSideModalHandler}
      />
      <Menu onCloseSideModal={closeSideModalHandler} />
      {openCartModal && <CartModal onCloseCartModal={closeCartModalHandler} />}
      {openSideModal && (
        <SideMenuModal onCloseSideModal={closeSideModalHandler} />
      )}
    </div>
  );
};

export default Home;
