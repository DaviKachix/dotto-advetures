#!/bin/bash

echo "Setting up Dotto Safari UI System..."

mkdir -p components/ui
mkdir -p components/sections

# =========================
# BUTTONS
# =========================
cat > components/ui/Button.tsx << 'EOF'
export function Button({ children, variant = "primary" }) {
  const base = "px-5 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-safari-forest text-white hover:opacity-90",
    accent: "bg-safari-accent text-black hover:opacity-90",
    outline: "border border-safari-forest text-safari-forest"
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
EOF

# =========================
# CARD
# =========================
cat > components/ui/Card.tsx << 'EOF'
export function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-safari-forest mb-2">
        {title}
      </h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
EOF

# =========================
# SECTION WRAPPER
# =========================
cat > components/sections/Section.tsx << 'EOF'
export function Section({ children, className = "" }) {
  return (
    <section className={`py-16 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
EOF

# =========================
# HEADERS
# =========================
cat > components/ui/Heading.tsx << 'EOF'
export function Heading({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-safari-forest">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 mt-2">{subtitle}</p>
      )}
    </div>
  );
}
EOF

# =========================
# HERO SECTION
# =========================
cat > components/sections/Hero.tsx << 'EOF'
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <div className="bg-safari-forest text-white text-center py-24 px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        Dotto African Adventures & Safaris
      </h1>

      <p className="mt-4 text-lg text-gray-200">
        Chase the Wild, Conquer the Sky
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Button variant="accent">Book Adventure</Button>
        <Button variant="outline">Explore Tours</Button>
      </div>
    </div>
  );
}
EOF

# =========================
# GRID SECTION
# =========================
cat > components/sections/Grid.tsx << 'EOF'
export function Grid({ children }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
EOF

echo "UI system created successfully!"
echo "You can now import components from components/ui and components/sections"