export function FormError({ children }: { children: React.ReactNode }) {
  return (
    <p className="fade-in border-l-2 p-2 font-bold bg-red-100 border-red-600 text-red-600 text-sm mb-5">
      {children}
    </p>
  );
}
