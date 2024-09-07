"use client"

import { Button } from "@/components/ui/button";
import { Fuel, Gem, Heart, Users, Wrench, Gauge } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-car";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import type { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars/SkeletonCars";

export function ListCars(props: ListCarsProps) {
    const {cars} = props
    const {userId} = useAuth()
    const {addLoveItem, lovedItems, removedLoveItem} = useLovedCars()

    if(!cars) {
        return (
            <SkeletonCars />
        )
    }
  return (
    <>
        {
            cars.length === 0 && (
                <p>No se encontro ningún vehiculos con estos filtros</p>
            )
        }

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                cars.map((car:Car) => {
                    const {
                      priceDay,
                      photo,
                      name,
                      type,
                      transmission,
                      people,
                      engine,
                      horsep,
                      id,
                    } = car;

                    const likedCar = lovedItems.some((item) => item.id === id)

                    return (
                      <div
                        key={id}
                        className="p-1 rounded-lg shadow-md hover:shadow-lg"
                      >
                        <Image
                          src={photo}
                          alt="Cars"
                          width={400}
                          height={600}
                          className="rounded-lg"
                        />
                        <div className="p-3">
                          <div className="flex flex-col mb-3 gap-x-4">
                            <h3 className="text-xl min-h-16 lg:min-h-fit">
                              {name}
                            </h3>
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

                          {userId ? (
                            <div className="flex items-center justify-center gap-x-3">
                              <ModalAddReservation car={car} />
                              <Heart
                                className={`mt-2 cursor-pointer ${
                                  likedCar && "fill-red-600 stroke-red-600"
                                }`}
                                onClick={
                                  likedCar
                                    ? () => removedLoveItem(id)
                                    : () => addLoveItem(car)
                                }
                              />
                            </div>
                          ) : (
                            <div className="w-full mt-2 text-center">
                              <Button className="w-full" variant="outline">
                                Inicia sesión para reservar
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                })
            }            
        </div>
    </>
  )
}