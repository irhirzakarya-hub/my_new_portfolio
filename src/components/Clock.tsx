"use client";

import { useState, useEffect } from "react";
import { Clock as ClockIcon } from "lucide-react";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Using explicit timezone for Casablanca/Rabat
      const formatter = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-muted bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 px-3 py-1.5 rounded-full shadow-inner">
      <ClockIcon className="w-3.5 h-3.5" />
      <span>Rabat &bull; {time} GMT+1</span>
    </div>
  );
}
