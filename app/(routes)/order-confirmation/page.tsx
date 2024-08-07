import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function orderConfirmationPage() {
  return (
    <div>
        <Navbar />
        
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">

                <Image src="/car-loan.svg" alt="Image" className="drop-shadow-md" width={260} height={160} />
                <h2 className="text-2xl md:text-4xl">¡Muchas gracias por confiar en nosotros!</h2>
                <p className="md:text-lg">En breve momentos recibirás toda la información a travez de tu correo electrónico</p>
                <p className="md:text-lg">Puedes visualizar todas tus reservas dentro de tu Área de cliente</p>

                <Link href="/">
                    <Button>Volver a ver los productos</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
