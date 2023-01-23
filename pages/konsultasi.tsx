import React, { useState, ChangeEvent } from "react";
import Head from "next/head";
import { Templates } from "../templates/Templates";

interface IForm {
  name: string;
  email?: string;
  hp: number;
  method: "1" | "2" | "3" | null;
  address?: string;
  date: string;
  time: string;
  tnc: boolean;
}

const Konsultasi = () => {
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    hp: 0,
    method: null,
    address: "",
    date: "",
    time: "",
    tnc: false,
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
    const {name, value} = e.target as typeof e.target;
      setForm({
        ...form,
        [name]: name === "tnc" ? (e.target as HTMLInputElement).checked : value
      })

      console.log(form)

    };


  const onSubmitHandler = () => {};

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
          <form className="flex gap-20 justify-between">
            {/* left content */}
            <div className="flex-auto w-64">
              <h1 className="md:text-2xl font-bold text-xl mb-2">
                Form Konsultasi
              </h1>
              <div className="flex flex-col mt-10">
                <label htmlFor="name" className="text-black font-medium">
                  Nama Lengkap
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="bg-transparent border-b border-black w-full outline-none"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex gap-10">
                <div className="flex flex-1 flex-col mt-10">
                  <label htmlFor="email" className="text-black font-medium">
                    Email (Opsional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="bg-transparent border-b border-black w-full outline-none"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex flex-1 flex-col mt-10">
                  <label htmlFor="hp" className="text-black font-medium">
                    No HP
                  </label>
                  <input
                    required
                    name="hp"
                    type="text"
                    className="bg-transparent border-b border-black w-full outline-none"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="form-control mt-10 ">
                <label htmlFor="method" className="text-black font-medium">
                  Metode Konsultasi
                </label>
                <select
                  required
                  name="method"
                  className="select w-full mt-3 bg-transparent max-w-xs border-black"
                  onChange={onChangeHandler}
                >
                  <option disabled selected>
                    Pilih Metode
                  </option>
                  <option value="1">Via Zoom</option>
                  <option value="2">Bertemu langsung di kantor PT BNH</option>
                  <option value="3">Bertemu di kantor customer</option>
                </select>
              </div>
              {
                form.method === "3" && (
                  <div className="flex flex-1 flex-col mt-10">
                <label htmlFor="address" className="text-black font-medium">
                  Alamat Perusahaan
                </label>
                <input
                  onChange={onChangeHandler}
                  name="address"
                  type="text"
                  className="bg-transparent border-b border-black w-full outline-none"
                />
              </div>
                )
              }
              <div className="flex gap-10">
                <div className="flex flex-1 flex-col mt-10">
                  <label htmlFor="date" className="text-black font-medium">
                    Tanggal
                  </label>
                  <input
                    onChange={onChangeHandler}
                    name="date"
                    type="date"
                    className="bg-transparent border-b border-black w-full outline-none"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-10">
                  <label htmlFor="time" className="text-black font-medium">
                    Jam
                  </label>
                  <input
                    onChange={onChangeHandler}
                    required
                    name="time"
                    type="time"
                    className="bg-transparent border-b border-black w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-black font-medium mt-10">
                  *Syarat & Ketentuan Konsultasi
                </h3>
                <ul
                  className="text-black font-medium mt-3 ml-7"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    Customer menyediakan data yang lengkap / faktual dan dapat
                    dipertanggung jawabkan
                  </li>
                  <li>
                    Untuk metode konsultasi bertemu di kantor customer, pihak
                    customer wajib menanggung biaya transportasi tenaga Ahli
                    kami
                  </li>
                  <li>
                    Setelah mengisi form, admin kami akan menghubungi dalam 1 x
                    24 Jam via WhatsApp
                  </li>
                  <li>
                    Jadwal konsultasi tidak bersifat mutlak, dan dapat berubah
                    sewaktu-waktu dengan persetujuan dari pihak PT Bumi
                    Nusantara Hijau dan Customer
                  </li>
                </ul>
              </div>
              <div className="form-control mt-5">
                <label className="label justify-start gap-2 cursor-pointer">
                  <input checked={form.tnc} onChange={onChangeHandler} type="checkbox" name="tnc" className="checkbox" />
                  <span className="text-black font-medium">
                    Saya menyetujui Syarat dan Ketentuan diatas.
                  </span>
                </label>
              </div>
              <button disabled={form.tnc === false} className="bg-secondary disabled:cursor-not-allowed disabled:opacity-40 text-white px-12 py-3 rounded-lg mt-4">
                Kirim
              </button>
            </div>
            {/* right content */}
            <div className="hidden md:block flex-auto w-32">
              <h1 className="md:text-2xl font-bold text-xl mb-2">
                Pertanyaan Umum
              </h1>
              <p>
                Untuk pertanyaan umum lainnya, silakan kirim email atau whatsapp
                pada nomor HP atau email dibawah : <br />
                <span className="italic">
                  +6282253654721
                  <br />
                  admin@buminusantarahijau.com
                </span>
              </p>
            </div>
          </form>
        </main>
      </Templates>
    </>
  );
};

export default Konsultasi;
