import { useState } from "react";
import Reveal from "../common/Reveal";

export default function EmergencyCTA() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace this URL with your own Formspree endpoint ID (https://formspree.io/)
    // Example: "https://formspree.io/f/xxxxxx"
    const FORMSPREE_URL = "https://formspree.io/f/yourFormID";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* =========================================
              LEFT SIDE - TEXT & PHONE BUTTON
          ========================================== */}
          <div className="text-white">
            <Reveal direction="up" delay={100}>
              <p className="font-semibold uppercase tracking-widest text-blue-100">
                Need Medical Assistance?
              </p>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                We're Here When <br className="hidden md:block" />
                You Need Us
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="mt-5 text-blue-100 max-w-lg leading-relaxed">
                Contact our team or book an appointment with one of our
                healthcare professionals. We are available 24/7 for emergencies.
              </p>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <a
                href="tel:+18702922053"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  px-7
                  py-4
                  rounded-xl
                  bg-white
                  text-blue-600
                  font-bold
                  shadow-lg
                  hover:shadow-xl
                  hover:bg-blue-50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {/* Phone Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call +1 870 292 2053
              </a>
            </Reveal>

            <Reveal direction="up" delay={500}>
              <a
                href="#appointment-form" // <--- FIXED: Removed the leading "/" here
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-4
                  text-blue-100
                  hover:text-white
                  transition-colors
                  text-sm
                  underline
                  underline-offset-4
                "
              >
                Or book an appointment online →
              </a>
            </Reveal>
          </div>

          {/* =========================================
              RIGHT SIDE - CONTACT FORM
          ========================================== */}
          <Reveal direction="right" delay={200}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-extrabold text-[#031b42] mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill out the form and our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100
                    "
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      w-full
                      h-[50px]
                      px-4
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100
                    "
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-700
                      placeholder:text-slate-400
                      outline-none
                      transition
                      resize-none
                      focus:border-blue-600
                      focus:ring-2
                      focus:ring-blue-100
                    "
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    font-bold
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-blue-500/20
                    hover:-translate-y-1
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import Reveal from "../common/Reveal";

// export default function EmergencyCTA() {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Replace this URL with your own Formspree endpoint ID (https://formspree.io/)
//     // Example: "https://formspree.io/f/xxxxxx"
//     const FORMSPREE_URL = "https://formspree.io/f/yourFormID";

//     try {
//       const response = await fetch(FORMSPREE_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Message sent successfully! We will get back to you shortly.");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Something went wrong. Please try again later.");
//       }
//     } catch (error) {
//       alert("Network error. Please check your internet connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-blue-600 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* =========================================
//               LEFT SIDE - TEXT & PHONE BUTTON
//           ========================================== */}
//           <div className="text-white">
//             <Reveal direction="up" delay={100}>
//               <p className="font-semibold uppercase tracking-widest text-blue-100">
//                 Need Medical Assistance?
//               </p>
//             </Reveal>

//             <Reveal direction="up" delay={200}>
//               <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
//                 We're Here When <br className="hidden md:block" />
//                 You Need Us
//               </h2>
//             </Reveal>

//             <Reveal direction="up" delay={300}>
//               <p className="mt-5 text-blue-100 max-w-lg leading-relaxed">
//                 Contact our team or book an appointment with one of our
//                 healthcare professionals. We are available 24/7 for emergencies.
//               </p>
//             </Reveal>

//             <Reveal direction="up" delay={400}>
//               <a
//                 href="tel:+18702922053"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-3
//                   mt-8
//                   px-7
//                   py-4
//                   rounded-xl
//                   bg-white
//                   text-blue-600
//                   font-bold
//                   shadow-lg
//                   hover:shadow-xl
//                   hover:bg-blue-50
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                 "
//               >
//                 {/* Phone Icon */}
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 Call +1 870 292 2053
//               </a>
//             </Reveal>

//             <Reveal direction="up" delay={500}>
//               <a
//                 href="/#appointment-form"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   mt-4
//                   text-blue-100
//                   hover:text-white
//                   transition-colors
//                   text-sm
//                   underline
//                   underline-offset-4
//                 "
//               >
//                 Or book an appointment online →
//               </a>
//             </Reveal>
//           </div>

//           {/* =========================================
//               RIGHT SIDE - CONTACT FORM
//           ========================================== */}
//           <Reveal direction="right" delay={200}>
//             <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
//               <h3 className="text-2xl font-extrabold text-[#031b42] mb-2">
//                 Send Us a Message
//               </h3>
//               <p className="text-slate-500 text-sm mb-6">
//                 Fill out the form and our team will get back to you promptly.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-bold text-slate-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="
//                       w-full
//                       h-[50px]
//                       px-4
//                       rounded-lg
//                       border
//                       border-slate-200
//                       bg-slate-50
//                       text-slate-700
//                       placeholder:text-slate-400
//                       outline-none
//                       transition
//                       focus:border-blue-600
//                       focus:ring-2
//                       focus:ring-blue-100
//                     "
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-slate-700 mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="
//                       w-full
//                       h-[50px]
//                       px-4
//                       rounded-lg
//                       border
//                       border-slate-200
//                       bg-slate-50
//                       text-slate-700
//                       placeholder:text-slate-400
//                       outline-none
//                       transition
//                       focus:border-blue-600
//                       focus:ring-2
//                       focus:ring-blue-100
//                     "
//                     placeholder="john@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-slate-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     rows={4}
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="
//                       w-full
//                       px-4
//                       py-3
//                       rounded-lg
//                       border
//                       border-slate-200
//                       bg-slate-50
//                       text-slate-700
//                       placeholder:text-slate-400
//                       outline-none
//                       transition
//                       resize-none
//                       focus:border-blue-600
//                       focus:ring-2
//                       focus:ring-blue-100
//                     "
//                     placeholder="How can we help you today?"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="
//                     w-full
//                     py-4
//                     rounded-xl
//                     bg-blue-600
//                     hover:bg-blue-700
//                     text-white
//                     font-bold
//                     transition-all
//                     duration-300
//                     shadow-lg
//                     shadow-blue-500/20
//                     hover:-translate-y-1
//                     disabled:opacity-70
//                     disabled:cursor-not-allowed
//                   "
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
