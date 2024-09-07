import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function DriveToday() {
  return (
    <div className="p-6 lg:my-20 max-w-7xl mx-auto">
      <div className="bg-[url('/img/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-slate-200">
              Drive your dream car today
            </h3>
            <p className="text-white text-xl my-4">
              Register and explore the world of premium cars
            </p>
            <Link href="/sign-in">
              <Button size="lg" variant="outline">
                Register here
              </Button>
            </Link>
          </div>
          <Reveal className="lg:absolute lg:-right-32 top-12" position="bottom">
            <Image
              src="/img/car-1.png"
              alt="Car drive"
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}