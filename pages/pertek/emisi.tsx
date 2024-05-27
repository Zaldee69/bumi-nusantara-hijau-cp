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
        <title>PERTEK Emisi - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan PERTEK Emisi, yang diberlakukan bagi rencana usaha dan kegiatan yang menghasilkan udara emisi dalam aktivitasnya."
        />
        <meta
          name="keywords"
          content="PERTEK Emisi, persetujuan teknis emisi, konsultan lingkungan hidup, PT Bumi Nusantara Hijau, analisis emisi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">PERTEK Emisi</h1>
            <p>
              Persetujuan Teknis Pembuangan emisi ke udara diberlakukan bagi
              rencana usaha dan kegiatan yang menghasilkan udara emisi dalam
              aktivitasnya. Kriteria jenis usaha yang wajib dilengkapi Pertek
              Pembuangan Emisi ke Udara diatur secara tersendiri melalui
              Peraturan Menteri Lingkungan Hidup dan Kehutanan. Kajian teknis
              membuang emisi ke udara, akan fokus pada analisis terhadap bahan
              bakar, parameter emisi, spesifikasi cerobong, laju alir gas buang,
              pengaruhnya terhadap udara ambient, sampling point, dan periode
              pemantauan kualitas udara emisi. Dalam melakukan penilaian kajian
              teknis dan penerbitan Persetujuan teknis membuang emisi ke udara,
              Pemerintah akan mempertimbangkan indeks kualitas udara pada
              wilayah tersebut, kepadatan aktivitas penduduk, pola pemanfaatan
              ruang disekitar, dan lain sebagainya.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran PERTEK Emisi
            </h2>
            <ul className="mt-2">
              <li>1. Kajian Teknis Emisi.</li>
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
