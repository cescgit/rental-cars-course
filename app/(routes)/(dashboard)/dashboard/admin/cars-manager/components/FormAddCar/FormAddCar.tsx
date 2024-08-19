"use client";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddCar.form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import type { FormAddCarProps } from "./FormAddCar.types";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FormAddCar(props: FormAddCarProps) {

  const {setOpenDialog} = props
  const [photoUploaded, setphotoUploaded] = useState(false);
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      horsep: "",
      transmission: "",
      people: "",
      photo: "",
      engine: "",
      type: "",
      priceDay: "",
      isPublish: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false)
    try {
      await axios.post(`/api/car`, values)
      toast({
        title: "Car created ✅"         
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive"
      })
    }
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car name:</FormLabel>
                <FormControl>
                  <Input placeholder="Tesla Model S Plaid..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="horsep"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horsepower:</FormLabel>
                <FormControl>
                  <Input placeholder="60 KW" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatico">Automático</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>People:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the quantity of people" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="13">13</SelectItem>
                    <SelectItem value="18">18</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the engine of car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gasolina">Gasolina</SelectItem>
                    <SelectItem value="disel">Disel</SelectItem>
                    <SelectItem value="electrico">Eléctrico</SelectItem>
                    <SelectItem value="hibrido">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sedan">Sedán</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="coupe">Coupé</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="luxe">De Luxe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per day:</FormLabel>
                <FormControl>
                  <Input placeholder="20$" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car image:</FormLabel>
              <FormControl>
                {photoUploaded ? (
                  <p>Image uploaded</p>
                ) : (
                  <UploadButton
                    className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-2"
                    {...field}
                    endpoint="photo"
                    onClientUploadComplete={(res) => {
                      form.setValue("photo", res?.[0].url);
                      setphotoUploaded(true);
                    }}
                    onUploadError={(error: Error) => {
                      console.log(error);
                    }}
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-5" disabled={!isValid}>
          Create car rental
        </Button>
      </form>
    </Form>
  );
}
