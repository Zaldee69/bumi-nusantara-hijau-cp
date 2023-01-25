import React from "react";
import LinkTo from "../atoms/Link";
import Links from "../molecules/Links";
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="navbar py-5 text-sm bg-transparent">
      <div className="flex-1">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <LinkTo title="Beranda" href="/" />
            </li>
            <li>
              <LinkTo title="Tentang Kami" href="/tentang" />
            </li>
            <li>
              <LinkTo title="Kontak Kami" href="/kontak" />
            </li>
            <li>
              <LinkTo title="AMDAL" href="/amdal" />
            </li>
            <li>
              <LinkTo title="PERTEK B3" href="/pertek-b3" />
            </li>
            <li>
              <LinkTo title="PERTEK Emisi" href="/pertek/emisi" />
            </li>
            <li>
              <LinkTo title="PERTEK Air Limbah" href="/pertek/limbah" />
            </li>
            <li>
              <LinkTo title="Design Engineering" href="/de" />
            </li>
            <li>
              <LinkTo title="Feasebility Study" href="/fs" />
            </li>
          </ul>
        </div>
        <div className="flex gap-3 ml-5 items-center" >
        <Image className="" alt="logo" src="/assets/images/logo.png" height="100" width="100" />
        <a className="hidden md:block normal-case text-xl">PT BUMI NUSANTARA HIJAU</a>
        </div>
      </div>
      <div className="flex-none">
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
