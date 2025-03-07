import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SchematicComponent from "@/components/providers/SchematicComponent";

function ManagePlan() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden p-6 min-h-[83vh]">
        <div className="container! mx-4 md:mx-auto">
          <h3 className="text-4xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-fuchsia-600 underline underline-offset-6 decoration-orange-600 decoration-2">
            Manage Plan
          </h3>

          <p className="text-neutral-600">
            Manage your billing and subscriptions here.
          </p>
        </div>

        <div className="container mx-auto mt-10 mb-5">
          <SchematicComponent componentId="cmpn_EjUMsYzN4yc" />
        </div>
      </main>
      <div className="mt-auto bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default ManagePlan;
