import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#031b42] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* =========================
              BRAND COLUMN (UPDATED WITH NAV LOGO)
          ========================== */}
          <div className="space-y-6">
            {/* Replaced the text logo with the image from your public folder */}
            <a href="/#home" className="flex items-center">
              <img
                src="/images/Ngozi Maternity and Hospital Services.jpg"
                alt="Ngozi Maternity and Hospital Services"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </a>

            <p className="text-blue-200/70 leading-7 text-sm max-w-xs">
              Providing compassionate, modern, and patient-centered healthcare
              services to the community of Owerrinta and beyond.
            </p>
          </div>

          {/* =========================
              QUICK LINKS (Matches Navbar)
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-200/70">
              <a
                href="/#home"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/#about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/#services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/#career"
                className="hover:text-white transition-colors duration-200"
              >
                Career
              </a>
              <a
                href="/#contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* =========================
              PARTNERS & FOUNDATIONS
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Our Partners</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-200/70">
              <span className="font-semibold text-blue-100/80 mt-1">
                Foundation
              </span>
              <Link
                to="/foundation/ngozi-initiative"
                className="hover:text-white transition-colors duration-200 pl-3 border-l-2 border-[#82AEFB]/30"
              >
                Ngozi Maternity & Health Care Initiative
              </Link>
              <Link
                to="/foundation/development-africa"
                className="hover:text-white transition-colors duration-200 pl-3 border-l-2 border-[#82AEFB]/30"
              >
                Development for Africa Foundation
              </Link>
            </div>
          </div>

          {/* =========================
              CONTACT INFO
          ========================== */}
          <div>
            <h3 className="font-bold text-lg text-white mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-blue-200/70">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
                  Phone
                </span>
                <a
                  href="tel:+18702922053"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 870 292 2053
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
                  Email
                </span>
                <a
                  href="mailto:info@nmhshospital.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@nmhshospital.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-blue-300/50 font-semibold">
                  Operating Hours
                </span>
                <span>24 Hours / 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            COPYRIGHT BAR
        ========================== */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
            <p>
              © {new Date().getFullYear()} NMHS Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
