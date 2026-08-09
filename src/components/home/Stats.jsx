import Reveal from "../common/Reveal";

export default function Stats() {
  const stats = [
    ["20+", "Medical Professionals"],
    ["500+", "Patients Served"],
    ["100+", "Healthcare Services"],
    ["24/7", "Emergency Care"],
  ];

  return (
    <section className="relative py-20 overflow-hidden text-white">
      {/* =========================================
          BACKGROUND IMAGE LAYER - WITH TRUE PARALLAX
      ========================================== */}
      <div
        className="
          absolute 
          inset-0 
          z-0 
          bg-fixed 
          bg-center 
          bg-cover 
          bg-no-repeat
        "
        style={{
          // ✅ FIXED: Updated path to /assets/hospital/
          backgroundImage: 'url("/assets/hospital/hero-image.png")',
        }}
      >
        {/* Reduced Blue Overlay to 50% */}
        <div className="absolute inset-0 bg-[#031b42]/50"></div>

        {/* Smart Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#031b42]/80 via-transparent to-[#031b42]/60"></div>
      </div>

      {/* =========================================
          CONTENT LAYER
      ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(([number, label], index) => (
            <Reveal
              key={label}
              direction="up"
              delay={100 + index * 150}
              duration={700}
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold transition-transform duration-300 group-hover:scale-110">
                  {number}
                </div>

                <div className="mt-2 text-blue-200 text-sm transition-colors duration-300 group-hover:text-white">
                  {label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// import Reveal from "../common/Reveal";

// export default function Stats() {
//   const stats = [
//     ["20+", "Medical Professionals"],
//     ["500+", "Patients Served"],
//     ["100+", "Healthcare Services"],
//     ["24/7", "Emergency Care"],
//   ];

//   return (
//     <section className="relative py-20 overflow-hidden text-white">
//       {/* =========================================
//           BACKGROUND IMAGE LAYER - WITH TRUE PARALLAX
//       ========================================== */}
//       {/*
//         IMPORTANT: We use bg-fixed on this div, NOT on the img tag.
//         Tailwind's bg-fixed works exactly like CSS background-attachment: fixed.
//       */}
//       <div
//         className="
//           absolute
//           inset-0
//           z-0
//           bg-fixed
//           bg-center
//           bg-cover
//           bg-no-repeat
//         "
//         style={{
//           backgroundImage: 'url("/images/hospital/hero-image.png")',
//         }}
//       >
//         {/* Reduced Blue Overlay to 50% */}
//         <div className="absolute inset-0 bg-[#031b42]/50"></div>

//         {/* Smart Gradient Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#031b42]/80 via-transparent to-[#031b42]/60"></div>
//       </div>

//       {/* =========================================
//           CONTENT LAYER
//       ========================================== */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map(([number, label], index) => (
//             <Reveal
//               key={label}
//               direction="up"
//               delay={100 + index * 150}
//               duration={700}
//             >
//               <div className="text-center group">
//                 <div className="text-4xl md:text-5xl font-extrabold transition-transform duration-300 group-hover:scale-110">
//                   {number}
//                 </div>

//                 <div className="mt-2 text-blue-200 text-sm transition-colors duration-300 group-hover:text-white">
//                   {label}
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
