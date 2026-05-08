export function Grid({ children }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
