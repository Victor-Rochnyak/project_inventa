import React from "react";
import Logo from "../../public/Logo.svg";
export default function Sidebar() {
  return (
    <aside className="fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition-300 ease-in-out w-[250px]">
      <div className="flex relative items-center py-5 px-5">
        <Logo className="w-[50px] h-[50px] fill-[white] mr-3.5" />
        <h3 className=" font-bold text-white text-[24px]">
          Inventa
        </h3>
      </div>
    </aside>
  );
}
