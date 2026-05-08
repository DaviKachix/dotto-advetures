import { ReactNode } from "react";

type HeadingProps = {
  title: string;
  subtitle?: ReactNode;
  className?: string;
};

export function Heading({ title, subtitle, className = "" }: HeadingProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-safari-forest">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}