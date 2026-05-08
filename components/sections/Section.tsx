export function Section({ children, className = "" }) {
  return (
    <section className={`py-16 px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
