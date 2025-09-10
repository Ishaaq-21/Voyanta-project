"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams.toString()]); // runs on every route change

  return null;
}
