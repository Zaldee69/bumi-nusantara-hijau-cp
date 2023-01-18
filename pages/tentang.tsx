import React from "react";
import About from "../components/About";
import Form from "../components/Form";
import { Templates } from "../templates/Templates";
import Head from "next/head";
import AboutTypography from './../atoms/AboutTypography';
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Tentang - PT. Bumi Nusantara Hijau</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] pt-10">
          <About />
          <p className="text-medium text-center font-medium p-10">Sebagai konsultan lingkungan yang terdepan, Kami memiliki komitmen tinggi terhadap prinsip bisnis yang berkelanjutan. Hal tersebut dibuktikan dengan diperolehnya sertifikasi dari <span className="font-semibold text-secondary" >INA SERTIFIKASI INDONESIA</span></p>
          <div className="grid md:grid-rows-2 sm:grid-rows-3 sm:grid-flow-col justify-center grid-flow-row gap-4 mt-8 px-10" >
          <div className="flex flex-col md:flex-row gap-5 md:gap-10" >
          <img
            alt="Pertamina Power"
            className="h-[90px] mx-auto md:mx-0"
            src="/assets/images/Garuda.png"
            height={25}
            width={100}
          />
          <div className="flex flex-col gap-5" >
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
                Akte Pendirian Perusahaan
              </p>
              <span>Nomor: 5, 08 Juli 2015</span>
              <span>Notaris: Jhon H.M. Situmorang, SH.</span>
            </div>
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              Akte Pendirian Perusahaan
              </p>
              <span>Nomor: 50,  18 Desember 2019</span>
              <span>Notaris: Aida Selli Siburian, SH., M.Kn</span>
            </div>
            </div>
          </div>            
          <div className="flex flex-col md:flex-row gap-5 md:gap-10" >
          <img
            alt="Pertamina Power"
            className="h-[90px] mx-auto md:mx-0"
            src="/assets/images/Menkumham.png"
            height={25}
            width={100}
          />
          <div className="flex flex-col gap-5" >
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              Keputusan Menkumham Akta Pendirian Perusahaan
              </p>
              <span>Nomor: AHU-2448581.AH.01.01 Tahun 2015</span>
            </div>
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              Keputusan Menkumham Akta Perubahan Anggaran Dasar
              </p>
              <span>Nomor: AHU-0107783.AH.01.02 Tahun 2019</span>
            </div>
            </div>
          </div>            
          <div className="flex flex-col md:flex-row gap-5 md:gap-10" >
          <img
            alt="Pertamina Power"
            className="h-[110px] mx-auto md:mx-0"
            src="/assets/images/fav.png"
            height={25}
            width={100}
          />
          <div className="flex flex-col gap-5" >
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              ISO 9001:2015 - Quality Management System
              </p>
              <span>Nomor: QM-BNH160322250690</span>
            </div>
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              ISO 14001:2015 - Environmental Management System
              </p>
              <span>Nomor: EM-BNH160322250690</span>
            </div>
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              ISO 45001:2018 - Occupational Health And Safety Management System
              </p>
              <span>Nomor: EM-BNH160322250690</span>
            </div>
            </div>
          </div>            
          <div className="flex flex-col md:flex-row gap-5 md:gap-10" >
          <img
            alt="Pertamina Power"
            className="h-[100px] mx-auto md:mx-0"
            src="/assets/images/Uwit.png"
            height={25}
            width={100}
          />
          <div className="flex flex-col gap-5" >
            <div className="flex flex-col md:text-start text-center" >
              <p className="font-semibold text-secondary" >
              Lembaga Penyedia Jasa Penyusunan AMDAL (LPJP)
              </p>
              <span>Nomor Registrasi: 0157/LPJ/AMDAL-1/LRK/KLHK</span>
            </div>
            </div>
          </div>            
          <div className="flex flex-col md:flex-row gap-5 md:gap-10" >
          <img
            alt="Pertamina Power"
            className="h-[90px] mx-auto md:mx-0"
            src="/assets/images/Pajak.png"
            height={25}
            width={100}
          />
          </div>            
          </div>
          <Form/>
        </main>
      </Templates>
    </>
  );
};

export default AboutUs;


