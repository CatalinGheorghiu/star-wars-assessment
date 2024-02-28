import { ReactNode } from "react";

import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/Header.tsx";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="relative mx-auto flex max-w-screen-xl flex-col p-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
