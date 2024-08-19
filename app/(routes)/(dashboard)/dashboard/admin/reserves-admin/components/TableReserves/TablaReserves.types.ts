import type { Order } from "@prisma/client"

export type TableReservesProps = {
    orders: Order[]
}