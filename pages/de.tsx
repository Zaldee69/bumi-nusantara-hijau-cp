import React from "react";
import Head from "next/head";
import { Templates } from "../templates/Templates";
import Button from "../atoms/Button";
import { useRouter } from "next/router";

const DesignEngineering = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Design Engineering - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan Design Engineering yang membantu customer dalam merencanakan atau menyusun kerangka kerja dalam suatu proyek baik dalam pembangunan fisik (bangunan) maupun sistem manajerial."
        />
        <meta
          name="keywords"
          content="design engineering, konsultan lingkungan hidup, perencanaan proyek, PT Bumi Nusantara Hijau, pembangunan fisik, sistem manajerial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">
              Design Engineering
            </h1>
            <p>
              PT Bumi Nusantara Hijau menyediakan layanan Design Engineering
              yang membantu customer dalam merencanakan atau menyusun kerangka
              kerja dalam suatu proyek baik dalam pembangunan fisik (bangunan)
              maupun sistem manajerial.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran Design Engineering
            </h2>
            <ul className="mt-2">
              <li>
                1. Market aspect: Komponen yang berkaitan dengan supply dan
                demand di pasar.
              </li>
              <li>
                2. Technique aspect: Komponen yang mengacu pada teknis proyek,
                seperti simulasi proses, daftar peralatan, studi SDM, dan
                lain-lain.
              </li>
              <li>
                3. Management and organization aspect: Kualitas pihak manajerial
                dan penyelenggara yang bertanggung jawab atas jalannya proyek.
              </li>
              <li>
                4. Financial aspect: Kondisi finansial yang akan menopang
                jalannya proyek, seperti biaya operasional dan modal dari
                investor.
              </li>
              <li>
                5. Social economy aspect: Dampak sosial dan ekonomi yang akan
                dihasilkan oleh pelaksanaan proyek perusahaan.
              </li>
              <li>
                6. Legal aspect: Analisis terhadap dokumen dan persetujuan
                proyek untuk melihat kelayakannya terhadap hukum yang berlaku.
              </li>
              <li>
                7. Environment aspect: Dampak yang akan diberikan proyek
                terhadap lingkungan.
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

export default DesignEngineering;
