"use client"
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import type { CardCarProps } from "./CardCar.type";
import { ButtonEditCar } from "./ButtonEditCar";
import axios from "axios";

export function CardCar(props: CardCarProps) {
    const {car} = props;    

    const router = useRouter()

    const deleteCar = async() => {
      try {
        await axios.delete(`/api/car/${car.id}`)
        toast({title: "Car deleted ❌"})
        router.refresh()
      } catch (error) {
        toast({
          title: "Something went wrong",
          variant: "destructive"
        })
      }
    }

    const handlerPublishCar = async (publish: boolean) => {
      try {
        await axios.patch(`/api/car/${car.id}`, {isPublish: publish});
        router.refresh()
        if(publish) {
          toast({
            title: "Car Published 👌"
          })
        }
        else {
          toast({
            title: "Car Unpublish ⚠️",
          });
        }
      } catch (error) {
        toast({
          title: "Something went wrong",
          variant: "destructive"
        })
      }
    }

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg mt-8"
      />

      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-black bg-gray-400/85 rounded-t-md">
          Published
        </p>
      ) : (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-gray-700/85 rounded-t-md">
          Not Published
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl font-bold min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}$ /día</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.horsep}CV
          </p>
        </div>

        <div className="flex md:justify-between flex-col md:flex-row mt-4 md:gap-x-4 gap-y-4">
          <Button
            className="bg-red-500 hover:bg-red-700 hover:text-white transition-all duration-150 text-white"
            variant="outline"
            onClick={deleteCar}
          >
            Delete
            <Trash className="size-4 ml-2" />
          </Button>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3 bg-gray-300 hover:bg-gray-400/85 transition-all duration-150"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            UnPublish
            <Upload className="size-4 ml-4" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3 bg-gray-600 hover:bg-gray-700/85 hover:text-white text-white transition-all duration-150"
            variant="outline"
            onClick={() => handlerPublishCar(true)}
          >
            Publish
            <Upload className="size-4 ml-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
