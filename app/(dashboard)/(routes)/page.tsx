"use client";

import Image from "next/image";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <p> this is a protected page
        
      </p>
    </div>
  );
}