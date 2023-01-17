import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Poppins } from '@next/font/google'
import Hero from './../components/Hero';
import Banner from "../components/Banner";
import Footer from "../components/Footer";

interface Props {
    children:ReactNode
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const Templates = ({children}: Props) => {
  return (
    <div className={`${poppins.className} h-screen `} >
      <Navbar />
      <Hero/>
      {children}
      <Banner/>
      <Footer/>
    </div>
  );
};
