"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LuLayoutDashboard,
  LuCircleChevronUp,
  LuCircleChevronDown,
  LuUsers,
  LuHospital,
  LuPill,
  LuBanknote,
  LuClipboardPlus,
  LuSlidersVertical,
  LuUserCog,
  LuWrench,
  LuSquareUser,
  LuUserPlus,
  LuCreditCard,
  LuScrollText,
  LuFileClock,
  LuTablets,
  LuBriefcaseMedical,
  LuReceiptText,
  LuSyringe,
  LuPackage2,
  LuStethoscope,
  LuBookUser,
} from "react-icons/lu";

const menu = [
  {
    name: "Dashboard",
    icon: <LuLayoutDashboard size={18} />,
    href: "/home",
  },
  {
    name: "Patients",
    icon: <LuUsers size={18} />,
    children: [
      {
        name: "Patients Data",
        icon: <LuSquareUser size={18} />,
        href: "/patients",
      },
      {
        name: "Registration",
        icon: <LuUserPlus size={18} />,
        href: "/patients/registration",
      },
    ],
  },
  {
    name: "Visits",
    icon: <LuHospital size={18} />,
    children: [
      {
        name: "Patient Queue",
        icon: <LuBookUser size={18} />,
        href: "/visits",
      },
      {
        name: "Diagnosis Entry",
        icon: <LuStethoscope size={18} />,
        href: "/visits/diagnosis",
      },
      {
        name: "Prescription",
        icon: <LuReceiptText size={18} />,
        href: "/visits/prescription",
      },
    ],
  },
  {
    name: "Pharmacy",
    icon: <LuPill size={18} />,
    children: [
      {
        name: "Prescriptions Queue",
        icon: <LuReceiptText size={18} />,
        href: "/pharmacy",
      },
      {
        name: "Dispense Medication",
        icon: <LuSyringe size={18} />,
        href: "/billing/history",
      },
      {
        name: "Inventory Management",
        icon: <LuPackage2 size={18} />,
        href: "/billing/invoice",
      },
    ],
  },
  {
    name: "Billing",
    icon: <LuBanknote size={18} />,
    children: [
      {
        name: "Patient Bills",
        icon: <LuCreditCard size={18} />,
        href: "/billing",
      },
      {
        name: "Payment History",
        icon: <LuFileClock size={18} />,
        href: "/billing/history",
      },
      {
        name: "Generate Invoice",
        icon: <LuScrollText size={18} />,
        href: "/billing/invoice",
      },
    ],
  },
  {
    name: "Reports",
    icon: <LuClipboardPlus size={18} />,
    children: [
      {
        name: "Visits Report",
        icon: <LuBriefcaseMedical size={18} />,
        href: "/visits/report",
      },
      {
        name: "Medical Report",
        icon: <LuClipboardPlus size={18} />,
        href: "/billing/history",
      },
      {
        name: "Drug Stock Report",
        icon: <LuTablets size={18} />,
        href: "/pharmacy/report",
      },
    ],
  },
  {
    name: "Settings",
    icon: <LuSlidersVertical size={18} />,
    children: [
      {
        name: "User Management",
        icon: <LuUserCog size={18} />,
        href: "/settings/user",
      },
      {
        name: "General Setting",
        icon: <LuWrench size={18} />,
        href: "/settings",
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="flex h-screen p-2 overflow-hidden">
      <aside className="w-[100%] bg-[#012e31] border-r rounded-xl lg:rounded-3xl px-2 lg:px-4 py-6 shadow-sm">
        <div className="flex text-white text-[1.5vw] font-semibold mb-8 justify-center">
          <span className="hidden lg:block">NexaHealth</span>
          <span className="block lg:hidden">🩺</span>
        </div>
        <nav className="space-y-2">
          {menu.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggle(item.name)}
                    className="w-full hover:text-[#ababab] flex items-center justify-between gap-2 px-[1.2vw] lg:px-[8%] py-[1vh] rounded-md lg:rounded-lg text-sm font-medium text-left text-white cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span>{item.icon}</span>
                      <span className="text-[0.9vw] font-medium hidden lg:block">
                        {item.name}
                      </span>
                    </div>
                    {expanded[item.name] ? (
                      <LuCircleChevronUp size={16} />
                    ) : (
                      <LuCircleChevronDown size={16} />
                    )}
                  </button>
                  {expanded[item.name] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                            pathname === sub.href
                              ? "bg-[#d9f175] text-[#012e31]"
                              : "text-white hover:text-[#ababab]"
                          }`}
                        >
                          <span>{sub.icon}</span>
                          <span className="text-[0.9vw] font-medium hidden lg:block">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={`flex items-center gap-[1vw] px-[1.2vw] lg:px-[8%] py-[1vh] rounded-md lg:rounded-lg font-medium ${
                    pathname === item.href
                      ? "bg-[#d9f175] text-[#012e31]"
                      : "text-white hover:text-[#ababab]"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="text-[0.9vw] font-medium hidden lg:block">
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
