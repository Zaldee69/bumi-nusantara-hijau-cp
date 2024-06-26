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
        <title>PERTEK Pengelolaan LB3 - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT Bumi Nusantara Hijau menyediakan layanan PERTEK Pengelolaan LB3, membantu usaha dan kegiatan yang melakukan pengumpulan, pemanfaatan, pengolahan, dan penimbunan limbah B3 dengan kajian teknis yang mendalam dan komprehensif."
        />
        <meta
          name="keywords"
          content="PERTEK Pengelolaan LB3, pengelolaan limbah B3, konsultan lingkungan hidup, PT Bumi Nusantara Hijau, kajian teknis limbah B3"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] p-10 pt-16 md:px-32">
          <div>
            <h1 className="md:text-2xl font-bold text-xl mb-2">
              PERTEK Pengelolaan LB3
            </h1>
            <p>
              Untuk setiap usaha dan kegiatan yang melakukan pengumpulan,
              pemanfaatan, pengolahan, dan penimbunan limbah B3, diperlukan
              kajian teknis yang mendalam dan komprehensif. Kajian teknis
              pengelolaan limbah B3 harus mampu menunjukkan bahwa sumber daya
              dan infrastruktur yang direncanakan dalam kegiatan pengelolaan
              limbah B3 telah memadai, dan tidak akan membawa dampak buruk
              terhadap lingkungan. Kewajiban persetujuan teknis Limbah B3
              dikecualikan bagi TPS Limbah B3 yang dihasilkan sendiri. Bagi
              jenis usaha penyimpanan, pengumpulan, pemanfaatan, pengolahan, dan
              penimbunan Limbah B3, baik berupa kegiatan utama atau kegiatan
              penunjang, wajib dilengkapi dengan Pertek Limbah B3. Jenis kajian
              sangat ditentukan oleh spesifikasi limbah B3 yang akan dikelola.
              Sehingga substansi kajian teknis limbah B3 akan sangat berbeda
              antara satu kegiatan usaha dengan lainnya.
            </p>
            <h2 className="md:text-xl text-md mt-10 font-bold">
              Hasil keluaran PERTEK Pengelolaan LB3
            </h2>
            <ul className="mt-2">
              <li>1. Kajian Teknis Pengelolaan LB3.</li>
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
