"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Product from "@/components/Product";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}