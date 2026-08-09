import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);

  // Get the current URL path
  const location = useLocation();
  const base = import.meta.env.BASE_URL; // <--- Define base URL for images

  // =========================================
  // SMART NAVIGATION HANDLER
  // =========================================
  const handleNavClick = (e, href) => {
    e.preventDefault(); // Stop the default anchor jump first

    // If we are on a page OTHER than the Home page
    if (location.pathname !== "/") {
      // Take them to the Home page first, and append the hash
      window.location.href = `/NMHS/${href}`;
      return;
    }

    // If we ARE on the Home page, just smooth scroll to the ID
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Account for your fixed Navbar height
      const navbarHeight = 114;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    setOpen(false); // Close mobile menu
  };

  // =========================================
  // PAGE & ANCHOR LINKS (REORDERED)
  // =========================================
  // Partners is now before Career
  const anchorLinks = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Services", "#services"],
    ["Partners", "#"], // <--- Partners moved up
    ["Career", "#career"], // <--- Career moved down
    ["Contact", "#contact"], // <--- Contact remains last
  ];

  return (
    <header
      className="
        fixed
        top-[38px]
        left-0
        right-0
        z-50
        w-full
        bg-[#82AEFB]
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="h-[76px] flex items-center justify-between">
          {/* =========================
              LOGO (FIXED PATH)
          ========================== */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3"
          >
            {/* 
               NOTE: Make sure ngozi-logo.jpg is in the root of public/assets/.
               If it is in public/assets/hospital/, change this to:
               src={`${base}assets/hospital/ngozi-logo.jpg`}
            */}
            <img
              src={`${base}assets/ngozi-logo.jpg`}
              alt="Ngozi Maternity and Hospital Services"
              className="h-14 w-auto object-contain rounded-lg"
            />
          </a>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Render everything EXCEPT Partners, Career, Contact normally */}
            {anchorLinks.slice(0, 3).map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="
                  relative
                  py-2
                  text-sm
                  font-bold
                  text-[#031b42]
                  transition-all
                  duration-300
                  hover:text-white

                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:bg-white
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {name}
              </a>
            ))}

            {/* =========================
                PARTNERS DROPDOWN (Before Career)
            ========================== */}
            <div
              className="relative"
              onMouseEnter={() => setPartnersOpen(true)}
              onMouseLeave={() => setPartnersOpen(false)}
            >
              <button
                type="button"
                className="
                  relative
                  py-2
                  text-sm
                  font-bold
                  text-[#031b42]
                  transition-all
                  duration-300
                  hover:text-white
                  flex
                  items-center
                  gap-1.5

                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:bg-white
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                Partners
                <svg
                  className={`
                    w-3.5
                    h-3.5
                    transition-transform
                    duration-300
                    ${partnersOpen ? "rotate-180" : ""}
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* DROPDOWN MENU */}
              <div
                className={`
                  absolute
                  top-full
                  left-0
                  mt-3
                  w-72
                  bg-white
                  rounded-xl
                  border
                  border-slate-200
                  shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                  overflow-visible
                  transition-all
                  duration-300
                  origin-top-left
                  ${
                    partnersOpen
                      ? "opacity-100 scale-100 translate-y-0 visible"
                      : "opacity-0 scale-95 -translate-y-2 invisible"
                  }
                `}
              >
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 rounded-t-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#82AEFB]">
                    Our Partners
                  </p>
                </div>

                <div className="relative group">
                  <button
                    type="button"
                    className="
                      w-full
                      px-5
                      py-4
                      text-sm
                      font-bold
                      text-[#031b42]
                      hover:bg-[#f1f6ff]
                      transition
                      flex
                      items-center
                      justify-between
                      border-b
                      border-slate-100
                    "
                  >
                    <span>Foundation</span>
                    <svg
                      className="w-4 h-4 text-[#031b42]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div
                    className="
                      absolute
                      top-0
                      left-full
                      ml-2
                      w-80
                      bg-white
                      rounded-xl
                      border
                      border-slate-200
                      shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                      overflow-hidden
                      opacity-0
                      invisible
                      translate-x-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-x-0
                      transition-all
                      duration-300
                    "
                  >
                    <Link
                      to="/foundation/ngozi-initiative"
                      className="
                        block
                        px-5
                        py-4
                        text-sm
                        font-semibold
                        text-[#031b42]
                        hover:bg-[#f1f6ff]
                        transition
                        border-b
                        border-slate-100
                      "
                    >
                      <span className="block">
                        Ngozi Maternity & Health Care Initiative
                      </span>
                      <span className="block mt-1 text-xs text-slate-500">
                        Health & community care
                      </span>
                    </Link>

                    <Link
                      to="/foundation/development-africa"
                      className="
                        block
                        px-5
                        py-4
                        text-sm
                        font-semibold
                        text-[#031b42]
                        hover:bg-[#f1f6ff]
                        transition
                      "
                    >
                      <span className="block">
                        Development for Africa Foundation
                      </span>
                      <span className="block mt-1 text-xs text-slate-500">
                        Development & humanitarian support
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                CAREER (Coming after Partners)
            ========================== */}
            <a
              href="#career"
              onClick={(e) => handleNavClick(e, "#career")}
              className="
                relative
                py-2
                text-sm
                font-bold
                text-[#031b42]
                transition-all
                duration-300
                hover:text-white

                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              Career
            </a>

            {/* =========================
                CONTACT (Now the very last link)
            ========================== */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="
                relative
                py-2
                text-sm
                font-bold
                text-[#031b42]
                transition-all
                duration-300
                hover:text-white

                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              Contact
            </a>
          </nav>

          {/* =========================
              APPOINTMENT BUTTON
          ========================== */}
          <a
            href="#appointment-form"
            onClick={(e) => handleNavClick(e, "#appointment-form")}
            className="
              hidden
              md:inline-flex
              items-center
              justify-center
              px-6
              py-3
              rounded-xl
              bg-[#031b42]
              text-white
              font-bold
              text-sm
              shadow-lg
              shadow-[#031b42]/20
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#031b42]
              hover:-translate-y-0.5
            "
          >
            Book Appointment
          </a>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              bg-white
              text-[#031b42]
              flex
              items-center
              justify-center
              text-xl
              shadow-sm
              transition
              hover:bg-slate-50
            "
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================== */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${open ? "max-h-[800px] opacity-100 pb-5" : "max-h-0 opacity-0"}
          `}
        >
          <nav
            className="
              flex
              flex-col
              gap-1
              pt-3
              border-t
              border-[#031b42]/10
            "
          >
            {/* Mobile Anchor Links (reordered) */}
            {anchorLinks.slice(0, 3).map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={(e) => {
                  handleNavClick(e, href);
                  setOpen(false);
                }}
                className="
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  font-bold
                  text-[#031b42]
                  hover:bg-white/60
                  transition
                "
              >
                {name}
              </a>
            ))}

            {/* Mobile Partners (Now before Career) */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => setPartnersOpen(!partnersOpen)}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  font-bold
                  text-[#031b42]
                  hover:bg-white/60
                  transition
                  flex
                  items-center
                  justify-between
                "
              >
                <span>Partners</span>
                <svg
                  className={`
                    w-4
                    h-4
                    text-[#031b42]
                    transition-transform
                    duration-300
                    ${partnersOpen ? "rotate-180" : ""}
                  `}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    partnersOpen
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="ml-4 mt-1 pl-3 border-l-2 border-[#031b42]/10">
                  <div className="px-3 py-3 text-sm font-bold text-[#031b42]">
                    Foundation
                  </div>
                  <div className="ml-3 pl-3 border-l border-slate-300 flex flex-col">
                    <Link
                      to="/foundation/ngozi-initiative"
                      onClick={() => setOpen(false)}
                      className="py-3 text-sm font-medium text-slate-600 hover:text-[#031b42] transition"
                    >
                      Ngozi Maternity & Health Care Initiative
                    </Link>
                    <Link
                      to="/foundation/development-africa"
                      onClick={() => setOpen(false)}
                      className="py-3 text-sm font-medium text-slate-600 hover:text-[#031b42] transition"
                    >
                      Development for Africa Foundation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Career */}
            <a
              href="#career"
              onClick={(e) => {
                handleNavClick(e, "#career");
                setOpen(false);
              }}
              className="
                px-4
                py-3
                rounded-lg
                text-sm
                font-bold
                text-[#031b42]
                hover:bg-white/60
                transition
              "
            >
              Career
            </a>

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, "#contact");
                setOpen(false);
              }}
              className="
                px-4
                py-3
                rounded-lg
                text-sm
                font-bold
                text-[#031b42]
                hover:bg-white/60
                transition
              "
            >
              Contact
            </a>

            {/* Mobile Appointment Button */}
            <a
              href="#appointment-form"
              onClick={(e) => {
                handleNavClick(e, "#appointment-form");
                setOpen(false);
              }}
              className="
                mt-2
                text-center
                px-5
                py-3
                rounded-xl
                bg-[#031b42]
                text-white
                font-bold
              "
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [partnersOpen, setPartnersOpen] = useState(false);

//   // =========================================
//   // PAGE LINKS (Changes the page)
//   // =========================================
//   // NOTE: "Home" is removed from here. We will use an <a> tag for it below.
//   const pageLinks = [];

//   // =========================================
//   // ANCHOR LINKS (Scrolling on the Home page)
//   // =========================================
//   const anchorLinks = [
//     ["Home", "/#home"], // <--- Changed to scroll to #home
//     ["About Us", "/#about"],
//     ["Services", "/#services"],
//     ["Career", "/#career"],
//     ["Contact", "/#contact"],
//   ];

//   const closeMobileMenu = () => setOpen(false);

//   return (
//     <header
//       className="
//         fixed
//         top-[38px]
//         left-0
//         right-0
//         z-50
//         w-full
//         bg-[#82AEFB]
//         shadow-md
//       "
//     >
//       <div className="max-w-7xl mx-auto px-5 lg:px-6">
//         <div className="h-[76px] flex items-center justify-between">
//           {/* =========================
//               LOGO
//           ========================== */}
//           <a href="/#home" className="flex items-center gap-3">
//             <img
//               src="/images/Ngozi Maternity and Hospital Services.jpg"
//               alt="Ngozi Maternity and Hospital Services"
//               className="h-14 w-auto object-contain rounded-lg"
//             />
//           </a>

//           {/* =========================
//               DESKTOP NAVIGATION
//           ========================== */}
//           <nav className="hidden lg:flex items-center gap-6">
//             {/* 2. Anchor Scroll Links (Using <a> works perfectly!) */}
//             {anchorLinks.map(([name, href]) => (
//               <a
//                 key={name}
//                 href={href}
//                 className="
//                   relative
//                   py-2
//                   text-sm
//                   font-bold
//                   text-[#031b42]
//                   transition-all
//                   duration-300
//                   hover:text-white

//                   after:absolute
//                   after:left-0
//                   after:bottom-0
//                   after:h-[2px]
//                   after:w-0
//                   after:bg-white
//                   after:transition-all
//                   after:duration-300

//                   hover:after:w-full
//                 "
//               >
//                 {name}
//               </a>
//             ))}

//             {/* =========================
//                 PARTNERS DROPDOWN
//             ========================== */}
//             <div
//               className="relative"
//               onMouseEnter={() => setPartnersOpen(true)}
//               onMouseLeave={() => setPartnersOpen(false)}
//             >
//               <button
//                 type="button"
//                 className="
//                   relative
//                   py-2
//                   text-sm
//                   font-bold
//                   text-[#031b42]
//                   transition-all
//                   duration-300
//                   hover:text-white
//                   flex
//                   items-center
//                   gap-1.5

//                   after:absolute
//                   after:left-0
//                   after:bottom-0
//                   after:h-[2px]
//                   after:w-0
//                   after:bg-white
//                   after:transition-all
//                   after:duration-300

//                   hover:after:w-full
//                 "
//               >
//                 Partners
//                 <svg
//                   className={`
//                     w-3.5
//                     h-3.5
//                     transition-transform
//                     duration-300
//                     ${partnersOpen ? "rotate-180" : ""}
//                   `}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               {/* DROPDOWN MENU */}
//               <div
//                 className={`
//                   absolute
//                   top-full
//                   left-0
//                   mt-3
//                   w-72
//                   bg-white
//                   rounded-xl
//                   border
//                   border-slate-200
//                   shadow-[0_15px_40px_rgba(0,0,0,0.18)]
//                   overflow-visible
//                   transition-all
//                   duration-300
//                   origin-top-left
//                   ${
//                     partnersOpen
//                       ? "opacity-100 scale-100 translate-y-0 visible"
//                       : "opacity-0 scale-95 -translate-y-2 invisible"
//                   }
//                 `}
//               >
//                 <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 rounded-t-xl">
//                   <p className="text-xs font-bold uppercase tracking-wider text-[#82AEFB]">
//                     Our Partners
//                   </p>
//                 </div>

//                 <div className="relative group">
//                   <button
//                     type="button"
//                     className="
//                       w-full
//                       px-5
//                       py-4
//                       text-sm
//                       font-bold
//                       text-[#031b42]
//                       hover:bg-[#f1f6ff]
//                       transition
//                       flex
//                       items-center
//                       justify-between
//                       border-b
//                       border-slate-100
//                     "
//                   >
//                     <span>Foundation</span>
//                     <svg
//                       className="w-4 h-4 text-[#031b42]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>

//                   <div
//                     className="
//                       absolute
//                       top-0
//                       left-full
//                       ml-2
//                       w-80
//                       bg-white
//                       rounded-xl
//                       border
//                       border-slate-200
//                       shadow-[0_15px_40px_rgba(0,0,0,0.18)]
//                       overflow-hidden
//                       opacity-0
//                       invisible
//                       translate-x-2
//                       group-hover:opacity-100
//                       group-hover:visible
//                       group-hover:translate-x-0
//                       transition-all
//                       duration-300
//                     "
//                   >
//                     <Link
//                       to="/foundation/ngozi-initiative"
//                       className="
//                         block
//                         px-5
//                         py-4
//                         text-sm
//                         font-semibold
//                         text-[#031b42]
//                         hover:bg-[#f1f6ff]
//                         transition
//                         border-b
//                         border-slate-100
//                       "
//                     >
//                       <span className="block">
//                         Ngozi Maternity & Health Care Initiative
//                       </span>
//                       <span className="block mt-1 text-xs text-slate-500">
//                         Health & community care
//                       </span>
//                     </Link>

//                     <Link
//                       to="/foundation/development-africa"
//                       className="
//                         block
//                         px-5
//                         py-4
//                         text-sm
//                         font-semibold
//                         text-[#031b42]
//                         hover:bg-[#f1f6ff]
//                         transition
//                       "
//                     >
//                       <span className="block">
//                         Development for Africa Foundation
//                       </span>
//                       <span className="block mt-1 text-xs text-slate-500">
//                         Development & humanitarian support
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>

//           {/* =========================
//               APPOINTMENT BUTTON (UPDATED TO SCROLL TO FORM)
//           ========================== */}
//           <a
//             href="/#appointment-form"
//             className="
//               hidden
//               md:inline-flex
//               items-center
//               justify-center
//               px-6
//               py-3
//               rounded-xl
//               bg-[#031b42]
//               text-white
//               font-bold
//               text-sm
//               shadow-lg
//               shadow-[#031b42]/20
//               transition-all
//               duration-300
//               hover:bg-white
//               hover:text-[#031b42]
//               hover:-translate-y-0.5
//             "
//           >
//             Book Appointment
//           </a>

//           {/* =========================
//               MOBILE MENU BUTTON
//           ========================== */}
//           <button
//             type="button"
//             onClick={() => setOpen(!open)}
//             className="
//               lg:hidden
//               w-11
//               h-11
//               rounded-xl
//               bg-white
//               text-[#031b42]
//               flex
//               items-center
//               justify-center
//               text-xl
//               shadow-sm
//               transition
//               hover:bg-slate-50
//             "
//             aria-label="Toggle navigation menu"
//             aria-expanded={open}
//           >
//             {open ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* =========================
//             MOBILE NAVIGATION
//         ========================== */}
//         <div
//           className={`
//             lg:hidden
//             overflow-hidden
//             transition-all
//             duration-300
//             ${open ? "max-h-[800px] opacity-100 pb-5" : "max-h-0 opacity-0"}
//           `}
//         >
//           <nav
//             className="
//               flex
//               flex-col
//               gap-1
//               pt-3
//               border-t
//               border-[#031b42]/10
//             "
//           >
//             {/* Mobile Anchor Links */}
//             {anchorLinks.map(([name, href]) => (
//               <a
//                 key={name}
//                 href={href}
//                 onClick={closeMobileMenu}
//                 className="
//                   px-4
//                   py-3
//                   rounded-lg
//                   text-sm
//                   font-bold
//                   text-[#031b42]
//                   hover:bg-white/60
//                   transition
//                 "
//               >
//                 {name}
//               </a>
//             ))}

//             {/* Mobile Partners */}
//             <div className="mt-1">
//               <button
//                 type="button"
//                 onClick={() => setPartnersOpen(!partnersOpen)}
//                 className="
//                   w-full
//                   px-4
//                   py-3
//                   rounded-lg
//                   text-sm
//                   font-bold
//                   text-[#031b42]
//                   hover:bg-white/60
//                   transition
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >
//                 <span>Partners</span>
//                 <svg
//                   className={`
//                     w-4
//                     h-4
//                     text-[#031b42]
//                     transition-transform
//                     duration-300
//                     ${partnersOpen ? "rotate-180" : ""}
//                   `}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>

//               <div
//                 className={`
//                   overflow-hidden
//                   transition-all
//                   duration-300
//                   ${
//                     partnersOpen
//                       ? "max-h-[400px] opacity-100"
//                       : "max-h-0 opacity-0"
//                   }
//                 `}
//               >
//                 <div className="ml-4 mt-1 pl-3 border-l-2 border-[#031b42]/10">
//                   <div className="px-3 py-3 text-sm font-bold text-[#031b42]">
//                     Foundation
//                   </div>
//                   <div className="ml-3 pl-3 border-l border-slate-300 flex flex-col">
//                     <Link
//                       to="/foundation/ngozi-initiative"
//                       onClick={closeMobileMenu}
//                       className="py-3 text-sm font-medium text-slate-600 hover:text-[#031b42] transition"
//                     >
//                       Ngozi Maternity & Health Care Initiative
//                     </Link>
//                     <Link
//                       to="/foundation/development-africa"
//                       onClick={closeMobileMenu}
//                       className="py-3 text-sm font-medium text-slate-600 hover:text-[#031b42] transition"
//                     >
//                       Development for Africa Foundation
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Appointment Button (UPDATED TO SCROLL TO FORM) */}
//             <a
//               href="/#appointment-form"
//               onClick={closeMobileMenu}
//               className="
//                 mt-2
//                 text-center
//                 px-5
//                 py-3
//                 rounded-xl
//                 bg-[#031b42]
//                 text-white
//                 font-bold
//               "
//             >
//               Book Appointment
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }
