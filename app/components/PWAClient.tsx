"use client";

import { useEffect } from "react";
import InstallPrompt from "./InstallPrompt";

export default function PWAClient() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <InstallPrompt />;
}
