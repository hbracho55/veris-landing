"use client";
import type { ReactNode } from "react";
import { useDemoModal } from "./DemoModal";

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export default function DemoTrigger({ children, className, style, onClick }: Props) {
  const { open } = useDemoModal();
  return (
    <button
      type="button"
      onClick={() => { open(); onClick?.(); }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
