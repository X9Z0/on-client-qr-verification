// function HeroSection() {
//   return (
//     <section className="dark:bg-gray-100 dark:text-gray-800">
//       <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
//         <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//           <h1 className="text-5xl font-bold leading-none sm:text-6xl">
//             Ac mattis
//             <span className="dark:text-violet-600">senectus</span>erat pharetra
//           </h1>
//           <p className="mt-6 mb-8 text-lg sm:mb-12">
//             Dictum aliquam porta in condimentum ac integer
//             <br className="hidden md:inline lg:hidden" />
//             turpis pulvinar, est scelerisque ligula sem
//           </p>
//           <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
//             >
//               Suspendisse
//             </a>
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
//             >
//               Malesuada
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//           <img
//             src="assets/svg/Business_SVG.svg"
//             alt=""
//             className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { CardSpotlight } from "./card-spotlight";
import Cardqr from "./Cardqr";
import penguin from "/public/qrcode2.png";
import { Button } from "./button";
import { TextGenerateEffect } from "./text-generate-effect";
function HeroSection() {
  return (
    <div className="h-auto 0 md:h-[40rem] w-full rounded-md flex flex-row items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className=" p-4 relative z-10 w-auto text-left text-slate-300 mt-48">
        <h1 className="mt-20 md:mt-0 text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          TrueSeal
        </h1>
        <div className="mt-4 font-light text-base md:text-md text-neutral-300 max-w-lg">
          <TextGenerateEffect
            words="Protect your brand and ensure product authenticity with our
          open-source, QR code-based verification system. Easily implement a
          robust anti-counterfeiting solution for your physical
          products, completely free and customizable."
          />
        </div>
        <div className="mt-4">
          <Link href={"/demo"}>
            <Button className="bg-slate-100 rounded text-black hover:bg-gray-300">
              Demo
            </Button>
          </Link>
        </div>
      </div>
      <div className="ml-5 mt-52">
        <CardSpotlight>
          <Cardqr
            imageUrl={penguin}
            imageAlt="#"
            title="Secured QR-code"
            description=""
          />
        </CardSpotlight>
      </div>
    </div>
  );
}
export default HeroSection;
