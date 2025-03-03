import Link from "next/link";
import { Button } from "./ui/button";

function Cta() {
  return (
    <section className="bg-gradient-to-tr from-orange-600 to-fuchsia-400">
      <div className="container mx-auto py-8">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <h4 className="text-white uppercase font-extrabold text-3xl max-w-[450px]">
              Meet your new teaching assistant now!
            </h4>
            <p className="text-white/90 max-w-[460px] text-sm">
              Sign up to ClassForge and access a free trial to get you started
              creating your next course
            </p>
          </div>

          <Link href="/sign-up">
            <Button variant="secondary" size="lg" className="px-14!">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
