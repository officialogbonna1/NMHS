import { useState } from "react";

export default function Recruitment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    emrProficiency: "", // New field for EMR/Computer skills
    coverLetter: "",
    cvFile: null, // New field for CV upload
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send formData to your backend
    console.log("Form Data:", formData);
    alert("Application submitted! We will review your CV shortly.");
  };

  const roles = [
    "Matron",
    "Medical Officer",
    "Medical Laboratory Technician",
    "Registered/Staff Nurse",
    "Midwife",
    "Pharmacy Technician",
    "CHEW-Community Health and Education Workers",
    "Cleaner",
    "Security Officer/Porter",
    "Finance/Admin",
    "Sonographer/Radiography Technician",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
      {/* =========================================
          DECORATIVE BACKGROUND ELEMENT
      ========================================== */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3C83F6]/5 rounded-bl-[100px] -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3C83F6]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* =========================================
            HEADER
        ========================================== */}
        <div className="mb-12 lg:mb-16 text-center lg:text-left lg:pl-4">
          <p className="text-[#3C83F6] font-bold uppercase tracking-[0.2em] text-sm mb-2">
            Join Our Team
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#031b42] leading-tight">
            RECRUITMENT
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl lg:mx-0 mx-auto">
            We are looking for dedicated professionals to help us deliver
            exceptional healthcare to the community of Owerrinta.
          </p>
        </div>

        {/* =========================================
            MAIN CONTENT GRID
        ========================================== */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* =========================================
              JOB DETAILS (LEFT SIDE - 2 COLUMNS)
          ========================================== */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#3C83F6]/10 rounded-lg text-[#3C83F6]">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M19 10v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-[#031b42]">
                  Open Positions
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                <strong>Ngozi Maternity and Hospital Services</strong> is a
                newly established hospital in{" "}
                <strong className="text-[#031b42]">
                  Owerrinta, Isiala Ngwa South, Abia State
                </strong>
                . We are looking for experienced, qualified, and dedicated
                persons to join our team.
              </p>

              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 mb-6">
                <ul className="space-y-2.5 text-slate-700 font-medium">
                  {roles.map((role, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#3C83F6] mt-0.5">✦</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-sm text-slate-600 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#031b42] shrink-0">
                    📍 Location:
                  </span>
                  <span>Owerrinta, Isiala Ngwa South, Abia State</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#031b42] shrink-0">
                    📧 Apply via:
                  </span>
                  <a
                    href="mailto:recruitment@nmhs.com"
                    className="text-[#3C83F6] hover:underline font-medium break-all"
                  >
                    recruitment@nmhs.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-[#031b42] shrink-0">
                    📅 Deadline:
                  </span>
                  <span>Ongoing</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-[#031b42]">Note:</span>{" "}
                  Applicants must indicate if they are willing to relocate to
                  Owerrinta. We give priority to candidates with previous
                  healthcare experience.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              APPLICATION FORM (RIGHT SIDE - 3 COLUMNS)
          ========================================== */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-100 relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-2xl font-extrabold text-[#031b42]">
                  Start Your Application
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Fill in your details below. Ensure your CV is ready for
                  upload.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name & Email (Grid on desktop) */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#3C83F6] focus:ring-4 focus:ring-[#3C83F6]/10 outline-none transition bg-slate-50/50 hover:bg-white"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#3C83F6] focus:ring-4 focus:ring-[#3C83F6]/10 outline-none transition bg-slate-50/50 hover:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Role (Grid on desktop) */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#3C83F6] focus:ring-4 focus:ring-[#3C83F6]/10 outline-none transition bg-slate-50/50 hover:bg-white"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Applying For Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#3C83F6] focus:ring-4 focus:ring-[#3C83F6]/10 outline-none transition bg-slate-50/50 hover:bg-white"
                    >
                      <option value="">Select a role...</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* =========================================
                    NEW FIELD: COMPUTER/EMR PROFICIENCY
                ========================================== */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    Computer / EMR System Proficiency{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Beginner",
                      "Intermediate",
                      "Advanced",
                      "Expert",
                      "Certified",
                      "No Experience",
                    ].map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 cursor-pointer transition hover:bg-[#3C83F6]/5 has-[:checked]:border-[#3C83F6] has-[:checked]:bg-[#3C83F6]/5 bg-white"
                      >
                        <input
                          type="radio"
                          name="emrProficiency"
                          value={level}
                          required
                          checked={formData.emrProficiency === level}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#3C83F6] focus:ring-[#3C83F6]"
                        />
                        <span className="text-sm text-slate-700 font-medium">
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-bold text-amber-500">
                    * Proficiency in Electronic Medical Records (EMR) systems is
                    highly preferred.
                  </p>
                </div>

                {/* =========================================
                    NEW FIELD: CV UPLOAD
                ========================================== */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    Upload CV / Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="file"
                      name="cvFile"
                      required
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      onChange={handleChange}
                      className="
                        block w-full text-sm text-slate-500
                        file:mr-4 file:py-3 file:px-6
                        file:rounded-lg file:border-0
                        file:text-sm file:font-bold
                        file:bg-[#3C83F6]/10 file:text-[#3C83F6]
                        hover:file:bg-[#3C83F6]/20
                        file:transition-all file:duration-300
                        file:cursor-pointer cursor-pointer
                        border border-slate-200 rounded-lg bg-slate-50/50 hover:bg-white transition
                      "
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Accepted formats: PDF, DOC, DOCX, JPG, PNG. Max size: 5MB.
                  </p>
                </div>

                {/* =========================================
                    COVER LETTER
                ========================================== */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    Cover Letter / Willing to Relocate?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    required
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#3C83F6] focus:ring-4 focus:ring-[#3C83F6]/10 outline-none transition bg-slate-50/50 hover:bg-white resize-none"
                    placeholder="Briefly tell us about yourself. Make sure to explicitly state if you are willing to relocate to Owerrinta..."
                  ></textarea>
                </div>

                {/* =========================================
                    SUBMIT BUTTON
                ========================================== */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-[#031b42]
                    hover:bg-[#3C83F6]
                    text-white
                    font-bold
                    text-base
                    shadow-lg
                    shadow-[#031b42]/25
                    hover:shadow-[#3C83F6]/25
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    flex items-center justify-center gap-2
                  "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
