import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function pageOrderError() {
  return (
    <div>
        <Navbar />
        
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-2xl md:text-4xl">¡Ops! Ha ocurrido un error. vuelva a intentarlo más tarde...</h2>
                <Link href="/">
                    <Button>Vlver a ver los productos</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
