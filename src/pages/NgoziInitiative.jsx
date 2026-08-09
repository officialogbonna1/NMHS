import Reveal from "../components/common/Reveal";

export default function NgoziInitiative() {
  return (
    <main className="bg-white min-h-screen">
      {/* =========================================
          ORANGE BANNER (Matches the screenshot)
      ========================================== */}
      <div className="w-full bg-[#F95C19] py-4 text-center">
        <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide">
          Partner Foundation (NGO)
        </h2>
      </div>

      {/* =========================================
          BRANDING & TITLE SECTION
      ========================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Title */}
            <Reveal direction="left" delay={100}>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#031b42] leading-tight">
                  Ngozi Maternity and Healthcare{" "}
                  <br className="hidden md:block" />
                  Initiative
                </h1>
              </div>
            </Reveal>

            {/* Right: Logo Placeholder */}
            <Reveal direction="right" delay={200}>
              <div className="flex justify-center md:justify-end items-center">
                <div className="w-48 md:w-56">
                  {/* Replace this src with your actual NMHI logo if you have it */}
                  <img
                    src="/images/hospital/WhatsApp-Image-2025-05-18-at-16.31.25_d7edf689-e1748623819589.jpg"
                    alt="NMHI Logo"
                    className="w-full h-auto object-contain"
                    // If you don't have the image yet, this fallback text will show:
                    // onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerText = 'NMHI LOGO'; }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          DARK BLUE ABOUT US SECTION 
      ========================================== */}
      <section className="relative overflow-hidden bg-[#1C2A4F] py-16 md:py-24">
        {/* Subtle background texture/gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A4F] to-[#24315A] opacity-90"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <Reveal direction="left" delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10">
                <img
                  src="/images/hospital/nmhsbuilding.png"
                  alt="Ngozi Maternity and Health Care Initiative"
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>
            </Reveal>

            {/* Text Content */}
            <Reveal direction="right" delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  ABOUT US
                </h2>

                <p className="text-blue-100 leading-relaxed mb-6">
                  Ngozi Maternity and Healthcare Initiative is a non-profit
                  foundation that partners with Ngozi Maternity and Hospital
                  Services, to advance maternal and child health, promote
                  healthcare access, and empower communities in rural and
                  underserved areas of Abia State and beyond.
                </p>

                <p className="text-blue-100/80 leading-relaxed">
                  Founded on the core values of compassion, service, and equity,
                  our initiative exists to reach those most in need of essential
                  medical care especially pregnant women, newborns, and
                  vulnerable families irrespective of income, social status, or
                  location.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          MISSION & VISION SECTION
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <Reveal direction="up" delay={100}>
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm h-full">
                <div className="w-12 h-12 rounded-full bg-[#3C83F6]/10 flex items-center justify-center text-[#3C83F6] mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[#031b42] mb-3">
                  Mission Statement
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To deliver high-quality, accessible, and professional
                  healthcare services to the public—particularly in Abia State
                  and Nigeria—through innovative medical interventions, capacity
                  building, and the provision of essential health infrastructure
                  and supplies.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal direction="up" delay={200}>
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm h-full">
                <div className="w-12 h-12 rounded-full bg-[#3C83F6]/10 flex items-center justify-center text-[#3C83F6] mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[#031b42] mb-3">
                  Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  A healthier and empowered population in Nigeria and beyond,
                  supported by equitable access to comprehensive,
                  community-centered healthcare and education.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          AREAS OF FOCUS
      ========================================== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <p className="text-[#3C83F6] font-semibold uppercase tracking-widest">
                Our Focus
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#031b42]">
                Areas of Focus
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Healthcare Service Delivery",
                desc: "Provision of physical and virtual healthcare services including maternity, surgical, diagnostic, and pharmaceutical care.",
              },
              {
                num: "2",
                title: "Capacity Building & Training",
                desc: "Training healthcare workers and stakeholders to enhance effective service delivery.",
              },
              {
                num: "3",
                title: "Health Infrastructure Development",
                desc: "Establishment and management of hospitals, diagnostic centers, and care facilities.",
              },
              {
                num: "4",
                title: "Medical Supply Chain",
                desc: "Procurement, distribution, and manufacture of essential medical equipment and pharmaceuticals.",
              },
              {
                num: "5",
                title: "Public Health Education",
                desc: "Community sensitization and mass education on healthcare awareness and preventive practices.",
              },
            ].map((item, index) => (
              <Reveal key={item.num} direction="up" delay={150 + index * 100}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3C83F6] text-white text-sm font-bold">
                      {item.num}
                    </span>
                    <h3 className="text-lg font-bold text-[#031b42]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <div className="rounded-3xl bg-[#031b42] p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Together, we can make a difference
              </h2>

              <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                Learn more about our healthcare initiatives and how we are
                working to support healthier communities.
              </p>

              <a
                href="/#contact"
                className="inline-flex mt-8 px-7 py-3 rounded-xl bg-[#3C83F6] text-white font-bold hover:bg-[#82AEFB] transition"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
