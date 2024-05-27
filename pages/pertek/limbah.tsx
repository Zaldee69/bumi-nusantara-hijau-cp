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
        <title>PERTEK Air Limbah - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan PERTEK Air Limbah, membantu perusahaan dalam memperoleh persetujuan teknis untuk pembuangan atau pemanfaatan air limbah ke formasi tertentu dan ke badan air permukaan."
        />
        <meta
          name="keywords"
          content="PERTEK Air Limbah, pembuangan air limbah, pemanfaatan air limbah, konsultan lingkungan hidup, PT Bumi Nusantara Hijau, kajian teknis air limbah"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">
              PERTEK Air Limbah
            </h1>
            <p>
              Persetujuan Pembuangan Air Limbah dengan Cara Injeksi menjadi
              Persetujuan Teknis Pembuangan/Pemanfaatan Air Limbah ke Formasi
              Tertentu dan Ke Badan Air Permukaan.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran PERTEK Air Limbah
            </h2>
            <ul className="mt-2">
              <li>1. Kajian Teknis Air Limbah.</li>
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
