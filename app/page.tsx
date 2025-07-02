import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import Pricing from "@/components/landing/Pricing";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main>
        <Features />

        <div className="container px-4 md:px-6 mx-auto">
          <Separator className="my-12" />
        </div>

        <Pricing />

        {/* About */}

        {/* Contact */}
      </main>

      {/* Footer */}
    </div>
  );
}
