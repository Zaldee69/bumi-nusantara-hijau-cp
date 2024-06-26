import Head from "next/head";
import React from "react";
import { Templates } from "../templates/Templates";

const Portofolio = () => {
  return (
    <>
      <Head>
        <title>Portofolio Proyek Lingkungan - PT. Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="Temukan portofolio lengkap PT. Bumi Nusantara Hijau dalam penyusunan dokumen lingkungan dan pelaksanaan RKL RPL di Indonesia. Menampilkan beragam proyek dari AMDAL, UKL-UPL, hingga studi dampak lingkungan di sektor publik dan swasta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA] ">
          <div className="md:overflow-x-hidden overflow-x-auto  max-w-8xl py-5 px-2 md:px-20">
            <h3 className="font-bold mb-3">
              1. Penyusunan Dokument Lingkungan Hidup
            </h3>
            <table className="table mx-auto table-xs">
              <thead>
                <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">No</th>
                  <th scope="col">Nama Perkerjaan</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Pemrakarsa</th>
                  <th scope="col">Kewenangan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td>2019</td>
                  <td>1.</td>
                  <td>
                    <p>
                      Penyusunan Dokumen Analisis Mengenai <br />
                      Dampak Lingkungan (AMDAL) Pusat Perbelanjaan <br /> Jl
                      Wolter Monginsidi No. 45 Medan
                    </p>
                  </td>
                  <td>Jl Wolter Monginsidi No. 45 Medan</td>
                  <td>PT Polonia Anugerah Jaya</td>
                  <td>DLH Kota Medan</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>2.</td>
                  <td>
                    Penyusunan Dokumen Evaluasi Lingkungan <br /> Hidup (DELH)
                    Sinarmasland Plaza Medan
                  </td>
                  <td>Medan</td>
                  <td>PT Sinar Mas Teladan (Sinar Mas Land)</td>
                  <td>DLH Kota Medan</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>3.</td>
                  <td>
                    Pekerjaan Penyusunan Addendum AMDAL <br /> (Analisis Dampak
                    Lingkungan/ANDAL , <br /> Rencana Pengelolaan <br />{" "}
                    Lingkungan (RPL) <br /> dan Rencana Pemantauan Lingkungan
                    Kebun <br /> Labuhan Haji PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>Labuhan Haji</td>
                  <td>PT Perkebunan Nusantara III (Persero)</td>
                  <td>
                    DLHK Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>4.</td>
                  <td>
                    Penyusunan Dokumen UKL-UPL <br /> dan Pengurusan Izin
                    Lingkungan Pabrik Es Krim <br /> PT Aice Sumatera Industry
                  </td>
                  <td>Sei Mangke</td>
                  <td>
                    PT Aice <br /> Sumatera Industry
                  </td>
                  <td>
                    DLH Kab. <br /> Simalungun
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>5.</td>
                  <td>
                    Studi UKL-UPL Pembangunan Jaringan HUTM, <br /> HUTR dan
                    Gardu Distribusi <br /> Dalam Rangka Program Pembangunan{" "}
                    <br /> Listrik Desa Harapan Maju <br /> Dusun V Kecamatan
                    Sei Lepan <br /> Kabupaten Langkat
                  </td>
                  <td>
                    Desa Harapan Maju <br /> Dusun V Kecamatan Sei Lepan <br />{" "}
                    Kabupaten Langkat
                  </td>
                  <td>
                    PT Perusahaan <br /> Listrik Negara (Persero)
                  </td>
                  <td>DLH Kab. Langkat</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>6.</td>
                  <td>
                    Konsutan Survey untuk Kebutuhan <br /> Penyusunan Dokumen
                    UKL/UPL <br /> Pembangunan Dermaga I di Tomok
                  </td>
                  <td>Tomok Sumatera Utara</td>
                  <td>
                    Balai Prasarana <br /> Permukiman Wilayah <br /> Sumatera
                    Utara
                  </td>
                  <td>DLH Kab. Samosir</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>7.</td>
                  <td>
                    Konsutan Survey untuk Kebutuhan <br /> Penyusunan Dokumen
                    UKL/UPL <br /> Pembangunan Waterfront City
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    Balai Prasarana Permukiman <br /> Wilayah Sumatera Utara
                  </td>
                  <td>DLH Kab. Samosir</td>
                </tr>
                <tr className="text-sm">
                  <td>2020</td>
                  <td>8.</td>
                  <td>
                    Pekerjaan Penyusunan Dokumen <br /> Lingkungan Hidup <br />{" "}
                    dan Pengurusan Izin <br /> Lingkungan PT. Bank Sumut
                  </td>
                  <td>Sumatera Utara</td>
                  <td>PT. Bank Sumut</td>
                  <td>
                    DLH Kab/Kota <br /> se Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>9.</td>
                  <td>
                    Penyusunan DPLH Pembangunan Jaringan <br />
                    HUTM, HUTR dan Gardu Distribusi Dalam Rangka <br /> Program
                    Pembangunan <br /> Listrik Desa Persiapan <br /> Mekar
                    Meranti Dusun Bagan Toreh, <br /> Jadi Mulya, Bangun Jaya{" "}
                    <br /> dan Sepadan Makmur Kecamatan <br /> Torgamba
                    Kabupaten Labuhan Batu Selatan
                  </td>
                  <td>
                    Kecamatan Torgamba <br /> Kabupaten Labuan Batu <br />{" "}
                    Selatan
                  </td>
                  <td>
                    PT Perusahaan Listrik <br /> Negara (Persero)
                  </td>
                  <td>
                    DLH Kab. Labuhan Batu <br /> Selatan
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>10.</td>
                  <td>
                    Pembuatan Dokumen Evaluasi dan Kajian Teknis <br />{" "}
                    Pemanfaatan Limbah Cair Kelapa Sawit <br /> Pada Tanah{" "}
                    <br /> di Perkebunan Kelapa Sawit di Kebun/Pabrik Bah <br />{" "}
                    Jambi dan Mayang <br /> PT Perkebunan Nusantara IV
                  </td>
                  <td>Bah Jambi dan Mayang</td>
                  <td>
                    PT Perkebunan <br /> Nusantara IV (Persero)
                  </td>
                  <td>
                    DLH Kab. <br /> Simalungun
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>11.</td>
                  <td>
                    Pengadaan Jasa Revisi Upaya Pengelolaan <br /> dan
                    Pemantauan Lingkungan Hidup <br /> (UKL-UPL) dan Perizinan{" "}
                    <br /> TPS Limbah B3 PLTBg Sei Mangkei
                  </td>
                  <td>Sei Mangke</td>
                  <td>
                    PT Pertamina <br /> Power Indonesia
                  </td>
                  <td>
                    Pengelola <br /> KEK Sei Mangkei
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>12.</td>
                  <td>
                    Pengadaan Jasa Konsultansi Pekerjaan <br /> Perubahan
                    Dokumen DELH IPAL Cemara
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PDAM Tirtanadi <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    DLH Prov. <br />
                    Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>13.</td>
                  <td>
                    Penyusunan Dokumen <br /> Evaluasi Lingkungan <br /> Hidup
                    (DELH) Kebun Torgamba dan <br /> Kebun Sei Baruhur di <br />{" "}
                    Wilayah Kabupaten Labuhan Batu Selatan PT <br /> Perkebunan
                    Nusantara br III (Persero)
                  </td>
                  <td>
                    Kabupaten Labuhan <br /> Batu Selatan
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    DLH Kab. <br /> Labuhan Batu Selatan
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>14.</td>
                  <td>
                    Penyusunan Dokumen Evaluasi <br /> Lingkungan Hidup (DELH)
                    Kebun Torgamba <br /> dan Kebun Sei Baruhur <br /> di
                    Wilayah Kabupaten Rokan Hilir <br /> PT Perkebunan Nusantara
                    III (Persero)
                  </td>
                  <td>Kabupaten Rokan Hilir</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>DLH Kab. Rokan Hilir</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>15.</td>
                  <td>
                    Penyusunan DELH di Wilayah Kabupaten <br /> Serdang Bedagai
                    dan Kota Tebing Tinggi serta <br /> Penyusunan DPLH di
                    Wilayah Kabupaten Batu <br /> Bara untuk Kebun Rambutan
                  </td>
                  <td>Kabupaten Batubara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    DLH Prov. Sumatera <br /> Utara DLH <br /> Kab. Batubara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>16.</td>
                  <td>
                    Pembuatan Dokumen <br /> Evaluasi dan Kajian <br /> Teknis
                    Pemanfaatan Limbah <br /> Cair Kelapa <br /> Sawit Pada{" "}
                    <br /> Tanah di Perkebunan Kelapa <br /> Sawit di
                    Kebun/Pabrik <br /> Timur PT Perkebunan <br /> Nusantara IV
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara IV (Persero)
                  </td>
                  <td>
                    DLH Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>17.</td>
                  <td>
                    Pembuatan Dokumen Kajian Teknis <br /> Pembuangan Air Limbah
                    Ke Air Atau <br /> Sumber Air di Kebun/Pabrik <br /> Timur
                    Ajamu PT Perkebunan Nusantara IV
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara IV (Persero)
                  </td>
                  <td>
                    DLH Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2021</td>
                  <td>18.</td>
                  <td>
                    Pembuatan Dokumen Kajian Teknis <br /> Pembuangan Air Limbah
                    Domestik di PKS <br /> Bah Jambi dan Kebun Bah <br /> Jambi
                    PT Perkebunan Nusantara IV
                  </td>
                  <td>Bah Jambi</td>
                  <td>
                    PT Perkebunan <br /> Nusantara IV (Persero)
                  </td>
                  <td>
                    DLH Kab. <br /> Simalungun
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>19.</td>
                  <td>
                    Penyusunan RKL RPL Rinci <br /> Rencana Usaha dan/atau
                    Kegiatan Industri <br /> Sabun PT Alliance <br /> Consumer
                    Indonesia Kapasitas <br /> 70.000 Ton/Tahun <br /> di KEK
                    Sei Mangkei
                  </td>
                  <td>KEK Sei Mangkei</td>
                  <td>
                    PT. Alliance Consumer <br /> Product Indonesia
                  </td>
                  <td>
                    Pengelola KEK <br /> Sei Mangkei
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>20.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL <br /> Rinci PSMKI dan PKSMK PT.{" "}
                    <br />
                    Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    Pengelola KEK <br /> Sei Mangkei
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>21.</td>
                  <td>
                    Penyusunan Dokumen Studi <br /> Kajian Land Application
                    Kebun <br />
                    Rambutan PT. Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    DLH Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>22.</td>
                  <td>
                    Penyusunan Dokumen Kajian <br /> Teknis Pengelolaan
                    Lingkungan <br />
                    Kebun Bandar Betsy PT. <br /> Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    DLH Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2022</td>
                  <td>23.</td>
                  <td>
                    Pembuatan Dokumen Kajian <br /> Land Aplikasi dan Surat
                    Layak <br />
                    Operasional Land Aplikasi <br /> Kebun Laut Tador
                  </td>
                  <td>
                    Kabupaten Batubara <br /> Provinsi Sumatera <br /> Utara
                  </td>
                  <td>
                    PT Sumber <br /> Sawit Makmur
                  </td>
                  <td>
                    DLH Prov. <br /> Sumatera Utara
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2023</td>
                  <td>24.</td>
                  <td>
                    Penyusunan Dokumen UKL <br /> UPL PLTA Aek Poring Kapasitas{" "}
                    <br /> 28,5 MW di Desa Pardomuan <br /> Nauli dan Siantar
                    Naipospos <br /> Kecamatan Adiankoting Kabupaten <br />{" "}
                    Tapanuli Utara
                  </td>
                  <td>
                    Kecamatan Adiankoting <br /> Tapanuli Utara
                  </td>
                  <td>
                    PT Anugerah <br /> Bumimegah Energi
                  </td>
                  <td>KLHK</td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>25.</td>
                  <td>
                    Penyusunan Dokumen AMDAL dan <br /> Persetujuan Lingkungan
                    Pemanfaatan <br /> Hasil Hutan di <br />
                    Kecamatan Raya Kabupaten <br />
                    Simalungun
                  </td>
                  <td>
                    Kecamatan Raya <br /> Kabupaten Simalungun
                  </td>
                  <td>
                    PT Monsanto <br /> Citra Nusantara
                  </td>
                  <td>KLHK</td>
                </tr>
              </tbody>
            </table>
            <h3 className="font-bold mb-3 mt-10">
              2. Penyusunan Pelaksanaan RKL RPL
            </h3>
            <table className="table mx-auto table-xs ">
              <thead>
                <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">No</th>
                  <th scope="col">Nama Perkerjaan</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Pemrakarsa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td>2018</td>
                  <td>1.</td>
                  <td>
                    Penyusunan Pelaporan Pelaksanaan Pengelolaan dan Pemantauan
                    Lingkungan Hidup Konst <br /> PLTU, Jetty dan SUTT PT. Mabar
                    Elektrindo <br /> Semester I 2017
                  </td>
                  <td>
                    Desa Paluh Kurau Kec. <br /> Hamparan Perak Kab. <br /> Deli
                    Serdang Prov. br Sumatera Utara
                  </td>
                  <td>
                    PT.Shanghai Electric <br /> Power Construction
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2019</td>
                  <td>2.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan
                    Rencana <br /> Pemantauan Lingkungan (RPL) Semester II Tahun
                    2018 Unit <br /> Kantor Direksi (URTA dan Instalasi Belawan)
                    PT Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Medan dan Belawan</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>3.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan <br /> Lingkungan
                    (RKL) dan Rencana Pemantauan Lingkungan (RPL) <br />{" "}
                    Semester II Tahun 2018 <br />
                    di Wilayah Distrik Labuhanbatu I PT Perkebunan <br />{" "}
                    Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>4.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL){" "}
                    <br /> dan Rencana Pemantauan Lingkungan (RPL) Semester II
                    Tahun 2018 di Wilayah <br /> Distrik Labuhanbatu II PT
                    Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>5.</td>
                  <td>
                    Penyusunan Laporan Rencana <br /> Pengelolaan Lingkungan
                    (RKL) dan Rencana Pemantauan <br /> Lingkungan (RPL)
                    Semester II Tahun 2018 di Wilayah Distrik <br /> Labuhanbatu
                    III PT Perkebunan Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>6.</td>
                  <td>
                    Penyusunan Laporan Rencana <br /> Pengelolaan Lingkungan
                    (RKL) dan Rencana Pemantauan <br /> Lingkungan (RPL)
                    Semester II Tahun 2018 di Wilayah Distrik <br /> Asahan PT
                    Perkebunan Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Asahan <br /> Provinsi Sumatera <br /> Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>7.</td>
                  <td>
                    Penyusunan Laporan Rencana <br /> Pengelolaan Lingkungan{" "}
                    (RKL) dan Rencana Pemantauan <br /> Lingkungan (RPL)
                    SemesterII Tahun 2018 di <br /> Wilayah Distrik Deli Serdang
                    I PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Deli <br /> Serdang Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>8.</td>
                  <td>
                    Penyusunan Laporan Rencana <br /> Pengelolaan Lingkungan
                    (RKL) dan Rencana Pemantauan <br /> Lingkungan (RPL)
                    Semester II Tahun 2018 di Wilayah Distrik Deli <br />{" "}
                    Serdang II PT <br /> Perkebunan Nusantara br III (Persero)
                  </td>
                  <td>
                    Kab. Deli <br /> Serdang Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>9.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Labuhan Batu I PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>10.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Labuhan Batu II PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>11.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Labuhan Batu III PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>12.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Asahan PT Perkebunan Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Asahan Provinsi <br /> Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>13.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Serdang I PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>
                    Kab. Deli Serdang <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>14.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Wilayah Distrik Serdang II PT Perkebunan Nusantara III
                    (Persero)
                  </td>
                  <td>
                    Kab. Deli Serdang <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>15.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL / RPL Semester I - 2019{" "}
                    <br />
                    Unit Kantor Direksi PT Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Medan</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2020</td>
                  <td>16.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Serdang I PT. Perkebunan Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Deli Serdang <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>17.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Labuhan Batu I PT. Perkebunan Nusantara III <br />
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>18.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Labuhan Batu II PT. Perkebunan Nusantara III <br />
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>19.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Serdang II PT. Perkebunan Nusantara III (Persero){" "}
                    <br />
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>20.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Labuhan Batu III PT. Perkebunan Nusantara III <br />
                    (Persero)
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>21.</td>
                  <td>
                    Penyusunan Laporan Rencana Pengelolaan Lingkungan (RKL) dan{" "}
                    <br />
                    Rencana Pemantauan Lingkungan (RPL) Semester II/2019 Wilayah{" "}
                    <br />
                    Distrik Asahan PT. Perkebunan Nusantara III (Persero)
                  </td>
                  <td>
                    Kab. Asahan <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>22.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Unit Kegiatan Kantor Direksi PT.
                    Perkebunan Nusantara III
                  </td>
                  <td>Medan</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>23.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Labuhanbatu I PT. Perkebunan <br />
                    Nusantara III
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>24.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Labuhanbatu II PT. Perkebunan <br />
                    Nusantara III
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>25.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Labuhanbatu III PT. Perkebunan <br />
                    Nusantara III
                  </td>
                  <td>
                    Kab. Labuhanbatu <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>26.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Asahan PT. Perkebunan Nusantara III
                  </td>
                  <td>
                    Kab. Asahan <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>27.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Serdang I PT. Perkebunan Nusantara{" "}
                    <br />
                    III
                  </td>
                  <td>
                    Kab. Deli Serdang <br /> Provinsi Sumatera Utara{" "}
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>28.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Serdang II PT. Perkebunan Nusantara{" "}
                    <br />
                    III
                  </td>
                  <td>
                    Kab. Deli Serdang <br /> Provinsi Sumatera Utara{" "}
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>29.</td>
                  <td>
                    Pekerjaan Penyusunan Laporan RKL/RPL SMT.I/2020 di Unit{" "}
                    <br />
                    Kegiatan Kerja Distrik Kandir PT. Perkebunan Nusantara III
                  </td>
                  <td>Medan</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2021</td>
                  <td>30.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester II Tahun 2020 PT. <br />
                    Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td></td>
                  <td>31.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester I Tahun 2020 PT. <br />
                    Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2022</td>
                  <td>32.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester II Tahun 2021 PT. <br />
                    Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2022</td>
                  <td>33.</td>
                  <td>
                    Pekerjaan Jasa Konsultansi Survey Evaluasi Manfaat Program{" "}
                    <br />
                    Pendanaan UMK (PUMK) dan Tanggung Jawab Social Lingkungan{" "}
                    <br />
                    (TJSL) PT. Perkebunan Nusantara III (Persero) Tahun 2022
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2022</td>
                  <td>34.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester I Tahun 2022 Seluruh{" "}
                    <br />
                    Unit Kerja Wilayah Distrik Asahan PT. Perkebunan Nusantara{" "}
                    <br />
                    III (Persero)
                  </td>
                  <td>
                    Kab. Asahan <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2022</td>
                  <td>35.</td>
                  <td>
                    Pekerjaan Jasa Konsultansi Pelaksanaan Penyusunan Dokumen{" "}
                    <br />
                    Penilaian Dampak Sosial (Social Impact Assessment) Untuk{" "}
                    <br />
                    Kebun Wilayah KSO Datim Kebun Karang Inong (KKINO) dan Kebun{" "}
                    <br />
                    Julok Rayeuk Selatan (KJLRS) PT. Perkebunan Nusantara III{" "}
                    <br />
                    (Persero) Tahun 2022
                  </td>
                  <td>Aceh</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2023</td>
                  <td>36.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester II Tahun 2022 Seluruh{" "}
                    <br />
                    Unit Kerja Wilayah Distrik Asahan PT. Perkebunan Nusantara{" "}
                    <br />
                    III (Persero)
                  </td>
                  <td>
                    Kab. Asahan <br /> Provinsi Sumatera Utara
                  </td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2023</td>
                  <td>37.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester II Tahun 2022 Kebun{" "}
                    <br />
                    Karang Inong dan Kebun Julok Rayeuk Selatan PT. Perkebunan{" "}
                    <br />
                    Nusantara III (Persero)
                  </td>
                  <td>Aceh</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
                <tr className="text-sm">
                  <td>2023</td>
                  <td>37.</td>
                  <td>
                    Penyusunan Laporan RKL/RPL Semester II Tahun 2022 Seluruh{" "}
                    <br />
                    Unit Kerja Wilayah DLAB1, DLAB2, DLAB3, DSER1,DSER2, Kandir{" "}
                    <br />
                    dan Instalasi Belawan PT. Perkebunan Nusantara III (Persero)
                  </td>
                  <td>Sumatera Utara</td>
                  <td>
                    PT Perkebunan <br /> Nusantara III (Persero)
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="font-bold mb-3 mt-10">2. Survey</h3>
            <table className="table mx-auto table-xs ">
              <thead>
                <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">No</th>
                  <th scope="col">Nama Perkerjaan</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Pemrakarsa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td>2020</td>
                  <td>1</td>
                  <td>
                    Pekerjaan Jasa Konsultansi Soil Investigasi di PLTU
                    Pangkalan Susu
                  </td>
                  <td>Pangkalan Susu</td>
                  <td>PT Rekadaya Elektrika Consult</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </Templates>
    </>
  );
};

export default Portofolio;
