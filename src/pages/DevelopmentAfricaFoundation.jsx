import { useState, useEffect } from "react";
import Reveal from "../components/common/Reveal";

export default function DevelopmentAfricaFoundation() {
  // State for the Lightbox (Image Viewer)
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // =========================================
  // YOUR EXACT 24 IMAGES FROM YOUR FOLDER
  // =========================================
  const galleryImages = [
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_25460fed.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.08_e04a219a.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.08_bb9c61ac.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.08_b456c6b2.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.08_898c5487.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_65aefcde.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_533e4d4a.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_c83255ef.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_ef1c7590.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.08_2c91b6b0.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-16.49.01_be9f6122.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.38_8a68f3ea.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.38_92c7c520.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_6b1628d4.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_37a55af4.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_c9312a73.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_44952f21.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_975b1990.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_65d27582.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_cedf3859.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.39_d2ede666.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.40_3f396790.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.40_9e784e19.jpg",
    "/images/hospital/WhatsApp-Image-2025-05-18-at-17.04.40_b4ff3c1c.jpg",
  ];

  // =========================================
  // LIGHTBOX CONTROLS
  // =========================================
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setZoomLevel(1); // Reset zoom when opening
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setZoomLevel(1); // Reset zoom on slide
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setZoomLevel(1); // Reset zoom on slide
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // =========================================
  // TOOLBAR FEATURES
  // =========================================

  // 1. Zoom In
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 3)); // Max 3x zoom
  };

  // 2. Zoom Out
  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5)); // Min 0.5x zoom
  };

  // 3. Fullscreen Mode (Toggle)
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // 4. Download Image
  const handleDownload = (e) => {
    e.stopPropagation();
    const currentSrc = galleryImages[currentImageIndex];
    // Create a temporary anchor tag to trigger download
    const link = document.createElement("a");
    link.href = currentSrc;
    link.download = `event-image-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 5. Share Image (Web Share API)
  const handleShare = async (e) => {
    e.stopPropagation();
    const currentSrc = galleryImages[currentImageIndex];

    if (navigator.share) {
      try {
        // Fetch the image as a blob to share it properly on mobile
        const response = await fetch(currentSrc);
        const blob = await response.blob();
        const file = new File([blob], `event-${currentImageIndex + 1}.jpg`, {
          type: blob.type,
        });

        await navigator.share({
          title: "Development for Africa Foundation",
          text: "Check out this event photo from Development for Africa Foundation!",
          files: [file],
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error sharing:", error);
          // Fallback: Copy URL to clipboard if sharing fails
          fallbackShare(currentSrc);
        }
      }
    } else {
      // Fallback for desktop browsers without Web Share API
      fallbackShare(currentSrc);
    }
  };

  const fallbackShare = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Image URL copied to clipboard! You can paste it to share.");
      })
      .catch(() => {
        alert("Please copy the image URL manually to share.");
      });
  };

  // =========================================
  // KEYBOARD HANDLING
  // =========================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowLeft") goToPrevious(e);
      if (e.key === "ArrowRight") goToNext(e);
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") handleZoomIn(e);
      if (e.key === "-") handleZoomOut(e);
      if (e.key === "f" || e.key === "F") toggleFullscreen(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <main className="bg-white min-h-screen">
      {/* =========================================
          ORANGE BANNER
      ========================================== */}
      <div className="w-full bg-[#F95C19] py-4 text-center">
        <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide">
          Partner Foundation (NGO)
        </h2>
      </div>

      {/* =========================================
          BRANDING & TITLE SECTION
      ========================================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal direction="left" delay={100}>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#4A0E4E] leading-tight">
                  Development for Africa <br className="hidden md:block" />{" "}
                  Foundation
                </h1>
              </div>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div className="flex justify-center md:justify-end items-center">
                <div className="w-48 md:w-56">
                  <img
                    src="/images/hospital/WhatsApp-Image-2025-05-18-at-16.33.57_3ede22e2-e1747589020220.jpg"
                    alt="DAF Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* =========================================
    DARK PURPLE "ABOUT US" HERO WITH BACKGROUND IMAGE
========================================== */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_65aefcde.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3C0C50]/95 via-[#3C0C50]/80 to-[#3C0C50]/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" delay={100}>
              <div className="bg-white p-2 rounded-xl shadow-2xl transform -rotate-1 hover:rotate-0 transition duration-500">
                <img
                  src="/images/hospital/WhatsApp-Image-2025-05-18-at-16.48.07_c83255ef.jpg"
                  alt="Development for Africa Foundation"
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-lg"
                />
              </div>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  ABOUT US
                </h2>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Development for Africa Foundation (DAF) is a humanitarian and
                  development-focused NGO that partners with Ngozi Maternity and
                  Hospital Services.
                </p>
                <p className="text-purple-100/80 leading-relaxed">
                  Founded with a deep commitment to improving lives and
                  fostering healthier communities, DAF works across grassroots
                  communities in Nigeria to promote equitable access to
                  healthcare, education, and sustainable development.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* =========================================
          MISSION & VISION
      ========================================== */}
      <section className="py-20 bg-[#FAF0FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="up" delay={100}>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#4A0E4E] mb-4">
                  Mission Statement
                </h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  To foster sustainable development in Nigeria by enhancing
                  rural healthcare, empowering youth through skills training,
                  and implementing cross-sectoral initiatives that address
                  poverty, unemployment, and poor health outcomes.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#4A0E4E] mb-4">
                  Vision
                </h3>
                <p className="text-slate-700 leading-relaxed text-base">
                  A thriving African society where communities have access to
                  quality healthcare, empowered youth contribute to economic
                  growth, and development reaches even the most underserved
                  areas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================
          AREAS OF FOCUS
      ========================================== */}
      <section className="py-20 bg-[#FAF0FF] pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal direction="up" delay={100}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#4A0E4E] mb-8">
              Areas of Focus
            </h3>
          </Reveal>
          <div className="space-y-6">
            {[
              {
                num: "1.",
                title: "Rural Healthcare Improvement",
                desc: "– Provision of infrastructure, free medications, and clean water for rural health centers.",
              },
              {
                num: "2.",
                title: "Youth Empowerment & Skills Development",
                desc: "– Workshops and programs aimed at skill-building for youth, with a focus on girls from low-income backgrounds.",
              },
              {
                num: "3.",
                title: "Integrated Development Initiatives",
                desc: "– Projects spanning social welfare, technology, ecology, and media to tackle unemployment, poverty, and inadequate healthcare.",
              },
            ].map((item, index) => (
              <Reveal key={index} direction="up" delay={150 + index * 50}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 bg-white/60 p-5 rounded-xl border border-purple-100">
                  <span className="text-[#4A0E4E] font-bold text-lg shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <span className="font-bold text-[#4A0E4E] text-lg">
                      {item.title}
                    </span>
                    <span className="text-slate-600 ml-1">{item.desc}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          ACTIVITIES EVENT GALLERY 
      ========================================== */}
      <section className="py-20 bg-[#FAF0FF] pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal direction="up" delay={100}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#4A0E4E] mb-10">
              Activities Event Gallery
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryImages.map((src, index) => (
              <Reveal
                key={index}
                direction="up"
                delay={50 + index * 20}
                duration={600}
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="relative overflow-hidden rounded-xl aspect-square bg-white/80 shadow-sm hover:shadow-xl transition-all duration-300 group border border-purple-100 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#4A0E4E]/10 group-hover:bg-[#4A0E4E]/0 transition duration-300"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal direction="up">
            <div className="rounded-3xl bg-[#4A0E4E] p-10 md:p-14 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Be part of positive change
              </h2>
              <p className="mt-4 text-purple-100 max-w-2xl mx-auto leading-7">
                Explore opportunities to support initiatives focused on
                healthcare, education and sustainable community development.
              </p>
              <a
                href="/#contact"
                className="inline-flex mt-8 px-7 py-3 rounded-xl bg-white text-[#4A0E4E] font-bold hover:bg-purple-50 transition"
              >
                Get Involved
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          LIGHTBOX / IMAGE VIEWER MODAL
      ========================================== */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON (X) */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-bold transition z-50 bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
          >
            ✕
          </button>

          {/* LEFT ARROW */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white text-5xl md:text-6xl font-bold transition z-50 hover:scale-110"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white text-5xl md:text-6xl font-bold transition z-50 hover:scale-110"
          >
            ›
          </button>

          {/* THE IMAGE */}
          <div
            className="relative max-w-7xl w-full mx-4 h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in transition-all duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            />

            {/* IMAGE COUNTER */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1 rounded-full">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* =========================================
              TOOLBAR (Bottom Floating Menu)
          ========================================== */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-3 rounded-full border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ZOOM OUT */}
            <button
              onClick={handleZoomOut}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition flex items-center justify-center"
              title="Zoom Out (-)"
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
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            {/* ZOOM IN */}
            <button
              onClick={handleZoomIn}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition flex items-center justify-center"
              title="Zoom In (+)"
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
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {/* DIVIDER */}
            <div className="w-[1px] h-6 bg-white/20 mx-1"></div>

            {/* FULLSCREEN */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition flex items-center justify-center"
              title="Fullscreen (F)"
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
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>

            {/* DIVIDER */}
            <div className="w-[1px] h-6 bg-white/20 mx-1"></div>

            {/* DOWNLOAD */}
            <button
              onClick={handleDownload}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition flex items-center justify-center"
              title="Download Image"
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
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* SHARE (SOCIAL MEDIA) */}
            <button
              onClick={handleShare}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition flex items-center justify-center"
              title="Share Image"
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
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
