"use client";

import ReduxProvider from "@/lib/redux/provider";
import { UseMotionAnimationSync } from "../components/AnimationMotionSync";


export default function Providers({
  
  children,
}: {
  children: React.ReactNode;
}) {

  return <ReduxProvider> <UseMotionAnimationSync/> {children}</ReduxProvider>;
}
