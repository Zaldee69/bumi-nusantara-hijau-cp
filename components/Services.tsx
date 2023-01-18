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
          title="AMDAL / UKL-UPL"
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
          subtitle="Design Engineering produk perencanaan (detail gambar kerja) yang dibuat konsultan perencana untuk pekerjaan bangunan sipil."
          Icon={<BsGearFill size={35} />}
        />
        <ServiceCard
          title="PERTEK Emisi"
          subtitle="Persetujuan teknis baku mutu emisi adalah kajian tentang mutu emisi yang merupakan persyaratan pemenuhan untuk AMDAL dan UKL UPL."
          Icon={<GiChemicalBolt size={35} />}
          />
        <ServiceCard
          title="PERTEK Pengelolaan LB3"
          subtitle="Persetujuan teknis baku mutu limbah B3 adalah kajian tentang limbah B3 dan kajian tempat penyimpanan sementara limbah B3 yang merupakan persyaratanpemenuhan untuk AMDAL dan UKL UPL."
          Icon={<GiChemicalDrop size={35} />}
          />
        <ServiceCard
          title="PERTEK Air Limbah"
          subtitle="Persetujuan Pembuangan Air Limbah dengan Cara Injeksi menjadi Persetujuan Teknis Pembuangan/Pemanfaatan Air Limbah ke Formasi Tertentu dan Ke Badan Air Permukaan"
          Icon={<GiNuclearWaste size={35} />}
          />
        <ServiceCard
          title="PERTEK Andalalin"
          subtitle="Persetujuan Pembuangan Air Limbah dengan Cara Injeksi menjadi Persetujuan Teknis Pembuangan/Pemanfaatan Air Limbah ke Formasi Tertentu dan Ke Badan Air Permukaan"
          Icon={<GiNuclearWaste size={35} />}
          />
          </div>
    </div>
  );
};

export default Services;
