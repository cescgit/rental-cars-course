import { Calendar, Car, Heart, Network } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserve",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Loved cars",
    href: "/loved-cars",
  },
];

export const dataGeneralSidebarAdmin = [
  {
    icon: Network,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/reserves",
  },
];