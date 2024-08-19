import Link from "next/link";
import Image from "next/image";


export function LogoDashboard() {
  return (
    <Link href="/" className="flex lg:flex-row flex-col items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
      <Image src="/logotipo.svg" alt="Logotipo" width={100} height={100} priority />
      <h1 className="text-xl font-bold">Rent a Cars</h1>
    </Link>
  )
}
