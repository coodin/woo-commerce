"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useState } from "react";
import Header from "./header";

import ImageSlider from "./imageSlider";
import CallToAction from "./callToAction";
import Testimonial from "./testimonial";
import Blog from "./blog";
import LogoArea from "./logoArea";
import FooterArea from "./footerArea";
import CustomArea from "./custom";
import AboutUs from "./aboutUs";
import WhyChooseUS from "./whyChooseUs";
import ServiceArea from "./serviceArea";
import ProductTable from "../productTable";
import CallAction from "./callAction";
import FeatureArea from "../featureArea";
import FirstSection from "./firstSection";
import AppointmentProvider from "./appointmentProvider";
import ImageProvider from "./imageProvider";
import { BlogType, CarInformation } from "@/lib/types";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const appointmentRef = useRef<HTMLDialogElement>(null);
  const blogRef = useRef<HTMLDialogElement>(null);
  const [carInformation, setCarInformation] = useState<CarInformation>();

  // const imageRef = useRef<HTMLDialogElement>(null);
  // const [selectedImage, setSelectedImage] = useState("");

  return (
    <>
      <Header
        appointmentRef={appointmentRef}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <AppointmentProvider
        appointmentRef={appointmentRef}
        carInformation={carInformation}
      />
      {/* <CarDetailsModalProvider
        dialogRef={dialogRef}
        carInformation={carInformation}
        appointmentRef={appointmentRef}
      /> */}

      {/* <ImageProvider imageRef={imageRef} imgUrl={selectedImage} /> */}

      {/*  Utilize Mobile Menu Start */}
      {/* <MobileCartMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      /> */}
      {/* Background Side  */}
      {/* {openMobileMenu && (
        <div
          onClick={() => {
            setOpenMobileMenu(false);
          }}
          className="fixed inset-0 bg-black/50 z-[9999]"
        ></div>
      )} */}
      {/* First Section */}
      <FirstSection appointmentRef={appointmentRef} />
      {/* About US Area */}
      <AboutUs />
      {/* WHY CHOOSE US AREA START */}
      <WhyChooseUS />
      {/*  SERVICE AREA START (Service 1) */}
      <ServiceArea />
      {/* PRODUCT TAB AREA */}
      <ProductTable
        appointmentRef={appointmentRef}
        setCarInformation={setCarInformation}
      />
      {/* CALL TO ACTİON */}
      <CallAction />
      {/* FEATURE AREA */}
      <FeatureArea />
      {/* IMAGE SLIDER AREA */}
      <ImageSlider
        // onClickOfImage={(itemSrc: string) => {
        //   setSelectedImage(itemSrc);
        //   imageRef.current?.showModal();
        // }}
        data={[
          {
            imgSrc:
              "https://tunatheme.com/tf/html/autixir-preview/autixir/img/img-slide/1.jpg",
          },
          {
            imgSrc:
              "https://tunatheme.com/tf/html/autixir-preview/autixir/img/img-slide/2.jpg",
          },
          {
            imgSrc:
              "https://tunatheme.com/tf/html/autixir-preview/autixir/img/img-slide/3.jpg",
          },
          {
            imgSrc:
              "https://tunatheme.com/tf/html/autixir-preview/autixir/img/img-slide/4.jpg",
          },
        ]}
      />
      {/* CALL TO ACTION START */}
      <CallToAction
        appointmentRef={appointmentRef}
        setCarInformation={setCarInformation}
      />
      {/* TESTIMONIAL AREA START  */}
      <Testimonial />
      {/*  BLOG AREA START (blog-3) */}
      <Blog />
      {/* BRAND LOGO AREA START  */}
      <LogoArea />
      {/* Custom Area */}
      <CustomArea />
      {/*  FOOTER AREA START (ltn__footer-2 ltn__footer-color-1)  */}
      <FooterArea
        appointmentRef={appointmentRef}
        setCarInformation={setCarInformation}
      />
    </>
  );
};

export default Home;
