"use client"
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.type";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-car";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { lovedItems, addLoveItem, removeLoveItem} = useLovedCars()

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
          type
        } = car;

        const likedCar = lovedItems.some((item) => item.id === car.id);

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
                    <p className="flex items-center">
                        <Gauge className="size-4 mr-2" />
                        {horsep} CV
                    </p>        

                    <div className="flex items-center justify-center gap-x-3">
                        <ModalAddReservation car={car} />
                        <Heart 
                            className={`mt-2 cursor-pointer ${likedCar && "fill-red-500 stroke-red-500"}`}
                            onClick={ 
                                likedCar ? 
                                () => removeLoveItem(car.id) 
                                : 
                                () => addLoveItem(car)
                            }
                        />
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  );
}
