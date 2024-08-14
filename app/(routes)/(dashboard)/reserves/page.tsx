import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import { TableReserves } from "./components/TableReserves"

export default async function pageReserves() {
    const {userId} = auth()

    if(!userId) {
        return redirect("/")
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

  return (
    <div>
      <h2 className="mb-4 text-3xl">Reserves Page</h2>

      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <h3 className="text-xl">No hay ningún pedidido</h3>
          <p>Has tu pedidos a travéz de la página de vehículos</p>
          <Link href="/cars">
            <Button>Lista de vehículos</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}