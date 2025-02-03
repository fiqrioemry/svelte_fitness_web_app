import { cn } from "@/lib/utils.js";
import { navigationMenu } from "../../config";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  const isSeekerOrEmployerPath =
    location.pathname.startsWith("/seeker") ||
    location.pathname.startsWith("/employer");

  useEffect(() => {
    if (isSeekerOrEmployerPath) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSeekerOrEmployerPath]);

  return (
    <header
      className={`w-full bg-white z-50 transition-transform duration-300 border-b ${
        // Jika di halaman seeker/employer, header tidak fixed
        isSeekerOrEmployerPath ? "static" : "fixed top-0"
      } ${
        // Jika bukan di halaman seeker/employer dan hidden true, sembunyikan header
        !isSeekerOrEmployerPath && hidden
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-2 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-semibold capitalize text-2xl tracking-[2px]"
          >
            Job
            <span className="font-bold text-blue-500">NEST</span>
          </Link>

          <nav className="space-x-3">
            {navigationMenu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={item.path}
                  className={cn(
                    "font-medium capitalize",
                    isActive ? "text-blue-500" : "text-gray-600"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="space-x-3">
            <Link to="/auth/login">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
