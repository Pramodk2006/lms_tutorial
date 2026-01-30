"use client";

import Image from "next/image";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { UserButton } from "@clerk/nextjs";
export default function Home() {

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}