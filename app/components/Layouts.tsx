import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${className}`}
    >
      <main className="container mx-auto pt-24">{children}</main>
    </div>
  );
}
