"use client"
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.type";
import Image from "next/image";
import { Fuel, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation/ModalAddReservation";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  return (
    <div className="grid grid-cols-1 gap-6 justify-items-center my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const {
            id,
          name,
          horsep,
          transmission,
          people,
          photo,
          priceDay,
          engine,
          type,
          isPublish,
          createdAt,
        } = car;

        return (
            <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
                <Image src={photo} alt={name} width={400} height={600} className="rounded-lg" />
                <div className="p-3">
                    <div className="flex flex-col mb-3 gap-x-4">
                        <h3 className="text-xl min-h-16 lg:min-h-fit">{name}</h3>
                        <p>{priceDay}$ /día</p>
                    </div>
                    <p className="flex items-center">
                        <Gem className="size-4 mr-2" />
                        {type}
                    </p>
                    <p className="flex items-center">
                        <Wrench className="size-4 mr-2" />
                        {transmission}
                    </p>
                    <p className="flex items-center">
                        <Users className="size-4 mr-2" />
                        {people}
                    </p>
                    <p className="flex items-center">
                        <Fuel className="size-4 mr-2" />
                        {engine}
                    </p>        

                    <div className="flex items-center justify-center gap-x-3">
                        <ModalAddReservation car={car} />
                        <Heart 
                            className="mt-2 cursor-pointer"
                            onClick={() => console.log("HEART")}
                        />
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  );
}
