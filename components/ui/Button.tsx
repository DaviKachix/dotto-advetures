import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "white";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "px-5 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-safari-forest text-white hover:opacity-90",
    accent: "bg-safari-accent text-black hover:opacity-90",
    outline: "border border-safari-forest text-safari-forest",
    white:
      "bg-white text-safari-forest border border-white/20 hover:bg-white/90",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}