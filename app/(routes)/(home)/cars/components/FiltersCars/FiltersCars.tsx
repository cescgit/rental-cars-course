import * as React from "react";
import{
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FiltersAndListCarsProps } from "../FiltersAndListCars/FiltersAndListcars.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FiltersCarsProps } from "./Filterscars.type";

export function FiltersCars(props: FiltersCarsProps) {
    const { filters, clearFilters, setFilters} = props;

    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value)
    }
  return (
    <div className="mt-5 mb-8 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo de vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de Vehículo</SelectLabel>
            <SelectItem value="sedan">Sedán</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="coupe">Coupé</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">De Luxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Cambio de marchas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cambio de marchas</SelectLabel>
            <SelectItem value="automatico">Automático</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de motor</SelectLabel>
            <SelectItem value="gasolina">Gasoil</SelectItem>
            <SelectItem value="disel">Diesel</SelectItem>
            <SelectItem value="electrico">Eléctrico</SelectItem>
            <SelectItem value="hybrid">Hibrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Cantidad de personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cantidad de personas</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
            <SelectItem value="13">13</SelectItem>
            <SelectItem value="18">18</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Remove Filters
        <Trash className="size-4 ml-2" />
      </Button>
    </div>
  );
}