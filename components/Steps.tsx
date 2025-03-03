import { AlignCenter, BookOpenCheck, Brain } from "lucide-react";

const steps = [
  {
    icon: AlignCenter,
    title: "Input Your Criteria",
    description: "Specify your subject and target audience requirements.",
  },
  {
    icon: Brain,
    title: "AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your criteria.",
  },
  {
    icon: BookOpenCheck,
    title: "Receive Lesson",
    description: "Get a draft lesson and homework to get you started.",
  },
];

function Steps() {
  return (
    <section className="bg-[#eee] dark:bg-neutral-900 py-20">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold pb-8 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-fuchsia-600 underline underline-offset-6 decoration-orange-600 decoration-2 text-center">
          Meet Your AI Agent
        </h3>

        {/* Steps Container */}
        <div className="flex flex-col gap-12 py-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastStep = index === steps.length - 1;

            return (
              <div
                key={index}
                className="flex flex-col relative items-center md:flex-row group cursor-default"
              >
                {/* Step Content */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between w-full">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* Icon */}
                    <div className="rounded-full bg-gradient-to-tr from-orange-600 to-fuchsia-400 p-3">
                      <Icon className="text-white" />
                    </div>

                    {/* Title & Description */}
                    <h5 className="text-4xl text-center md:text-left font-[950] uppercase text-neutral-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-orange-600 group-hover:to-fuchsia-400 group-hover:transition-all max-w-[90vw] dark:text-neutral-400 dark:group-hover:text-transparent">
                      {step.title}
                    </h5>
                  </div>
                  <p className="text-sm text-neutral-500 max-w-[250px] md:text-end group-hover:text-neutral-800 group-hover:transition-all text-center dark:group-hover:text-neutral-300">
                    {step.description}
                  </p>

                  {/* Horizontal Line (Only Between Steps) */}
                </div>
                {!isLastStep && (
                  <div className="flex-grow w-[90vw] md:w-full top-55 md:top-18 md:left-[-12px] h-[2px] bg-gradient-to-r from-orange-600 to-fuchsia-400 mx-4 absolute rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Steps;
