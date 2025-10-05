"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full max-w-6xl mx-auto text-white">
      {/* Top Right English Button */}
      <div className="text-right mb-[5px] ">
        <Link
          href="/en"
          className="bg-[#2e6b33] rounded-md  hover:bg-green-950 text-white text-sm px-3 py-2  "
        >
          English
        </Link>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl bg-[#2e6b33] mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-4">
        {/* Left Side */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <Image
            src="/images/logo.png" // put your school logo here
            alt="School Logo"
            width={80}
            height={80}
            className="object-contain"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold drop-shadow-md whitespace-nowrap">
              রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয়
            </h1>
            <p className="text-sm md:text-base font-medium whitespace-nowrap">
              শিক্ষা জাতির মেরুদণ্ড, শিক্ষা হোক সবার জন্য
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right mt-3 md:mt-0 leading-snug">
          <p className="text-sm md:text-base">
            ইআইআইএন: ১২১১২৬; এমপিও কোড: ৮৭০২০৯১২০৪
          </p>
          <p className="text-sm md:text-base">
            দিনাজপুর বোর্ড কোড: ৮৯৯১; কারিগরি বোর্ড কোড: ১৮১৭৪
          </p>
        </div>
      </div>
    </header>
  );
}
