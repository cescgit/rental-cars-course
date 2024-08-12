import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function pageReserves() {
    const {userId} = auth()

    if(!userId) {
        return redirect("/")
    }

    const order = await db.order.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })

  return (
    <div>pageReserves</div>
  )
}