import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Steps from "@/components/Steps";

function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Features />
        <Steps />
        <Plans />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default Home;
