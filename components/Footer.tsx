import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="text-white font-semibold text-xl">
          PT. BUMI NUSANTARA HIJAU
        </span>
        <a className="text-white">
          Didirikan sebagai wadah para profesional <br /> dibidang lingkungan hidup,
           perencanaan dan <br /> manajemen dalam mendukung pelaksanaan <br />
          pembangunan yang berwawasan lingkungan <br /> dan berkelanjutan.
        </a>
      </div>
      <div>
        <span className="footer-title">Tentang Kami</span>
        <a className="link link-hover">Tentang PT. BPN</a>
        <a className="link link-hover">Kontak</a>
      </div>
      <div>
        <span className="footer-title">Layanan</span>
        <a className="link link-hover">AMDAL</a>
        <a className="link link-hover">Design Engineering</a>
        <a className="link link-hover">Feasebility Study</a>
        <a className="link link-hover">PERTEK Pemanfaatan Air Limbah</a>
        <a className="link link-hover">PERTEK Pembuangan Emisi</a>
        <a className="link link-hover">PERTEK Pembuangan Air Limbah ke laut</a>
      </div>
      <div>
        <span className="footer-title">Hubungi Kami</span>
        <a className="">
          Jl. Asrama Komplek Bumi Asri blok C No. 27 - 28, <br /> Medan,
          Sumatera Utara 20126 <br />
          Phone : 061-8440747, 8466674 <br />
          Fax : 061-8466674 <br />
          E-Mail : buminusantarahijaupt@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
