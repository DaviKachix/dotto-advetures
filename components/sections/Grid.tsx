import { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}