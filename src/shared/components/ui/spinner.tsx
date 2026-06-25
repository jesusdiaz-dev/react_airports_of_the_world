import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeClasses = {
  sm: "h-5 w-5 border-2",
  md: "h-9 w-9 border-[3px]",
  lg: "h-14 w-14 border-4",
};

const Spinner: React.FC<SpinnerProps> = ({ size = "md", label = "Loading…" }) => {
  return (
    <div role="status" className="flex flex-col items-center gap-3">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-sky-200 border-t-sky-500`}
      />
      <span className="text-sm text-sky-600 font-medium tracking-wide">{label}</span>
    </div>
  );
};

export default Spinner;
