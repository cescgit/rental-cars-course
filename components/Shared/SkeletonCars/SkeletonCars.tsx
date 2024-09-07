import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCars() {
    const numbersItem = 8
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            [...Array(numbersItem)].map((_, index) => (
                <div key={index}>
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <Skeleton className="h-4 w-[200px] mt-5" />
                    <Skeleton className="h-4 w-[200px] mt-5" />
                    <Skeleton className="h-4 w-[200px] mt-5" />
                </div>
            ))
        }
    </div>
  )
}