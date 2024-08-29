import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { SliderBrands } from "./components/SlidersBrands";


export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <FirstBlock />
        <SliderBrands />
      </div>
    </div>
  );
}