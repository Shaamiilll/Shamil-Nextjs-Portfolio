import React from "react";

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  return (
    <nav className="flex justify-center mb-8 ">
      <div className="relative flex items-center space-x-1 bg-white/5 backdrop-blur-2xl p-2 rounded-full shadow-xl border border-white/10">
        {/* Subtle highlight shimmer */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
        </div>

        <button
          onClick={() => setActivePage("home")}
          className={`relative z-10 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out ${
            activePage === "home"
              ? "text-black drop-shadow-md"
              : "text-black/70 hover:text-black"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage("projects")}
          className={`relative z-10 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-out ${
            activePage === "projects"
              ? "text-black drop-shadow-md"
              : "text-black/70 hover:text-black"
          }`}
        >
          Projects
        </button>

        {/* Sliding active pill with enhanced glass effect */}
        <div
          className={`absolute top-2 bottom-2 left-2 right-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 ease-out pointer-events-none
            ${activePage === "home" ? "translate-x-0" : "translate-x-full"}`}
          style={{
            width: "calc(50% - 0.5rem)",
          }}
        >
          {/* Inner highlight for liquid shine */}
          <div className="absolute inset-0 rounded-full opacity-40 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;