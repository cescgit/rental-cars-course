import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { SliderBrands } from "./components/SlidersBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";


export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <FirstBlock />
        <SliderBrands />
        <Features />
        <OurFleet />
        <DriveToday />
      </div>
    </div>
  );
}