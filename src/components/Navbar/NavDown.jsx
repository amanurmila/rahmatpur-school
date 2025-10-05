"use client";

import { useState } from "react";
import { ChevronDown, Home, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  {
    name: "প্রতিষ্ঠান পরিচিতি",
    dropdown: [
      { name: "প্রধান শিক্ষকের বত্তব্য", href: "/principal-message" },
      { name: "সহকারী প্রধান শিক্ষকের বত্তব্য", href: "/assistant-message" },
      { name: "শিক্ষক মন্ডলী", href: "/teachers" },
      { name: "কর্মচারী তালিকা", href: "/staff" },
      { name: "আমাদের সম্পর্কে", href: "/about-us" },
    ],
  },
  {
    name: "শিক্ষার্থীর তথ্য",
    dropdown: [
      { name: "শিক্ষার্থী তালিকা", href: "/students" },
      { name: "ফলাফল", href: "/results" },
      { name: "উপস্থিতি", href: "/attendance" },
    ],
  },
  {
    name: "পাঠদান সংক্রান্ত তথ্য",
    dropdown: [
      { name: "পাঠ পরিকল্পনা", href: "/lesson-plan" },
      { name: "বিষয় ভিত্তিক কার্যক্রম", href: "/subject-activities" },
      { name: "ক্লাস রুটিন", href: "/class-routine" },
    ],
  },
  {
    name: "নোটিশ",
    dropdown: [
      { name: "নোটিশ বোর্ড", href: "/notice-board" },
      { name: "সাম্প্রতিক নোটিশ", href: "/recent-notices" },
    ],
  },
  {
    name: "ফলাফল",
    dropdown: [
      { name: "বার্ষিক ফলাফল", href: "/annual-results" },
      { name: "পরীক্ষা ফলাফল", href: "/exam-results" },
    ],
  },
  {
    name: "কমিটি",
    dropdown: [
      { name: "পরিচালনা কমিটি", href: "/management-committee" },
      { name: "অভিভাবক কমিটি", href: "/parent-committee" },
    ],
  },
  {
    name: "অন্যান্য",
    dropdown: [
      { name: "ছুটির তালিকা", href: "/holiday-list" },
      { name: "ইতিহাস", href: "/history" },
      { name: "নিয়মাবলী", href: "/rules" },
    ],
  },
  { name: "গ্যালারী", href: "/gallery" },
  { name: "যোগাযোগ", href: "/contact" },
  { name: "লগইন", href: "/login" },
];

export default function NavDown() {
  const [active, setActive] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full max-w-6xl mx-auto bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3">
        {/* Home Icon - Left */}
        <Link
          href="/"
          className="flex items-center justify-center w-12 h-12 rounded-sm text-[12px] font-semibold text-gray-800 hover:bg-[#2e6b33] hover:text-white transition-colors duration-150"
        >
          <Home size={24} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-0">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center gap-1 px-2 py-3 text-[14px] font-semibold text-gray-800 hover:bg-[#2e6b33] hover:text-white transition-colors duration-150">
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 text-[13px] font-semibold text-gray-800 hover:bg-[#2e6b33] hover:text-white transition-colors duration-150"
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && active === i && (
                <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg w-56 z-50 rounded-sm">
                  <ul className="py-2">
                    {item.dropdown.map((drop, j) => (
                      <li key={j}>
                        <Link
                          href={drop.href}
                          className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#2e6b33] hover:text-white transition-colors duration-150"
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md border text-gray-700 hover:bg-[#2e6b33] hover:text-white transition">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader>
                <SheetTitle className="text-[#2e6b33] text-lg font-semibold">
                  মেনু তালিকা
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-3">
                {menuItems.map((item, i) => (
                  <div key={i}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === i ? null : i)
                          }
                          className="w-full flex justify-between items-center text-[15px] font-semibold text-gray-800 py-2 border-b border-gray-200"
                        >
                          {item.name}
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              openDropdown === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === i && (
                          <ul className="pl-4 pt-1 space-y-1">
                            {item.dropdown.map((drop, j) => (
                              <li key={j}>
                                <Link
                                  href={drop.href}
                                  className="block px-2 py-1 text-gray-700 hover:bg-[#2e6b33] hover:text-white rounded-md transition"
                                >
                                  {drop.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block w-full text-[15px] font-semibold text-gray-800 py-2 border-b border-gray-200 hover:bg-[#2e6b33] hover:text-white rounded transition"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
