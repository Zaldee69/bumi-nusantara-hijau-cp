import React from "react";
import Head from "next/head";
import { Templates } from "../templates/Templates";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

const Amdal = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pengurusan AMDAL / UKL-UPL - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan konsultasi untuk pengurusan AMDAL / UKL-UPL, membantu perusahaan dalam memenuhi persyaratan lingkungan hidup di Indonesia."
        />
        <meta
          name="keywords"
          content="pengurusan AMDAL, UKL-UPL, konsultan lingkungan hidup, dokumen lingkungan, PT Bumi Nusantara Hijau"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">
              Pengurusan AMDAL / UKL-UPL
            </h1>
            <p>
              Analisis Mengenai Dampak Lingkungan atau AMDAL / UKL-UPL adalah
              kajian mengenai dampak besar penting dari suatu usaha
              kegiatan/pembangunan yang direncanakan pada lingkungan hidup yang
              diperlukan bagi proses pengambilan keputusan tentang
              penyelenggaraan pembangunan atau kegiatan di Indonesia.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran AMDAL / UKL-UPL
            </h2>
            <ul className="mt-2">
              <li>1. Formulir Kerangka Acuan</li>
              <li>2. Dokumen ANDAL, RKL & RPL</li>
              <li>3. Dokumen ADDENDUM ANDAL, RKL & RPL</li>
              <li>4. Formulir UKL-UPL</li>
              <li>5. Dokumen DELH-DPLH</li>
              <li>
                6. Laporan / Monitoring berkala pasca Persetujuan Lingkungan
              </li>
              <li>
                7. Pengintegrasian PERTEK dan rincian teknis penyimpanan LB3
                kedalam Persetujuan Lingkungan
              </li>
              <li>
                8. Persetujuan lingkungan dari KLHK atau Dinas Lingkungan Hidup
              </li>
            </ul>
            <h2 className="md:text-xl text-md mt-10 font-bold">Persyaratan</h2>
            <ul className="mt-2">
              <li>1. Fotokopi akte pendirian perusahaan dan perubahannya</li>
              <li>2. Fotokopi sertifikat tanah/surat tanah</li>
              <li>3. Fotokopi TKPRD dari dinas tata ruang</li>
              <li>4. Fotokopi/soft copy master plan dari dinas tata ruang</li>
              <li>5. Gambar arsitektur dan struktur (soft copy/hard copy)</li>
              <li>6. Buku laporan perencanaan (M/E)</li>
              <li>7. Buku penyelidikan tanah (soil investigation)</li>
              <li>8. Gambar perspektif tampak bangunan (warna)</li>
              <li>9. Jadwal pelaksanaan konstruksi/pembangunan</li>
              <li>10. Struktur organisasi proyek</li>
              <li>
                11. Persetujuan teknis baku mutu air limbah (pertek air limbah)
              </li>
              <li>12. Persetujuan teknis limbah B3 (Pertek B3)</li>
              <li>13. Persetujuan teknis baku mutu emisi (Pertek emisi)</li>
              <li>
                14. Persetujuan Teknis Andalalin (Analisis dampak lalu lintas)
              </li>
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

export default Amdal;
