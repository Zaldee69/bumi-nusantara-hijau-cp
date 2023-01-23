import React from 'react'
import Button from "./../atoms/Button";
import {useRouter} from "next/router"


const Hero = () => {
  const router = useRouter()
  return (
    <div className="hero-component h-[calc(100vh-88px)]" >
      <div className="flex flex-col h-full justify-center items-center gap-10" >
      <h1 className="text-center text-white font-semibold text-xl px-2 md:text-2xl" >Dapatkan saran dari Tenaga Ahli <br/> yang berpengalaman dan menguasai <br/> bidangnya</h1>
      <Button  action={() => router.push("/konsultasi")} title="Konsultasi Sekarang" style="bg-secondary text-white px-5 py-3 rounded-lg" />
      </div>
    </div>
  )
}

export default Hero