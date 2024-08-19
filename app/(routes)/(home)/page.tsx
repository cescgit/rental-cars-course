import { Navbar } from "@/components/Shared/Navbar";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";


export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <FirstBlock />
      </div>
    </div>
  );
}