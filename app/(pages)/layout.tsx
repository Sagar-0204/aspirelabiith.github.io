import { ReactNode } from "react";
import { PageWrapper } from "@/components/page-wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <PageWrapper>{children}</PageWrapper>;
}
