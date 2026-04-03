"use client";

import { ReactNode, useEffect } from "react";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
