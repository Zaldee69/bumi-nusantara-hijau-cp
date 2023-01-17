import React from 'react'
import Advantage from "../atoms/Advantage";
import {MdOutlineSpeed} from "react-icons/md"
import {HiOutlineClipboardCheck, HiOutlineDocumentText, } from "react-icons/hi"
import {RiCustomerService2Line } from "react-icons/ri"



const Advantages = () => {
  return (
    <div className='bg-primary my-10 flex-col md:flex-row px-10 gap-10 flex py-16 md:px-32' >
        <Advantage
          Icon={<RiCustomerService2Line className="mt-1" size={35} />}
          title="Konsultasi"
          subtitle="Kami memberikan masukan terhadap pembangunan dengan output berupa dokumen kajian dan persetujuan lingkungan"
          style="text-white"
        />
        <Advantage
          Icon={<HiOutlineDocumentText className="mt-1" size={35} />}
          title="Perizinan"
          subtitle="Kami membantu melengkapi Izin Lingkungan supaya terlindungi hukum dengan maksimal."
          style="text-white"
        />
        <Advantage
          Icon={<HiOutlineClipboardCheck className="mt-1" size={35} />}
          title="Inspeksi"
          subtitle="Kami melakukan penilaian terhadap pengujian serta penilaian dampak penting terhadap lingkungan hidup."
          style="text-white"
        />
    </div>
  )
}

export default Advantages