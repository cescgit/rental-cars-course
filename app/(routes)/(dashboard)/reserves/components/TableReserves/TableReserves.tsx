import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import type { TableReservesProps } from "./TableReserves.type";
import { formatPrice } from "@/lib/formatPrice";

export function TableReserves(props: TableReservesProps) {
    const {orders} = props

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount)
    }, 0)

  return (
    <Table>
      <TableCaption>A list of your recent bookings</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Date start</TableHead>
          <TableHead>Date end</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell>
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="p-2 text-white bg-green-600 text-lg rounded-md w-fit text-center">
              {order.status}
            </TableCell>
            <TableCell className="text-right">
              {formatPrice(+order.totalAmount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableCell colSpan={4}>Total</TableCell>
        <TableCell className="text-right font-bold">{formatPrice( totalAmount)}</TableCell>
      </TableFooter>
    </Table>
  );
}
