export default function TopBar() {
  return (
    <div
      className="
        sticky
        top-0
        z-[60]
        w-full
        bg-[#031b42]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            min-h-[38px]
            flex
            items-center
            justify-between
            gap-3
            text-xs
            sm:text-sm
          "
        >
          {/* LEFT SIDE */}

          <div className="flex items-center gap-2 min-w-0">
            <span
              className="
                flex
                items-center
                justify-center
                w-5
                h-5
                rounded-full
                bg-red-500
                text-white
                font-bold
                text-[10px]
                flex-shrink-0
              "
            >
              !
            </span>

            <span className="font-semibold whitespace-nowrap">
              24/7 Emergency
            </span>

            <span className="hidden sm:inline text-blue-200">|</span>

            {/* 
              =========================================
              UPDATED: CALLABLE NUMBER 
              - tel: link triggers phone dialer 
              - Format: +234XXXXXXXXXX (Only numbers & +)
              =========================================
            */}
            <a
              href="tel:+23407079019347"
              className="
                font-semibold
                hover:text-[#82AEFB]
                transition-colors
                whitespace-nowrap
              "
            >
              +234 07079019347
            </a>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-5
              text-blue-100
              whitespace-nowrap
            "
          >
            <a
              href="mailto:info@nmhs.com"
              className="
                hover:text-white
                transition-colors
              "
            >
              info@nmhs.com
            </a>

            <span>Open 24 Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function TopBar() {
//   return (
//     <div
//       className="
//         sticky
//         top-0
//         z-[60]
//         w-full
//         bg-[#031b42]
//         text-white
//       "
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="
//             min-h-[38px]
//             flex
//             items-center
//             justify-between
//             gap-3
//             text-xs
//             sm:text-sm
//           "
//         >
//           {/* LEFT SIDE */}

//           <div className="flex items-center gap-2 min-w-0">
//             <span
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 w-5
//                 h-5
//                 rounded-full
//                 bg-red-500
//                 text-white
//                 font-bold
//                 text-[10px]
//                 flex-shrink-0
//               "
//             >
//               !
//             </span>

//             <span className="font-semibold whitespace-nowrap">
//               24/7 Emergency
//             </span>

//             <span className="hidden sm:inline text-blue-200">|</span>

//             <a
//               href="tel:+234 07079019347"
//               className="
//                 font-semibold
//                 hover:text-[#82AEFB]
//                 transition-colors
//                 whitespace-nowrap
//               "
//             >
//               +234 07079019347
//             </a>
//           </div>

//           {/* RIGHT SIDE */}

//           <div
//             className="
//               hidden
//               md:flex
//               items-center
//               gap-5
//               text-blue-100
//               whitespace-nowrap
//             "
//           >
//             <a
//               href="mailto:info@nmhshospital.com"
//               className="
//                 hover:text-white
//                 transition-colors
//               "
//             >
//               info@nmhshospital.com
//             </a>

//             <span>Open 24 Hours</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
