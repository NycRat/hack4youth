import { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-black underline">{children}</h1>;
}
