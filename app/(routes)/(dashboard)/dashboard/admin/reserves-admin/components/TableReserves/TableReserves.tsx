import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TableReservesProps } from "./TablaReserves.types";
import { formatPrice } from "@/lib/formatPrice";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order date</TableHead>
          <TableHead>Customer Id</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Date start</TableHead>
          <TableHead>Date end</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {new Date(order.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="font-medium max-w-[100px] truncate">
              {order.userId}
            </TableCell>
            <TableCell className="font-medium truncate">
              {order.carName}
            </TableCell>
            <TableCell>{new Date(order.orderDate).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(order.orderEndDate).toLocaleDateString()}</TableCell>
            <TableCell className="text-right font-bold">
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
