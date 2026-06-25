import { Spinner } from "@/components/ui/spinner";
import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeClasses = {
  sm: "8",
  md: "10",
  lg: "14",
};

const CustomSpinner: React.FC<SpinnerProps> = ({ size = "md", label = "Loading…" }) => {
  return (
    <div role="status" className="flex flex-col items-center gap-3">
      <Spinner  className={`size-${sizeClasses[size]}`} />
      <span className="text-sm text-sky-600 font-medium tracking-wide">{label}</span>
    </div>
  );
};

export default CustomSpinner;
