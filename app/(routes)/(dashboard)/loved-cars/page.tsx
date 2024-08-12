import { auth } from "@clerk/nextjs/server";
import { ListLovedCars } from "./components/ListLovedCars";
import { redirect } from "next/navigation";

export default function page() {

  const {userId} = auth()

  if(!userId) {
    return redirect("/")
  }

  return (
    <div>
      <h2 className="text-2xl text-gray-700 mb-4">Vehículos que te gustan</h2>

      <ListLovedCars />
    </div>
  )
}
