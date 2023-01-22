import React from "react";
import Head from "next/head";
import { Templates } from "../templates/Templates";
import Button from "../atoms/Button";

const Konsultasi = () => {
  return (
    <>
      <Head>
        <title>Konsultasi - PT. Bumi Nusantara Hijau</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div className="flex justify-between">
            {/* left content */}
            <div className="flex-1">
              <h1 className="md:text-2xl font-bold text-xl mb-2">Konsultasi</h1>
              <div className="flex flex-col mt-10">
                <label htmlFor="nama" className="text-black font-medium">
                  Nama Lengkap
                </label>
                <input
                  name="nama"
                  type="text"
                  className="bg-transparent border-b border-black w-full outline-none"
                />
              </div>
            </div>
            {/* right content */}
            <div className="hidden md:block flex-2">
              <h1 className="md:text-2xl font-bold text-xl mb-2">
                Pertanyaan Umum
              </h1>
            </div>
          </div>
        </main>
      </Templates>
    </>
  );
};

export default Konsultasi;