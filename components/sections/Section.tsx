import { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}