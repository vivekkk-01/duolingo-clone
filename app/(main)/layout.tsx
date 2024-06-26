import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:block" />
      <main className="h-full lg:pl-[256px] pt-[50px] lg:pt-0">
        <div className="h-full max-w-[1056px] mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
