import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { toast } from "../components/ui/use-toast"
import {Car} from "@prisma/client"
import { get } from "http"
import { set } from "date-fns"

interface UseLovedCarsType {
    lovedItems: Car[],
    addLoveItem: (data: Car) => void,
    removedLoveItem: (id: string) => void
}

export const useLovedCars = create(
    persist<UseLovedCarsType>(
        (set, get) => ({
            lovedItems: [],
         addLoveItem: (data: Car) => {
            const currentLovedItems = get().lovedItems;
            const existingItem = currentLovedItems.find((item) => item.id === data.id)
            
            if(existingItem) { 
                return toast({
                    title: "El vehículo ya existe en la lista de favorítos"
                })
            }

            set({
                lovedItems: [...get().lovedItems, data]

            })

            toast({
                title: "Vehículo agregado correctamente en la lista de favorítos"
            })
        },

        removedLoveItem: (id: string) => {
            set({
                lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
            })
            toast({
                title: "El vehículo se ha eliminado de la lista de favorítos"
            })
        }
    }),
    {
        name: "loved-products-storage",
        storage: createJSONStorage(() => localStorage)
    }
))