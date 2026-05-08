import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition ${className}`}
    >
      <h3 className="text-lg font-bold text-safari-forest mb-2">
        {title}
      </h3>

      <div className="text-gray-600">{children}</div>
    </div>
  );
}