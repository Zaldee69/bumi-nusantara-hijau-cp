import React from "react";
import AboutTypography from "../atoms/AboutTypography";
import Advantage from "../atoms/Advantage";
import Button from "../atoms/Button";
import {RiServiceLine} from "react-icons/ri"
import {TbFileCertificate} from "react-icons/tb"
import {MdOutlineSpeed} from "react-icons/md"

const About = () => {
  return (
    <div className="flex md:px-32 flex-col md:flex-row px-10 gap-10 py-10" >
      <div className="flex-1"  >
        <AboutTypography
          boldText="PT. Bumi Nusantara hijau"
          normalText="didirikan sebagai wadah para profesional dibidang lingkungan hidup, perencanaan dan manajemen dalam mendukung pelaksanaan pembangunan yang berwawasan lingkungan dan berkelanjutan. dan kami bisa melayani konsultasi perizinan di seluruh Indonesia"
        />
        <AboutTypography
          boldText="PT. Bumi Nusantara hijau"
          normalText="terbuka untuk bekerjasama dengan pemerintah dan swasta serta meyediakan tenaga ahli yang profesional pada bidangnya masing-masing"
          style="mt-7"
        />
        <Button
          title="Tentang Kami"
          style="bg-secondary text-white px-4 py-2 rounded-lg mt-4 text-sm"
        />
      </div>
      <div className="flex-1 flex flex-col gap-5" >
        <Advantage
          Icon={<RiServiceLine className="mt-1" size={35} />}
          title="Layanan Konsultasi"
          subtitle="Kami memberikan layanan konsultasi untuk kemudahan pengurusan dokumen"
        />
        <Advantage
          Icon={<TbFileCertificate className="mt-1" size={35} />}
          title="Tenaga Ahli BERSERTIFIKAT KOMPETENSI"
          subtitle="Tenaga ahli penyusun dokumen AMDAL dan penyusun dokumen PERTEK memiliki sertifikat kompetensi."
        />
        <Advantage
          Icon={<MdOutlineSpeed className="mt-1" size={35} />}
          title="Waktu Penyusunan SINGKAT"
          subtitle="Tenaga Ahli berkolaborasi dalam penyusunan dokumen sehingga waktu penyusunan menjadi singkat."
        />
      </div>
    </div>
  );
};

export default About;
