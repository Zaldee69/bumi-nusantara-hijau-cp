import React from "react";
import ServiceCard from "../atoms/ServiceCard";
import { FaEnvira } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { GiChemicalDrop, GiNuclearWaste, GiChemicalBolt } from "react-icons/gi";

const Services = () => {
  return (
    <div className="pb-10 px-10">
      <h1 className="text-center text-xl font-bold">Layanan Kami</h1>
      <div className="grid md:grid-rows-2 sm:grid-rows-3 sm:grid-flow-col justify-center grid-flow-row gap-4 mt-8">
        <ServiceCard
          title="AMDAL"
          subtitle="Analisis Mengenai Dampak Lingkungan untuk mengidentifikasi dampak besar dari pembangunan"
          Icon={<FaEnvira size={35} />}
        />
        <ServiceCard
          title="Feasebility Study"
          subtitle="Sebuah studi yang digunakan untuk melakukan penilaian terhadap kelayakan atau faktor-faktor yang mempengaruhi sebuah proyek sebelum berjalan."
          Icon={<HiClipboardDocumentList size={35} />}
        />
        <ServiceCard
          title="Design Engineering"
          subtitle="Analisis Mengenai Dampak Lingkungan untuk mengidentifikasi dampak besar dari pembangunan"
          Icon={<BsGearFill size={35} />}
        />
        <ServiceCard
          title="PERTEK Emisi"
          subtitle="Analisis Mengenai Dampak Lingkungan untuk mengidentifikasi dampak besar dari pembangunan"
          Icon={<GiChemicalBolt size={35} />}
          />
        <ServiceCard
          title="PERTEK B3"
          subtitle="Sebuah studi yang digunakan untuk melakukan penilaian terhadap kelayakan atau faktor-faktor yang mempengaruhi sebuah proyek sebelum berjalan."
          Icon={<GiChemicalDrop size={35} />}
          />
        <ServiceCard
          title="PERTEK Air Limbah"
          subtitle="Analisis Mengenai Dampak Lingkungan untuk mengidentifikasi dampak besar dari pembangunan"
          Icon={<GiNuclearWaste size={35} />}
          />
          </div>
    </div>
  );
};

export default Services;
