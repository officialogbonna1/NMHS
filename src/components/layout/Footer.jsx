import { Link } from "react-router-dom";

export default function Footer() {
  const base = import.meta.env.BASE_URL;
  const currentYear = new Date().getFullYear();

  // Social Media links (Replace "#" with your actual URLs)
  const socials = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "TikTok", icon: "tiktok", url: "#" },
    { name: "X", icon: "twitter-x", url: "#" },
  ];

  return (
    <footer className="bg-[#031b42] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* =========================
              BRAND COLUMN
          ========================== */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <img
                src={`${base}assets/hospital/ngozi-logo.jpg`}
                alt="Ngozi Maternity and Hospital Services"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </a>

            <p className="text-blue-200/70 leading-7 text-sm max-w-xs">
              Providing compassionate, modern, and patient-centered healthcare
              services to the community of Owerrinta and beyond.
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    text-white/80 hover:text-white
                    hover:bg-[#3C83F6]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Facebook */}
                    {social.icon === "facebook" && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {/* LinkedIn */}
                    {social.icon === "linkedin" && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                    {/* Instagram */}
                    {social.icon === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                    {/* TikTok */}
                    {social.icon === "tiktok" && (
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v5.82a7.5 7.5 0 01-7.04 7.38 7.37 7.37 0 01-4.41-1.43 7.55 7.55 0 01-2.64-4.18c-.36-1.52-.28-3.14.24-4.63a7.57 7.57 0 013.24-4.04c.98-.57 2.09-.93 3.23-1.02v4.06a3.5 3.5 0 00-2.23.95c-.65.61-1.04 1.47-1.07 2.37-.02.93.35 1.84 1.03 2.5a3.48 3.48 0 004.36.47c.4-.24.74-.56 1.02-.94.27-.38.45-.81.52-1.28l.03-.36V.02z" />
                    )}
                    {/* X (Twitter) */}
                    {social.icon === "twitter-x" && (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-200/70">
              <a
                href="#home"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#career"
                className="hover:text-white transition-colors duration-200"
              >
                Career
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* =========================
              CONTACT INFO
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-blue-200/70">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
                  Address
                </span>
                <p className="leading-relaxed text-blue-200/70">
                  Ngozi Maternity and Hospital Services, <br />
                  Owerrinta, Isiala Ngwa South, <br />
                  Abia State, Nigeria.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
                  Email
                </span>
                <a
                  href="mailto:info@ngozimaternityandhospitalservices.org"
                  className="hover:text-white transition-colors duration-200 break-all"
                >
                  info@ngozimaternityandhospitalservices.org
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              CHAT WITH US (WHATSAPP)
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Chat with us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-blue-200/70 text-xs uppercase tracking-wider mb-1">
                Only WhatsApp Messages
              </p>
              <a
                href="https://wa.me/2347079019347"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-green-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>07079019347</span>
              </a>
              <a
                href="https://wa.me/2348149297208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-green-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>08149297208</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            COPYRIGHT BAR
        ========================== */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
            <p>© {currentYear} NMHS Hospital. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p className="text-blue-200/40 text-xs">
                Designed by
                <span className="text-white/70 hover:text-white transition-colors ml-1">
                  TECH-WITH-OG
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#031b42] text-white pt-16 pb-8 border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {/* =========================
//               BRAND COLUMN (UPDATED WITH NAV LOGO)
//           ========================== */}
//           <div className="space-y-6">
//             {/* Replaced the text logo with the image from your public folder */}
//             <a href="/#home" className="flex items-center">
//               <img
//                 src="/images/Ngozi Maternity and Hospital Services.jpg"
//                 alt="Ngozi Maternity and Hospital Services"
//                 className="h-14 w-auto object-contain rounded-lg"
//               />
//             </a>

//             <p className="text-blue-200/70 leading-7 text-sm max-w-xs">
//               Providing compassionate, modern, and patient-centered healthcare
//               services to the community of Owerrinta and beyond.
//             </p>
//           </div>

//           {/* =========================
//               QUICK LINKS (Matches Navbar)
//           ========================== */}
//           <div>
//             <h3 className="font-bold text-lg text-white mb-5">Quick Links</h3>
//             <div className="flex flex-col gap-3 text-sm text-blue-200/70">
//               <a
//                 href="/#home"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Home
//               </a>
//               <a
//                 href="/#about"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 About Us
//               </a>
//               <a
//                 href="/#services"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Services
//               </a>
//               <a
//                 href="/#career"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Career
//               </a>
//               <a
//                 href="/#contact"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>

//           {/* =========================
//               PARTNERS & FOUNDATIONS
//           ========================== */}
//           <div>
//             <h3 className="font-bold text-lg text-white mb-5">Our Partners</h3>
//             <div className="flex flex-col gap-3 text-sm text-blue-200/70">
//               <span className="font-semibold text-blue-100/80 mt-1">
//                 Foundation
//               </span>
//               <Link
//                 to="/foundation/ngozi-initiative"
//                 className="hover:text-white transition-colors duration-200 pl-3 border-l-2 border-[#82AEFB]/30"
//               >
//                 Ngozi Maternity & Health Care Initiative
//               </Link>
//               <Link
//                 to="/foundation/development-africa"
//                 className="hover:text-white transition-colors duration-200 pl-3 border-l-2 border-[#82AEFB]/30"
//               >
//                 Development for Africa Foundation
//               </Link>
//             </div>
//           </div>

//           {/* =========================
//               CONTACT INFO
//           ========================== */}
//           <div>
//             <h3 className="font-bold text-lg text-white mb-5">Contact Us</h3>
//             <div className="flex flex-col gap-4 text-sm text-blue-200/70">
//               <div className="flex flex-col gap-1">
//                 <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
//                   Phone
//                 </span>
//                 <a
//                   href="tel:+18702922053"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   +1 870 292 2053
//                 </a>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
//                   Email
//                 </span>
//                 <a
//                   href="mailto:info@nmhshospital.com"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   info@nmhshospital.com
//                 </a>
//               </div>

//               <div className="flex flex-col gap-1">
//                 <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
//                   Operating Hours
//                 </span>
//                 <span>24 Hours / 7 Days a Week</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             COPYRIGHT BAR
//         ========================== */}
//         <div className="mt-16 pt-6 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
//             <p>
//               © {new Date().getFullYear()} NMHS Hospital. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
