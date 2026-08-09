import { Heart, UserRound, Clock3, Cpu, ShieldCheck } from "lucide-react";

import Reveal from "../common/Reveal";

export default function Features() {
  const features = [
    {
      icon: Heart,
      title: "Quality Care",
      text: "We provide the highest quality healthcare with compassion.",
    },
    {
      icon: UserRound,
      title: "Expert Doctors",
      text: "Experienced doctors dedicated to your well-being.",
    },
    {
      icon: Clock3,
      title: "24/7 Service",
      text: "We are available around the clock for emergency services.",
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      text: "Modern technology for accurate diagnosis and treatment.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      text: "Your health information is protected and secure.",
    },
  ];

  return (
    <section
      className="
        relative
        z-20

        -mt-10
        sm:-mt-12
        lg:-mt-10

        px-4
        sm:px-6
        lg:px-8

        pb-8
        sm:pb-10
        bg-[#d3e3ff]
      "
    >
      {/* =========================================
          CLEAN FEATURES GRID WITH SPACING
          (Added padding so the light blue background shows around the cards)
      ========================================== */}
      <div
        className="
          max-w-7xl
          mx-auto

          bg-[#3C83F6]/5

          p-3
          sm:p-4
          lg:p-6

          rounded-2xl

          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5

          gap-2
          sm:gap-3
          lg:gap-4
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Reveal
              key={feature.title}
              direction="up"
              delay={index * 100}
              duration={700}
              className={`
                ${
                  index === 4
                    ? "col-span-2 md:col-span-1 flex justify-center"
                    : ""
                }
              `}
            >
              <div
                className={`
                  h-full
                  min-h-[185px]
                  sm:min-h-[200px]

                  w-full

                  ${index === 4 ? "max-w-[280px] md:max-w-none" : ""}

                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center

                  px-3
                  sm:px-5
                  py-6

                  bg-white

                  rounded-xl

                  shadow-sm

                  hover:shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-1
                `}
              >
                {/* =================================
                    ICON
                ================================== */}
                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14

                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-[#3C83F6]/10

                    text-[#3C83F6]

                    mb-3
                    sm:mb-4

                    transition-all
                    duration-300

                    hover:bg-[#3C83F6]/15
                    hover:scale-110
                  "
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>

                {/* =================================
                    TITLE
                ================================== */}
                <h3
                  className="
                    text-sm
                    sm:text-base

                    font-bold

                    text-[#12004d]
                  "
                >
                  {feature.title}
                </h3>

                {/* =================================
                    DESCRIPTION
                ================================== */}
                <p
                  className="
                    mt-2

                    max-w-[190px]

                    text-[11px]
                    sm:text-xs
                    md:text-sm

                    leading-5

                    text-slate-500
                  "
                >
                  {feature.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
