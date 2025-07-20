"use client";

import { getPageTitle } from "@/utils";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { LuBell, LuChevronDown, LuMenu, LuSearch } from "react-icons/lu";

export default function Navbar() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  return (
    <div className="flex justify-between bg-white p-6 py-3 shadow-md rounded-2xl">
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="block md:hidden mr-4 cursor-pointer">
          <LuMenu className="text-3xl" />
        </div>
        <div>
          <h1 className="font-semibold text-[2vw] md:text-[2.2vw] lg:text-[1.2vw] leading-snug text-[#1f2322]">
            {title}
          </h1>
          <p className="text-[1.2vw] lg:text-[0.82vw] font-medium text-[#a2a4a3] leading-snug">
            Instant Access to Quality Medical Care
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex items-center py-2 px-3 border-2 border-[#a2a4a3] rounded-3xl">
          <LuSearch className="inline mr-2 text-[#a2a4a3]" />
          <input
            type="text"
            name=""
            id=""
            className="border-none focus:outline-none w-[20vw]"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center p-3 border-2 border-[#a2a4a3] rounded-3xl cursor-pointer">
          <LuBell className="inline text-[#a2a4a3]" />
        </div>
        <div className="flex items-center px-1 md:px-4 py-1 border-2 border-[#a2a4a3] rounded-3xl cursor-pointer">
          <FaUserCircle className="text-[#012e31] text-3xl md:mr-3" />
          <div className="items-start hidden md:block">
            <h1 className="text-sm text-[#1f2322] font-semibold">
              Mateus Arga
            </h1>
            <p className="text-xs text-[#a2a4a3] font-medium">Admin</p>
          </div>
          <LuChevronDown className="text-[#1f2322] text-xl ml-3 hidden md:block" />
        </div>
      </div>
    </div>
  );
}
