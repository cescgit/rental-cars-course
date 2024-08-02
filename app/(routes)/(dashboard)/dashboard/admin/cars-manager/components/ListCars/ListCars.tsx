import { CardCar } from "./CarCard";
import { ListCarsProps } from "./ListCars.types";

export function ListCars(props : ListCarsProps) {
  const {cars} = props
  
    return (
    <div className="grid grid-cols-1 gap-6 justify-items-center my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            cars.map((car) => (
                <CardCar key={car.id} car={car} />
            ))
        }
    </div>
  )
}
