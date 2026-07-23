import React from "react";

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, setActivePage }) => {
  const linkClass = (page: string) =>
    `text-sm transition-colors duration-200 ${
      activePage === page
        ? "text-black font-medium"
        : "text-gray-400 hover:text-black"
    }`;

  return (
    <nav className="flex items-center gap-6 mb-10">
      <button onClick={() => setActivePage("home")} className={linkClass("home")}>
        Home
      </button>
      <button
        onClick={() => {
          setActivePage("projects");
          window.gtag?.("event", "nav_click", { nav_item: "projects" });
        }}
        className={linkClass("projects")}
      >
        Projects
      </button>
    </nav>
  );
};

export default Navigation;
