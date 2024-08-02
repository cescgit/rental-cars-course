"use client"
import type { ButtonEditCarProps } from "./ButtonEditCar.types";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
    const {carData} = props
    const [openDialog, setOpenDialog] = useState(false)
  return (
    <Dialog open={openDialog}>
        <DialogTrigger asChild>
            <Button className="bg-cyan-600 text-white hover:text-white transition-all duration-150 hover:bg-cyan-800" variant="outline" onClick={() => setOpenDialog(true)}>
                Edit
                <Pencil className="size-4 ml-2" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}
