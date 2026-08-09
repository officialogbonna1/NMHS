import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the entire page (including images) to load,
    // or force it to hide after 2 seconds, whichever happens first.
    const handleLoad = () => setIsLoading(false);

    // Fallback timeout: ensures the screen doesn't freeze if images take too long
    const timer = setTimeout(() => setIsLoading(false), 2500);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        {/* ANIMATED PULSING LOGO */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-[#82AEFB]/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-[#82AEFB]/40 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-[#82AEFB] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            +
          </div>
        </div>

        {/* LOADING TEXT WITH HEARTBEAT */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-lg font-bold text-[#031b42] tracking-wide">
            NMHS
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-blue-500 font-medium tracking-widest uppercase">
            <span>Loading</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-[#82AEFB] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1 h-1 bg-[#82AEFB] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1 h-1 bg-[#82AEFB] rounded-full animate-bounce"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
