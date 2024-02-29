import { ReactNode } from "react";

import GoToTopButton from "@/components/GoToTopButton.tsx";
import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/Header.tsx";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="relative mx-auto flex max-w-screen-xl flex-col md:px-10 md:px-4">
        {children}
      </main>
      <Footer />
      <GoToTopButton />
    </>
  );
};

export default Layout;
