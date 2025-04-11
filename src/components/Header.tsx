import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const games = [
    { id: "pixel-battle", name: "Black Hole" },
    { id: "puzzle-quest", name: "Capture The Glitch" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/game/pixel-battle" className="flex items-center gap-2">
            <Sparkles className="text-purple-400 h-6 w-6 animate-pulse" />
            <span className="text-xl md:text-2xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              GameZone
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex flex-wrap justify-center gap-x-6">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    to={`/game/${game.id}`}
                    className={`relative group text-base lg:text-lg font-medium transition-colors whitespace-nowrap
                      ${
                        location.pathname === `/game/${game.id}`
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                  >
                    <span className="relative z-10">{game.name}</span>
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-0.5 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 bg-gradient-to-r from-purple-500 to-cyan-500 ${
                        location.pathname === `/game/${game.id}`
                          ? "scale-x-100"
                          : ""
                      }`}
                    ></span>
                    {location.pathname === `/game/${game.id}` && (
                      <span className="absolute -inset-x-2 -inset-y-2 bg-white/5 rounded-lg blur-sm -z-10"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl py-4 px-6 md:hidden border-t border-purple-900/50">
          <nav className="flex flex-col space-y-4">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className={`text-lg ${
                  location.pathname === `/game/${game.id}`
                    ? "text-white font-medium"
                    : "text-gray-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {game.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
