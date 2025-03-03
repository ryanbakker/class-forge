import { ReactNode } from "react";
import ClientWrapper from "../../components/providers/ClientWrapper";
import { Metadata } from "next";
import { BsFire } from "react-icons/bs";

interface AuthLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "BoostCreator - Login",
  description: "Boost your creative potential today!",
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <body
      className="bg-gradient-to-tr from-orange-600 to-fuchsia-400 overflow-hidden min-h-screen flex items-center justify-center"
      suppressHydrationWarning
    >
      <ClientWrapper>
        <main className="signContainer">
          <section className="main">
            <div className=" py-12 w-[95vw] max-w-[450px] flex flex-col items-center drop-shadow-xl relative">
              <div className="bg-white/90 rounded-lg h-full w-full absolute -z-10 top-0 left-0  shadow-xl" />
              <div className="flex items-center gap-1 pb-4">
                <BsFire className="text-orange-600 h-7 w-7" />
                <h2 className="text-2xl font-extrabold text-orange-600">
                  ClassForge
                </h2>
              </div>

              <p className="pb-8 text-neutral-500 text-center text-sm">
                Sign in and kickstart your course today!
              </p>

              {children}
            </div>
          </section>
        </main>
      </ClientWrapper>
    </body>
  );
}

export default AuthLayout;
