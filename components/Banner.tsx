import React from "react";
import Button from "../atoms/Button";
import Image  from 'next/image';
import {useRouter} from "next/router"

const Banner = () => {

  const router = useRouter()

  return (
    <div className="flex px-10 md:px-32 justify-between my-10 items-center" >
      <div>
        <h1 className="md:text-3xl text-xl font-bold" >
          #UrusIzinJadiMudah <br />
          KONSULTASI ONLINE (Via WhatsApp)
        </h1>
        <p>
          Konsultasi nyaman dan cepat.<br /> Hubungi Kami kapan saja
          ketika anda bingung <br /> mengurus Dokumen Lingkungan hidup.
        </p>
        <Button
          action={() => router.push("/konsultasi")}
          title="Konsultasi Sekarang"
          style="bg-secondary text-white px-4 py-2 rounded-lg mt-4 text-sm"
        />
      </div>
          <Image unoptimized={true} className="hidden md:block" src="/assets/images/banner.png" height={500} width={500} alt="phone"/>
    </div>
  );
};

export default Banner;
