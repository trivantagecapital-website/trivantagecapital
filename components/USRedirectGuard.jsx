"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useResidency } from "@/hooks/useResidency";

const ALLOWED_FOR_US = ["/", "/about/our-team", "/about/our-advisors", "/login"];

function isAllowedForUS(pathname) {
  if (ALLOWED_FOR_US.includes(pathname)) return true;
  if (pathname.startsWith("/about/") && pathname !== "/about") return true;
  return false;
}

export default function USRedirectGuard({ children }) {
  const { isUS, isLoaded } = useResidency();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isUS && !isAllowedForUS(pathname)) {
      router.replace("/");
    }
  }, [isUS, isLoaded, pathname]);

  if (!isLoaded) return null;
  if (isUS && !isAllowedForUS(pathname)) return null;
  return children;
}
