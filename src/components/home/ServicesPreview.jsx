import Reveal from "../common/Reveal";

export default function ServicesPreview() {
  const services = [
    {
      title: "Maternity",
      desc: "Antenatal care, delivery, postnatal care, family planning, and maternal counseling.",
      image: "/images/hospital/Maternity.jpeg",
    },
    {
      title: "General Outpatient",
      desc: "Treatment for common illnesses, health consultations, and minor procedures.",
      image: "/images/hospital/outpatient.jpeg",
    },
    {
      title: "Laboratory",
      desc: "Routine tests, diagnostic screenings, and basic medical investigations.",
      image: "/images/hospital/Laboratory.jpeg",
    },
    {
      title: "Pharmacy",
      desc: "Dispensation of quality, affordable medicines and health products.",
      image: "/images/hospital/Pharmacy.png",
    },
    {
      title: "Emergency Care",
      desc: "Basic stabilization and referral support for urgent health conditions.",
      image: "/images/hospital/emergency.jpg",
    },
    {
      title: "Immunization & Child Welfare",
      desc: "Routine immunizations and monitoring of child growth and development.",
      image: "/images/hospital/Immunization .jpeg",
    },
    {
      title: "Surgery",
      desc: "Essential obstetric and general surgical procedures tailored to the community.",
      image: "/images/hospital/Surgery.jpeg",
    },
    {
      title: "Health Education & Outreach",
      desc: "Programs raising awareness about maternal/child health, hygiene, and preventive care.",
      image:
        "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_c9312a73.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="max-w-3xl">
          <Reveal direction="up" delay={100}>
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Services
            </p>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <h2 className="mt-3 text-4xl font-extrabold text-[#031b42]">
              Comprehensive Healthcare
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              At Ngozi Maternity and Hospital Services, we are dedicated to
              providing clinical services to meet the diverse needs of our
              patients. Our team of experienced professionals will ensure you
              receive the highest quality care for your healthcare needs.
            </p>
          </Reveal>
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================== */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              direction="up"
              delay={100 + index * 50}
              duration={700}
            >
              <div
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* =========================
                    ROUNDED IMAGE
                ========================== */}
                <div
                  className="
                    relative
                    w-32
                    h-32
                    rounded-full
                    overflow-hidden
                    shadow-lg
                    border-4
                    border-[#3C83F6]
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                >
                  <img
                    src={service.image} // <--- Dynamic image path used here
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle blue overlay to match theme */}
                  <div className="absolute inset-0 bg-[#3C83F6]/10 mix-blend-multiply"></div>
                </div>

                {/* =========================
                    TITLE
                ========================== */}
                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-[#031b42]
                  "
                >
                  {service.title}
                </h3>

                {/* =========================
                    DESCRIPTION
                ========================== */}
                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                    leading-relaxed
                    max-w-[260px]
                  "
                >
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
