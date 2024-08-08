import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full mx-auto">
      <div className="flex items-center w-[45%] mx-auto flex-col">
      <Image src="/404-not-found.svg" alt="Image" width={400} height={200} />
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-3xl text-gray-800">¡Ops! al paracer no se encontro lo que estabas buscando...</p>
            <Link href="/">
              <Button>Ir a inicio</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}