"use client";

import ReduxProvider from "@/lib/redux/provider";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
