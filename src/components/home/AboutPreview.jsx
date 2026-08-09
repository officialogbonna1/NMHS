import Reveal from "../common/Reveal";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* =========================
              IMAGE - SLIDES FROM LEFT
          ========================== */}

          <Reveal direction="left" delay={100} duration={800}>
            <div className="relative group sticky top-24">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/hospital/buidingfront.png"
                  alt="NMHS Hospital"
                  className="
                    w-full
                    h-[320px]
                    sm:h-[400px]
                    lg:h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031b42]/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative element */}
              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  w-24
                  h-24
                  rounded-2xl
                  bg-[#3C83F6]
                  -z-10
                "
              ></div>

              {/* Small experience badge */}
              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  bg-white/95
                  backdrop-blur-sm
                  rounded-2xl
                  shadow-xl
                  px-5
                  py-4
                  border
                  border-slate-100/50
                "
              >
                <p className="text-2xl font-extrabold text-[#031b42]">1956</p>
                <p className="text-xs font-semibold text-slate-500">
                  Founded Legacy
                </p>
              </div>
            </div>
          </Reveal>

          {/* =========================
              TEXT CONTENT - SLIDES RIGHT
          ========================== */}

          <div>
            <Reveal direction="right" delay={100}>
              <p className="text-blue-600 font-semibold uppercase tracking-widest">
                About NMHS
              </p>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#031b42] leading-tight">
                A Legacy of Compassionate Care
              </h2>
            </Reveal>

            {/* 
              ===============================
              THE STORY - PART 1
              Featuring a left blue accent bar for a high-end feel.
              ===============================
            */}
            <Reveal direction="right" delay={300}>
              <div className="mt-8 border-l-4 border-[#3C83F6] pl-5 md:pl-6">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Ngozi Maternity and Hospital Services, Inc. is located in
                  Owerrinta, Isiala Ngwa South LGA, Abia State, Nigeria.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Originally established in{" "}
                  <strong className="text-[#031b42]">1956</strong> by the late
                  Mrs. Regina Erondu, the facility was a cornerstone of maternal
                  care. Following her passing in 1994, the community experienced
                  a significant gap in accessible maternal and pediatric
                  services.
                </p>
              </div>
            </Reveal>

            {/* 
              ===============================
              THE STORY - PART 2
              Split into two small columns to make it scannable.
              ===============================
            */}
            <Reveal direction="right" delay={400}>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Sub-Block */}
                <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#3C83F6] text-sm font-extrabold">
                      ✦
                    </span>
                    <span className="text-xs font-bold text-[#031b42] uppercase tracking-wider">
                      The Founders
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    US-based healthcare providers{" "}
                    <strong className="text-[#031b42]">Dr. Ngozi Erondu</strong>{" "}
                    and{" "}
                    <strong className="text-[#031b42]">
                      Dr. (Mrs) Ngozi Ogbonna-Erondu
                    </strong>{" "}
                    recognized the urgent need to restore quality care to the
                    region.
                  </p>
                </div>

                {/* Right Sub-Block */}
                <div className="bg-slate-50 rounded-xl p-5 md:p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#3C83F6] text-sm font-extrabold">
                      ✦
                    </span>
                    <span className="text-xs font-bold text-[#031b42] uppercase tracking-wider">
                      Reopened in 2022
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Alongside their four children
                    <strong className="text-[#031b42]">
                      Dr. Mgbechi, Dr. Chioma, Dr. Alozie, and Dr. Ihuoma Erondu
                    </strong>
                    they reopened and expanded the facility into a full-fledged
                    hospital.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 
              ===============================
              THE STORY - PART 3
              The closing mission statement.
              ===============================
            */}
            <Reveal direction="right" delay={500}>
              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-slate-600 leading-relaxed italic">
                  "Through our unwavering support of medical missions across
                  Abia State, we are dedicated to transforming this hospital
                  into a beacon of
                  <span className="text-[#031b42] font-semibold not-italic">
                    {" "}
                    quality, affordable healthcare{" "}
                  </span>
                  for the entire local government area and beyond."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
