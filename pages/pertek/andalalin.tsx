import React from "react";
import Head from "next/head";
import { Templates } from "../../templates/Templates";
import Button from "../../atoms/Button";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PERTEK Andalalin - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan PERTEK Andalalin, serangkaian kegiatan kajian mengenai dampak lalu lintas dari pembangunan pusat kegiatan, permukiman, dan infrastruktur."
        />
        <meta
          name="keywords"
          content="PERTEK Andalalin, analisis dampak lalu lintas, konsultan lingkungan hidup, PT Bumi Nusantara Hijau, kajian lalu lintas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">
              PERTEK Andalalin
            </h1>
            <p>
              Andalalin adalah serangkaian kegiatan kajian mengenai dampak lalu
              lintas dari pembangunan pusat kegiatan, permukiman, dan
              infrastruktur yang hasilnya dituangkan dalam bentuk dokumen hasil
              analisis dampak lalu lintas.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran PERTEK Andalalin
            </h2>
            <ul className="mt-2">
              <li>1. Kajian Teknis Andalalin.</li>
            </ul>
            <Button
              action={() => router.push("/konsultasi")}
              title="Konsultasi Sekarang"
              style="bg-secondary text-white mt-5 px-5 py-3 rounded-lg"
            />
          </div>
        </main>
      </Templates>
    </>
  );
};

export default Index;
