"use client";
import BaseLayout from "@/components/base";
import SearchLayout from "@/components/search";
import SideBarLayout from "@/components/sidebar";

export default function Home(): JSX.Element {
  return (
    <BaseLayout>
      <SideBarLayout />
      <SearchLayout />
    </BaseLayout>
  );
}
