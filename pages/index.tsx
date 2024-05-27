import Head from "next/head";
import About from "../components/About";
import Advantages from "../components/Advantages";
import Services from "../components/Services";
import Partner from "../components/Partner";
import { Templates } from "../templates/Templates";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda - PT Bumi Nusantara Hijau</title>
        <meta
          name="description"
          content="PT. Bumi Nusantara Hijau adalah konsultan lingkungan hidup terkemuka di Indonesia. Kami menyediakan layanan konsultasi, penyusunan dokumen lingkungan, dan pengelolaan proyek yang memenuhi standar internasional untuk memastikan keberlanjutan dan kepatuhan lingkungan."
        />
        <meta
          name="keywords"
          content="konsultasi lingkungan, AMDAL, studi kelayakan, pengelolaan limbah B3, perizinan lingkungan, konsultan lingkungan hidup, PT Bumi Nusantara Hijau"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "PT Bumi Nusantara Hijau",
              "url": "https://www.buminusantarahijau.com",
              "logo": "https://www.buminusantarahijau.com/assets/images/logo.png",
              "description": "Konsultan lingkungan hidup terkemuka di Indonesia."
            }
          `}
        </script>
      </Head>
      <Templates>
        <main className="bg-[#F8F9FA]">
          <About />
          <Advantages />
          <Services />
          <Partner />
          <div className="flex justify-center items-center bg-white">
            <Image
              unoptimized={true}
              alt="Sertifikasi ISO 1"
              className="flex-none mx-auto md:mx-0"
              src="/assets/images/iso-1.png"
              height={25}
              width={150}
            />
            <Image
              unoptimized={true}
              alt="Sertifikasi ISO 2"
              className="flex-none mx-auto md:mx-0"
              src="/assets/images/iso-2.webp"
              height={25}
              width={180}
            />
            <Image
              unoptimized={true}
              alt="Sertifikasi ISO 3"
              className="mx-auto md:mx-0"
              src="/assets/images/iso-3.png"
              height={10}
              width={200}
            />
          </div>
        </main>
      </Templates>
    </>
  );
}
