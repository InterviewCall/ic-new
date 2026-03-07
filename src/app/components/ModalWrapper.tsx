"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";


export default function ModalWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const portalRoot = document.getElementById("portal-root");

  return portalRoot ? createPortal(children, portalRoot) : null;
}