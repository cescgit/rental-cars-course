"use client"
import { Button } from "@/components/ui/button"
import { useLovedCars } from "@/hooks/use-loved-car"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Heart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
    const {userId} = useAuth()
    const {lovedItems} = useLovedCars()

  return (
    <div className="max-w-5xl py-5 mx-auto mt-6 sticky top-0 bg-white p-16">
      <div className="flex md:flex-row flex-col md:justify-between gap-4 md:gap-0">
        <Link className="flex items-center justify-center gap-x-2" href="/">
          <Image src="/logotipo.svg" alt="Image" width={80} height={80} />
          <span>Rent a Cars</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">List Cars</Link>
          <Link href="/dashboard">Dashboard</Link>

          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart strokeWidth={1} className={`cursor-pointer ${lovedItems.length > 0 && "fill-red-500 stroke-red-500"}`} />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Iniciar Sesión
                <User className="ml-2 size-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
