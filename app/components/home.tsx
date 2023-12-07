"use client";
import { useState } from "react";
import Header from "./header";
import MobileCartMenu from "./mobileCartMenu";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);
  return (
    <>
      <Header setOpenMobileMenu={setOpenMobileMenu}></Header>
      {/*  Utilize Mobile Menu Start */}
      <MobileCartMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
    </>
  );
};

export default Home;
