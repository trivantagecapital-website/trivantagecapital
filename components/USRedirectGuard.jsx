"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResidency } from "@/hooks/useResidency";

const ALLOWED_FOR_US = ["/", "/about/our-team", "/about/our-advisors", "/login"];

export default function USRedirectGuard({ children }) {
  const { isUS, isLoaded } = useResidency();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isUS && !ALLOWED_FOR_US.includes(pathname)) {
      router.replace("/");
    }
  }, [isUS, isLoaded, pathname]);

  if (!isLoaded) return null;
  if (isUS && !ALLOWED_FOR_US.includes(pathname)) return null;
  return children;
}
