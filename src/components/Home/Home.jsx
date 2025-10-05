"use client";

import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  User,
  Book,
  ClipboardList,
  GraduationCap,
  Users,
  Award,
  Plus,
} from "lucide-react";

export default function HomePage() {
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#1C8C3F] rounded-full shadow-md p-2 transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#1C8C3F] rounded-full shadow-md p-2 transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 mt-6 w-full max-w-6xl mx-auto">
        <div className="lg:col-span-3 space-y-6">
          <div className="w-full lg:w-4/5 mx-auto mt-4 rounded-lg overflow-hidden shadow relative">
            <Slider {...sliderSettings}>
              {[
                "/images/slider-1.jpg",
                "/images/slider-2.jpg",
                "/images/slider-3.jpg",
              ].map((src, i) => (
                <div key={i} className="relative">
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center text-lg py-2">
                    প্রধান শিক্ষকের কক্ষ
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-full lg:w-4/5 mx-auto bg-[#1C8C3F] text-white font-semibold flex items-center mt-3 rounded">
            <span className="bg-[#166E31] px-3 py-2">শিরোনাম:</span>
            <Marquee speed={60} pauseOnHover gradient={false} className="py-2">
              ৯ম ও ১০ম শ্রেণির শিক্ষার্থীদের প্রাক-নির্বাচনী পরীক্ষা আগামী
              ০১/১১/২০২৫ইং তারিখ হতে আরম্ভ হবে।
            </Marquee>
          </div>
          <Card className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-gray-300 rounded-md shadow-md p-6">
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/4 mb-4 md:mb-0">
              <ClipboardList className="w-28 h-28 text-[#1C8C3F]" />
            </div>

            <div className="md:w-3/4 w-full">
              <h2 className="text-2xl font-bold text-[#1C8C3F] mb-2">
                নোটিশ বোর্ড
              </h2>

              <ul className="space-y-2 text-[18px] text-[#001A72] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1C8C3F] mt-1">▸</span>
                  <span>Eid-E Miladunnabi Sa. 2025 Programm List</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1C8C3F] mt-1">▸</span>
                  <span>প্রত‌্যাহিক সমাবেশ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1C8C3F] mt-1">▸</span>
                  <span>
                    অর্ধ বার্ষিক পরীক্ষা ২০২৫ এর উত্তরপত্র জমাদান সংক্রান্ত।
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1C8C3F] mt-1">▸</span>
                  <span>
                    MPO EFT সংক্রান্তঃ মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তরীয়
                    নির্দেশনা।
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1C8C3F] mt-1">▸</span>
                  <span>
                    উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের শিক্ষা প্রতিষ্ঠানের
                    পরিবর্তন/ট্রান্সফার সংক্রান্ত প্রস্তাব।
                  </span>
                </li>
              </ul>

              <div className="flex justify-end mt-6">
                <Button className="bg-[#1C8C3F] text-white hover:bg-[#166d33] text-lg font-semibold rounded-md px-6 py-2 shadow">
                  সকল নোটিশ
                </Button>
              </div>
            </div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-md border-t-4 border-[#1C8C3F]">
              <CardHeader className="flex flex-col items-center text-[#1C8C3F]">
                <GraduationCap className="w-10 h-10" />
                <CardTitle className="text-xl font-bold mt-2">
                  Admission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1 list-disc ml-6">
                  <li>ভর্তি বিজ্ঞপ্তি</li>
                  <li>অনলাইন আবেদন</li>
                  <li>অফলাইন ভর্তি ফরম</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-[#1C8C3F]">
              <CardHeader className="flex flex-col items-center text-[#1C8C3F]">
                <Book className="w-10 h-10" />
                <CardTitle className="text-xl font-bold mt-2">
                  পাঠ্যসূচক
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1 list-disc ml-6">
                  <li>৬ষ্ঠ শ্রেণি ও ৭ম শ্রেণি</li>
                  <li>৮ম শ্রেণি</li>
                  <li>৯ম ও ১০ম শ্রেণি</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-md border-t-4 border-[#1C8C3F]">
              <CardHeader className="flex flex-col items-center text-[#1C8C3F]">
                <Users className="w-10 h-10" />
                <CardTitle className="text-xl font-bold mt-2">জনবল</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1 list-disc ml-6">
                  <li>শিক্ষকমন্ডলী</li>
                  <li>পরিচালনা কমিটি</li>
                  <li>কর্মচারী</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-[#1C8C3F]">
              <CardHeader className="flex flex-col items-center text-[#1C8C3F]">
                <Award className="w-10 h-10" />
                <CardTitle className="text-xl font-bold mt-2">
                  স্বীকৃতি / অনুমোদন
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1 list-disc ml-6">
                  <li>পাঠদান / শাখা / বিভাগ অনুমোদন</li>
                  <li>স্বীকৃতি নবায়ন</li>
                  <li>কমিটি অনুমোদন</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md border-t-4 border-[#1C8C3F]">
              <CardHeader className="flex flex-col items-center text-[#1C8C3F]">
                <Plus className="w-10 h-10" />
                <CardTitle className="text-xl font-bold mt-2">
                  অন্যান্য
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1 list-disc ml-6">
                  <li>শিক্ষার্থীর তথ্য</li>
                  <li>তথ্য কর্মকর্তা</li>
                  <li>অভিযোগ ও প্রতিকার</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="text-center shadow-md border-t-4 border-[#1C8C3F]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-[#1C8C3F] text-lg font-semibold">
                <User className="w-5 h-5" /> প্রধান শিক্ষক
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/principal.jpg"
                alt="Principal"
                className="w-40 h-48 mx-auto object-cover rounded-lg shadow"
              />
              <p className="mt-2 text-gray-900 font-semibold">
                বাদল চন্দ্র বর্মণ
              </p>
              <Button className="mt-3 bg-[#1C8C3F] hover:bg-green-800 text-white w-full">
                বিস্তারিত
              </Button>
              <Button
                variant="outline"
                className="mt-2 border-[#1C8C3F] text-[#1C8C3F] hover:bg-green-50 w-full"
              >
                এডমিন প্যানেল
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md border-t-4 border-[#1C8C3F]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-[#1C8C3F] text-lg font-semibold">
                <MapPin className="w-5 h-5" /> মানচিত্র
              </CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.9184664961374!2d88.915!3d25.682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf4d6b9b9df77%3A0x7f4dc706a5b8d37c!2sRahmatpur%20Adarsha%20Girls%20High%20School!5e0!3m2!1sen!2sbd!4v1699378599999!5m2!1sen!2sbd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
