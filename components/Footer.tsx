import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="text-white font-semibold text-xl">
          PT BUMI NUSANTARA HIJAU
        </span>
        <a className="text-white">
          Didirikan sebagai wadah para profesional <br /> dibidang lingkungan
          hidup, perencanaan dan <br /> manajemen dalam mendukung pelaksanaan{" "}
          <br />
          pembangunan yang berwawasan lingkungan <br /> dan berkelanjutan.
        </a>
      </div>
      <div>
        <span className="footer-title">Tentang Kami</span>
        <Link href="/tentang">
          <p className="link link-hover">Tentang PT BNH</p>
        </Link>
        <Link href="/kontak">
          <p className="link link-hover">Kontak</p>
        </Link>
      </div>
      <div>
        <span className="footer-title">Layanan</span>
        <Link href="/amdal">
          <p className="link link-hover">AMDAL / UKL-UPL</p>
        </Link>
        <Link href="/de">
          <p className="link link-hover">Design Engineering</p>
        </Link>
        <Link href="/fe">
          <p className="link link-hover">Feasebility Study</p>
        </Link>
        <Link href="/pertek/lb3">
          <p className="link link-hover">PERTEK LB3</p>
        </Link>
        <Link href="/pertek/emisi">
          <p className="link link-hover">PERTEK Emisi</p>
        </Link>
        <Link href="/pertek/limbah">
          <p className="link link-hover">PERTEK Air Limbah</p>
        </Link>
        <Link href="/pertek/andalalin">
          <p className="link link-hover">PERTEK Andalalin</p>
        </Link>
        <Link href="/konsultasi">
          <p className="link link-hover">Konsultasi</p>
        </Link>
      </div>
      <div>
        <span className="footer-title">Hubungi Kami</span>
        <p className="">
          Jl. Flamboyan Raya Perumahan Taman Anggrek Setiabudi, <br />
          Blok Catelia No. 16 Kelurahan Tanjung Selamat, <br />
          Kecamatan Medan Tuntungan Kota Medan Provinsi Sumatera Utara. <br />
          E-Mail :{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:ptbuminusantarahijaupt@gmail.com"
          >
            buminusantarahijaupt@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footerris = () => {
  return (
    <div className="J">
      J. Asrama Komplek Bumi Asri Blok C No. 27-28, <br /> Medan, Sumatera Utara
      20126 <br />
      Phone: 0822536554721
    </div>
  );
};
