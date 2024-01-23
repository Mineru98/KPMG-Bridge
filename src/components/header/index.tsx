"use client";
import Link from "next/link";
import { UserCircle, Share } from "lucide-react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import useSettingStore from "@/stores/setting/store";

export function Header(props: any): JSX.Element {
  const { activeBar, setActiveBar } = useSettingStore();
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/library":
        setActiveBar("라이브러리");
        break;
      case "/search":
      default:
        setActiveBar("검색");
        break;
    }
  }, [pathname, setActiveBar]);

  return (
    <header className="flex h-[64px] border-b px-8">
      <div className="basis-[196px] flex justify-center items-center">
        <div className="basis-[64px] flex justify-center items-center cursor-pointer">
          =
        </div>
        <div className="flex-1 flex justify-center items-center text-[#4B5469] cursor-pointer">
          <Link href="/">KPMG BRIDGE</Link>
        </div>
      </div>
      <div className="flex-1 flex justify-start">
        <div
          className={`w-36 flex justify-center items-center transition-colors cursor-pointer ${
            activeBar === "검색"
              ? "text-indigo-600 font-bold"
              : "text-[#4B5469] hover:text-indigo-400"
          }`}
        >
          <Link href="/">검색</Link>
        </div>
        <div
          className={`w-36 flex justify-center items-center transition-colors cursor-pointer ${
            activeBar === "라이브러리"
              ? "text-indigo-600 font-bold"
              : "text-[#4B5469] hover:text-indigo-400"
          }`}
        >
          <Link href="/library">라이브러리</Link>
        </div>
      </div>
      <div className="basis-[256px] flex justify-end">
        <div className="w-12 flex justify-center items-center text-[#4B5469] cursor-pointer">
          <Link href="/">
            <Share className="w-6 text-muted-foreground" />
          </Link>
        </div>
        <div className="w-12 flex justify-center items-center text-[#4B5469] cursor-pointer">
          <Link href="/">
            <UserCircle className="w-6 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
}
