import React from "react";
import About from "../components/About";
import Form from "../components/Form";
import { Templates } from "../templates/Templates";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau adalah konsultan lingkungan terdepan yang menyediakan layanan konsultasi AMDAL, perizinan teknis limbah B3, emisi, dan air limbah. Komitmen tinggi terhadap prinsip bisnis berkelanjutan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
        <meta
          name="keywords"
          content="konsultan lingkungan, AMDAL, perizinan teknis limbah B3, emisi, air limbah, PT Bumi Nusantara Hijau"
        />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] pt-10">
          <h1 className="text-center text-2xl font-bold">Tentang Kami</h1>
          <About />
          <section className="bg-white p-10">
            <h2 className="text-center text-xl font-semibold">Komitmen Kami</h2>
            <p className="text-medium text-center font-medium p-5">
              Sebagai konsultan lingkungan yang terdepan, kami memiliki komitmen
              tinggi terhadap prinsip bisnis yang berkelanjutan. Hal tersebut
              dibuktikan dengan diperolehnya sertifikasi dari{" "}
              <span className="font-semibold text-secondary">
                INA SERTIFIKASI INDONESIA
              </span>
              .
            </p>
          </section>
          <section className="flex flex-col justify-center items-center gap-5 p-10">
            <img
              alt="Logo PT Bumi Nusantara Hijau"
              className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] mx-auto md:mx-0"
              src="/assets/images/Uwit.png"
              height={120}
              width={120}
            />
            <div className="flex flex-col gap-5 items-centerf">
              <div className="flex flex-col text-center">
                <h2 className="font-semibold text-secondary">
                  Lembaga Penyedia Jasa Penyusunan AMDAL (LPJP)
                </h2>
                <span>Nomor Registrasi: 0157/LPJ/AMDAL-1/LRK/KLHK</span>
                <span>Masa Berlaku: 3 Tahun</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center md:flex-row gap-4 md:items-start px-10">
            <div className="flex flex-1 flex-col gap-5 items-center">
              <img
                alt="Logo Pertamina Power"
                className="h-[90px] mx-auto md:mx-0"
                src="/assets/images/Garuda.png"
                height={90}
                width={90}
              />
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    Akte Pendirian Perusahaan
                  </p>
                  <span>Nomor: 5, 08 Juli 2015</span>
                  <span>Notaris: Jhon H.M. Situmorang, SH.</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    Akte Pendirian Perusahaan
                  </p>
                  <span>Nomor: 50, 18 Desember 2019</span>
                  <span>Notaris: Aida Selli Siburian, SH., M.Kn</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center">
              <img
                alt="Logo Pertamina Power"
                className="h-[90px] mx-auto md:mx-0"
                src="/assets/images/fav.png"
                height={90}
                width={90}
              />
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    ISO 9001:2015 - Quality Management System
                  </p>
                  <span>Nomor: QM-BNH160322250690</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    ISO 14001:2015 - Environmental Management System
                  </p>
                  <span>Nomor: EM-BNH160322250690</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    ISO 45001:2018 - Occupational Health And Safety Management
                    System
                  </p>
                  <span>Nomor: HS-BNH160322250690</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center">
              <img
                alt="Logo Pertamina Power"
                className="h-[110px] md:h-[90px] mx-auto md:mx-0"
                src="/assets/images/Menkumham.png"
                height={90}
                width={90}
              />
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    Keputusan Menkumham Akta Pendirian Perusahaan
                  </p>
                  <span>Nomor: AHU-2448581.AH.01.01 Tahun 2015</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    Keputusan Menkumham Akta Perubahan Anggaran Dasar
                  </p>
                  <span>Nomor: AHU-0107783.AH.01.02 Tahun 2019</span>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-secondary">
                    Keputusan Menkumham Perubahan Data Perseroan
                  </p>
                  <span>Nomor: AHU-AH.01.09-0133645 Tahun 2023</span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <Form />
          </section>
        </main>
      </Templates>
    </>
  );
};

export default AboutUs;
