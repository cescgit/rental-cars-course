import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Sidebar from "../Sidebar/Sidebar";

export function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-4 border-b gap-x-4 md:px-8 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
        <div className="flex items-center justify-end w-full gap-x-2">
            <UserButton />
        </div>
    </nav>
  );
}
