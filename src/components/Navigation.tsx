import React from "react";

// Define the props interface with proper types
interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={() => setActivePage("home")}
        className={`px-4 py-2 mx-1 rounded-2xl shadow-md transition-colors ${
          activePage === "home" 
            ? "bg-black text-white" 
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Home
      </button>
      <button
        onClick={() => setActivePage("projects")}
        className={`px-4 py-2 mx-1 rounded-2xl shadow-md transition-colors ${
          activePage === "projects" 
            ? "bg-black text-white" 
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Projects
      </button>
    </div>
  );
};

export default Navigation;