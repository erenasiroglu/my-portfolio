import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={className}>
      <Header />
      <main className="container mx-auto pt-24">{children}</main>
    </div>
  );
}
