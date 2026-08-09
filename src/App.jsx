import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import NgoziInitiative from "./pages/NgoziInitiative";
import DevelopmentAfricaFoundation from "./pages/DevelopmentAfricaFoundation";
import Recruitment from "./pages/Recruitment";

// Scroll to top whenever the route changes
function ScrollToTop() {
  // 1. We need to read 'search' as well to get the redirect query
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 2. If 404.html redirected us with ?p=/recruitment, fix the URL silently
    const params = new URLSearchParams(search);
    const redirectPath = params.get("p");

    if (redirectPath) {
      // Updates the browser URL without reloading the page
      window.history.replaceState(null, "", redirectPath);
    }

    // 3. Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/NMHS">
      <TopBar />
      <Navbar />

      <main className="pt-[70px]">
        <ScrollToTop />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Foundation Pages */}
          <Route
            path="/foundation/ngozi-initiative"
            element={<NgoziInitiative />}
          />

          <Route
            path="/foundation/development-africa"
            element={<DevelopmentAfricaFoundation />}
          />

          {/* Recruitment */}
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react"; // <--- Import useEffect

// import TopBar from "./components/layout/TopBar";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./pages/Home";
// import NgoziInitiative from "./pages/NgoziInitiative";
// import DevelopmentAfricaFoundation from "./pages/DevelopmentAfricaFoundation";
// import Recruitment from "./pages/Recruitment";

// // 1. Create a custom component to handle scrolling
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // This forces the browser to scroll to the top (0, 0)
//     // every time the pathname changes (new page load).
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <TopBar />
//       <Navbar />

//       <main className="pt-[70px]">
//         {/* 2. Add the ScrollToTop component here */}
//         <ScrollToTop />

//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<Home />} />

//           {/* Foundation Pages */}
//           <Route
//             path="/foundation/ngozi-initiative"
//             element={<NgoziInitiative />}
//           />
//           <Route
//             path="/foundation/development-africa"
//             element={<DevelopmentAfricaFoundation />}
//           />

//           {/* RECRUITMENT PAGE */}
//           <Route path="/recruitment" element={<Recruitment />} />
//         </Routes>
//       </main>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
