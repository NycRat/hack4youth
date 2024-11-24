import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function PageTitle({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <h1 className={cn("text-3xl font-medium text-center", className)}>
      {children}
    </h1>
  );
}
