import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";


export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="pl-6 lg:pl-40" position="bottom">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Premium
          <span>Rental Cars</span>
          in Nicaragua
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-md">
          Dont deny yourselves pleasure of driving the best premium cars from
          around the world here and now
        </p>
      </Reveal>

     <Reveal position="right" delay={2}>
       <div className="flex justify-end">
         <Image
          className="drop-shadow-2xl"
           src="/img/cr-v-thumbnail.png"
           alt="Rent cars"
           width={800}
           height={800}
           priority
         />
       </div>
     </Reveal>
    </div>
  );
}