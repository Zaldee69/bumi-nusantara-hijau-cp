import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="bg-white py-10 px-10">
      <h1 className="text-center text-xl">
        Telah dipercaya lebih dari <span className="font-semibold">20+</span>{" "}
        perusahaan
      </h1>
      <div className="grid md:grid-rows-1 sm:grid-rows-2 sm:grid-flow-col justify-center grid-flow-row gap-7 items-center px-10 py-10" >
          <Image
            alt="Pertamina Power"
            className="h-[90px] mx-auto md:mx-0"
            src="/assets/images/nusantara1.png"
            height={25}
            width={200}
          />
          <Image
            alt="Pertamina Power"
            className="h-[100px] mx-auto md:mx-0"
            src="/assets/images/perkebunan2.png"
            height={50}
            width={150}
          />
          <Image
            alt="Pertamina Power"
            className="h-[60px] mx-auto md:mx-0"
            src="/assets/images/aice.jpg"
            height={50}
            width={150}
          />
          <Image
            alt="Pertamina Power"
            className="h-[50px] mx-auto md:mx-0"
            src="/assets/images/pertamina.png"
            height={50}
            width={150}
          />
          <Image
            alt="Pertamina Power"
            className="h-[60px] mx-auto md:mx-0"
            src="/assets/images/sinarmas.png"
            height={50}
            width={150}
          />
          <Image
            alt="Pertamina Power"
            className="h-[70px] mx-auto md:mx-0"
            src="/assets/images/pdam.png"
            height={50}
            width={150}
          />
      </div>
    </div>
  );
};

export default Partner;
