import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Poppins } from '@next/font/google'
import Hero from './../components/Hero';
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Image from "next/image"

interface Props {
    children:ReactNode
}

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export const Templates = ({children}: Props) => {
  return (
    <div className={`${poppins.className} h-screen relative`} >
      <a href="https://wasap.at/FXQSiV" target="_blank" className="fixed z-20 md:right-10 md:bottom-10 right-5 bottom-5" >
        <Image alt="wa" src="/assets/images/wa.png" height="50" width="50" />
      </a>
      <Navbar />
      <Hero/>
      {children}
      <Banner/>
      <Footer/>
    </div>
  );
};
