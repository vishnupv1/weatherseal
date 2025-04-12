// src/components/ui/button.tsx
export const Button = ({
  children,
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`px-6 py-2 rounded-lg focus:outline-none ${className}`}>
      {children}
    </button>
  );
};
