import { FaAlignJustify } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { IoStorefront } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const features = [
  {
    title: "Content",
    description:
      "Custom course content tailored to your subject, enriched with your ideas for a high-level teaching experience.",
    icon: FaAlignJustify,
  },
  {
    title: "Targeting",
    description:
      "Define your audience by age, language, and difficulty for course content and homework.",
    icon: ImTarget,
  },
  {
    title: "Marketing",
    description:
      "Boost your course with marketing support, including thumbnails, descriptions, and presentation tips.",
    icon: IoStorefront,
  },
  {
    title: "Homework",
    description:
      "Generate AI-powered homework based on your course, with adjustable difficulty and goals.",
    icon: FaUser,
  },
  {
    title: "Styles",
    description:
      "Customize content with images, scripts, bullet points, and tone options like formal, informal, or humorous.",
    icon: FaPaintBrush,
  },
  {
    title: "Goals",
    description:
      "Set clear objectives to fine-tune AI support for your teaching needs.",
    icon: TbTargetArrow,
  },
];

function Features() {
  return (
    <section className="py-20 shadow-xl">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold pb-8 bg-clip-text text-transparent bg-gradient-to-tr from-orange-600 to-fuchsia-600 underline underline-offset-6 decoration-orange-600 decoration-2">
          Features
        </h3>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex cursor-default">
                <div className="bg-gradient-to-tr z-50 from-orange-200/20 to-fuchsia-200/20 p-5 rounded-lg hover:scale-[1.01] hover:from-orange-200/60 hover:to-fuchsia-200/60 transition-all">
                  <div className="flex flex-row gap-3 items-end pb-3">
                    <span className="bg-fuchsia-300/20 p-2.5 rounded-lg flex items-center justify-center border border-fuchsia-300/30">
                      <Icon className="h-5 w-5 text-fuchsia-800" />
                    </span>
                    <h4 className="text-lg font-semibold text-fuchsia-900">
                      {feature.title}
                    </h4>
                  </div>

                  <p className="text-sm text-black/70">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
