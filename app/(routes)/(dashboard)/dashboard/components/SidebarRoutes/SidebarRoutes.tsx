"use client";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataGeneralSidebar, dataGeneralSidebarAdmin } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

export function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        {isAdministrator(userId) && (
          <div className="border-t-2 border-gray-400/65">
            <div className="p-2 md:p-6">
              <p className="mb-2 text-slate-500">ADMIN</p>
              {dataGeneralSidebarAdmin.map((item) => (
                <SidebarItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
