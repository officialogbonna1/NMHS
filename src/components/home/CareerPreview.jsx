import { Link } from "react-router-dom"; // <--- 1. IMPORT THIS
import Reveal from "../common/Reveal";

export default function CareerPreview() {
  return (
    <section id="career" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up" delay={100}>
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Join Our Team
          </p>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#031b42] leading-tight">
            We Are Hiring
          </h2>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A newly established hospital in Owerrinta, Isiala Ngwa South, Abia
            State is looking for experienced, qualified, and dedicated persons
            to join its team. If you are passionate about healthcare and making
            a positive difference, we want to hear from you.
          </p>
        </Reveal>

        <Reveal direction="up" delay={400}>
          {/* 2. CHANGE <a> to <Link> and href to to */}
          <Link
            to="/recruitment"
            className="
              inline-flex
              items-center
              mt-10
              px-8
              py-4
              rounded-xl
              bg-[#3C83F6]
              text-white
              font-bold
              text-base
              shadow-lg
              shadow-[#3C83F6]/25
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:bg-[#031b42]
            "
          >
            Start Your Application
            <span className="ml-2">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// import Reveal from "../common/Reveal";

// export default function CareerPreview() {
//   return (
//     <section id="career" className="py-20 md:py-24 bg-white overflow-hidden">
//       <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
//         <Reveal direction="up" delay={100}>
//           <p className="text-blue-600 font-semibold uppercase tracking-widest">
//             Join Our Team
//           </p>
//         </Reveal>

//         <Reveal direction="up" delay={200}>
//           <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#031b42] leading-tight">
//             We Are Hiring
//           </h2>
//         </Reveal>

//         <Reveal direction="up" delay={300}>
//           <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
//             A newly established hospital in Owerrinta, Isiala Ngwa South, Abia
//             State is looking for experienced, qualified, and dedicated persons
//             to join its team. If you are passionate about healthcare and making
//             a positive difference, we want to hear from you.
//           </p>
//         </Reveal>

//         <Reveal direction="up" delay={400}>
//           <a
//             href="/recruitment"
//             className="
//               inline-flex
//               items-center
//               mt-10
//               px-8
//               py-4
//               rounded-xl
//               bg-[#3C83F6]
//               text-white
//               font-bold
//               text-base
//               shadow-lg
//               shadow-[#3C83F6]/25
//               transition-all
//               duration-300
//               hover:-translate-y-1
//               hover:shadow-xl
//               hover:bg-[#031b42]
//             "
//           >
//             Start Your Application
//             <span className="ml-2">→</span>
//           </a>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
