import React from "react";

// Define the props interface with proper types
interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  return (
    <nav className="flex justify-center mb-8">
      <div className="flex items-center space-x-4 bg-white p-2 rounded-full shadow-lg border border-gray-200">
        <button
          onClick={() => setActivePage("home")}
          className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out  ${
            activePage === "home"
              ? "bg-gradient-to-r from-black to-black text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100 hover:text-black"
          }`}
          aria-current={activePage === "home" ? "page" : undefined}
        >
          <span className="relative z-10">Home</span>
          {activePage === "home" && (
            <span className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></span>
          )}
        </button>
        <button
          onClick={() => setActivePage("projects")}
          className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ease-in-out  ${
            activePage === "projects"
              ? "bg-gradient-to-r from-black to-black text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100 hover:text-black"
          }`}
          aria-current={activePage === "projects" ? "page" : undefined}
        >
          <span className="relative z-10">Projects</span>
          {activePage === "projects" && (
            <span className="absolute inset-0 rounded-full bg-blue-800 opacity-20 animate-pulse"></span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;