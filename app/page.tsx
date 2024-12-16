"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7-xl w-full">
      <FloatingNav 
        navItems= {[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'Trips', link: '/trips', icon: <ImAirplane />}
        ]}
      />
      <Hero />
      <Grid>

      </Grid>
    </div>
   </main>
  );
}
