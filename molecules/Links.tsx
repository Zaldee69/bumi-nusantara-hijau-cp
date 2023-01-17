import React from "react";
import LinkTo from "../atoms/Link";
import DropdownLinks from "./DropdownLinks";
import Button from "./../atoms/Button";
import {useRouter} from "next/router"


const Links = () => {

  const router = useRouter()

  return (
    <ul className="menu hidden z-10 md:flex menu-horizontal px-1">
      <li className={`group hover:border-secondary border-b-2 border-transparent ${router.pathname === '/' && "border-secondary"}`} >
        <LinkTo title="Beranda" href="/" style={`group-hover:font-medium ${router.pathname === '/' && "font-medium"}`} />
      </li>
      <li className="border-b-2 border-transparent" tabIndex={0}>
        <a>
          Layanan
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <DropdownLinks />
      </li>
      <li className={`group hover:border-secondary border-b-2 border-transparent ${router.pathname === '/tentang' && "border-secondary"}`} >
        <LinkTo title="Tentang" href="/tentang" style={`group-hover:font-medium ${router.pathname === '/tentang' && "font-medium"}`} />
      </li>
      <li className={`group hover:border-secondary border-b-2 border-transparent ${router.pathname === '/kontak' && "border-secondary"}`} >
        <LinkTo title="Kontak" href="/kontak" style={`group-hover:font-medium ${router.pathname === '/kontak' && "font-medium"}`} />
      </li>
      <li className="mx-5" >
        <Button title="Konsultasi Sekarang" style="bg-secondary text-white text-sm" />
      </li>
    </ul>
  );
};

export default Links;
