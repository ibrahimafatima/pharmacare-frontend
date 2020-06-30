import { FaCapsules, FaShoppingCart, FaUsersCog } from "react-icons/fa";
import { AiFillDashboard, AiTwotoneSetting } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";

export const SIDEBAR_DATA = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: AiFillDashboard,
    route: "/dashboard",
  },
  {
    name: "manage users",
    label: "Manage Users",
    icon: FaUsersCog,
    expandable: true,
    subItems: [
      { name: "admin", label: "Admin" },
      { name: "manager", label: "Manager" },
      { name: "pharmacist", label: "Pharmacist" },
      { name: "salesman", label: "Salesman" },
    ],
  },
  {
    name: "medecines",
    label: "Medecines",
    icon: FaCapsules,
    expandable: true,
    subItems: [
      {
        name: "addMedecine",
        label: "Add Medecine",
        route: "/dashboard/add-medecine/new",
      },
      {
        name: "allMedecines",
        label: "All Medecines",
        route: "/dashboard/all-medecines",
      },
    ],
  },
  {
    name: "sales",
    label: "Sales",
    icon: FaShoppingCart,
    expandable: true,
    subItems: [
      { name: "make sales", label: "Make Sales", route: "/dashboard/sales" },
      {
        name: "sales history",
        label: "Sales History",
        route: "/dashboard/sales-history",
      },
    ],
  },
  {
    name: "setups",
    label: "Setups",
    icon: AiTwotoneSetting,
    expandable: true,
    subItems: [
      {
        name: "all medecine type",
        label: "All Medecine Type",
        route: "/dashboard/all-medecine-type",
      },
      {
        name: "Add Medecine Type",
        label: "Add Medecine Type",
        route: "/dashboard/add-medecine-type/new",
      },
      {
        name: "freeze medecine",
        label: "Freeze Medecine",
        route: "/dashboard/freeze-medecine",
      },
    ],
  },
  {
    name: "reports",
    label: "Reports",
    icon: TiDocumentText,
    expandable: true,
    subItems: [
      { name: "daily report", label: "Daily Report" },
      { name: "sales report", label: "Sales Report" },
      { name: "expiry report", label: "Expiry Report" },
    ],
  },
];
