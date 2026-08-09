import Reveal from "../common/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* =========================================
          HERO IMAGE
          KEEP YOUR EXISTING IMAGE SRC UNCHANGED
      ========================================== */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          z-0
          
          h-[42vh]
          min-h-[280px]
          max-h-[500px]

          lg:h-full
          lg:min-h-0
          lg:max-h-none
        "
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/hospital/hero_main.png`}
          alt="Ngozi Maternity and Hospital Services"
          className="
    w-full
    h-full
    object-contain
    object-top
    lg:object-cover
    lg:object-center
    bg-white
  "
        />
      </div>

      {/* =========================================
          DESKTOP ONLY
          Very subtle readability gradient.
          No blur.
      ========================================== */}
      <div
        className="
          hidden
          lg:block
          absolute
          inset-0
          z-[1]
          pointer-events-none
          bg-gradient-to-r
          from-white/75
          via-white/20
          to-transparent
        "
      />

      {/* =========================================
          MOBILE CONTENT BACKGROUND
          
          Gives the text a clean professional
          white section underneath the image.
      ========================================== */}
      <div
        className="
          absolute
          top-[42vh]
          bottom-0
          left-0
          right-0
          z-[1]
          bg-white

          lg:hidden
        "
      />

      {/* =========================================
          HERO CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8

          pt-[44vh]
          pb-12

          sm:pt-[44vh]
          sm:pb-14

          lg:pt-16
          lg:pb-16

          min-h-[calc(100vh-114px)]

          flex
          items-center
        "
      >
        <div
          className="
            w-full
            grid
            lg:grid-cols-[1fr_450px]
            xl:grid-cols-[1fr_470px]
            gap-10
            lg:gap-16
            items-center
          "
        >
          {/* =====================================
              LEFT SIDE
          ====================================== */}
          <div
            className="
              max-w-2xl
              pt-2
              lg:pt-0
            "
          >
            {/* Label */}
            <Reveal direction="up" delay={100}>
              <div
                className="
      inline-flex
      flex-wrap
      items-center
      justify-center
      text-center
      px-4
      py-2
      rounded-full
      bg-white
      shadow-sm
      border
      border-slate-100
      text-[#4f00e8]
      text-xs
      sm:text-sm
      font-extrabold
      tracking-wide
      leading-relaxed
      max-w-full
    "
              >
                <span className="sm:hidden">
                  WELCOME TO NGOZI MATERNITY AND HOSPITAL
                  <span className="block text-center">SERVICES</span>
                </span>

                <span className="hidden sm:inline">
                  WELCOME TO NGOZI MATERNITY AND HOSPITAL SERVICES
                </span>
              </div>
            </Reveal>
            {/* Main heading */}
            <Reveal direction="up" delay={200}>
              <h1
                className="
                  mt-6
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-extrabold
                  leading-[1]
                  tracking-tight
                  text-[#12004d]
                "
              >
                Compassionate Care,
                <span
                  className="
                    block
                    text-[#4f00e8]
                  "
                >
                  Advanced Medicine
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={300}>
              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  sm:text-lg
                  leading-8
                  text-slate-600
                "
              >
                We provide exceptional healthcare services with a patient-first
                approach. Your health and well-being are our top priorities.
              </p>
            </Reveal>

            {/* =====================================
                HERO BUTTONS
            ====================================== */}
            <Reveal direction="up" delay={400}>
              <div
                className="
                  mt-8
                  flex
                  flex-row
                  items-center
                  justify-start
                  gap-2.5
                  sm:gap-4
                "
              >
                {/* OUR SERVICES */}
                <a
                  href="#services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    sm:gap-2

                    px-3
                    sm:px-6

                    py-2.5
                    sm:py-3.5

                    rounded-lg
                    bg-[#4f00e8]
                    text-white
                    font-semibold

                    text-[11px]
                    sm:text-sm
                    md:text-base

                    whitespace-nowrap

                    shadow-md
                    shadow-purple-500/20

                    transition-all
                    duration-300

                    hover:bg-[#3f00b8]
                    hover:-translate-y-0.5
                  "
                >
                  <span>Our Services</span>
                  <span className="text-sm sm:text-base">→</span>
                </a>

                {/* CAREER */}
                <a
                  href="#career"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    sm:gap-2

                    px-3
                    sm:px-6

                    py-2.5
                    sm:py-3.5

                    rounded-lg
                    bg-white
                    border
                    border-[#4f00e8]
                    text-[#4f00e8]
                    font-semibold

                    text-[11px]
                    sm:text-sm
                    md:text-base

                    whitespace-nowrap

                    transition-all
                    duration-300

                    hover:bg-[#4f00e8]
                    hover:text-white
                    hover:-translate-y-0.5
                  "
                >
                  <span>Careers</span>
                  <span className="text-sm sm:text-base">→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* =====================================
              APPOINTMENT CARD
          ====================================== */}
          <div
            id="appointment-form"
            className="
              w-full
              max-w-[470px]
              mx-auto
              lg:ml-auto
              scroll-mt-[130px]
            "
          >
            <Reveal direction="left" delay={150}>
              <div
                className="
                  rounded-[20px]
                  bg-white
                  p-5
                  sm:p-7

                  shadow-2xl
                  shadow-slate-900/10

                  border
                  border-slate-100
                "
              >
                {/* Card Header */}
                <div className="text-center">
                  <h2
                    className="
                      text-2xl
                      sm:text-3xl
                      font-extrabold
                      text-[#16005a]
                    "
                  >
                    Book an Appointment
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-slate-500
                    "
                  >
                    Schedule your visit with our specialists
                  </p>
                </div>

                {/* =================================
                    FORM
                ================================== */}
                <form className="mt-6 space-y-4">
                  {/* Full Name */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition

                      focus:border-[#4f00e8]
                      focus:ring-2
                      focus:ring-purple-100
                    "
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition

                      focus:border-[#4f00e8]
                      focus:ring-2
                      focus:ring-purple-100
                    "
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition

                      focus:border-[#4f00e8]
                      focus:ring-2
                      focus:ring-purple-100
                    "
                  />

                  {/* Department */}
                  <select
                    defaultValue=""
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-500
                      outline-none
                      transition

                      focus:border-[#4f00e8]
                      focus:ring-2
                      focus:ring-purple-100
                    "
                  >
                    <option value="" disabled>
                      Select Department
                    </option>

                    <option value="cardiology">Cardiology</option>

                    <option value="general">General Medicine</option>

                    <option value="pediatrics">Pediatrics</option>

                    <option value="surgery">Surgery</option>

                    <option value="laboratory">Laboratory</option>

                    <option value="emergency">Emergency</option>
                  </select>

                  {/* Date */}
                  <input
                    type="date"
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-white
                      text-slate-500
                      outline-none
                      transition

                      focus:border-[#4f00e8]
                      focus:ring-2
                      focus:ring-purple-100
                    "
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      w-full
                      h-[52px]
                      mt-2
                      rounded-lg

                      bg-[#4f00e8]
                      hover:bg-[#3f00b8]

                      text-white
                      font-bold

                      transition-all
                      duration-300

                      shadow-lg
                      shadow-purple-500/20

                      hover:-translate-y-0.5
                    "
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
