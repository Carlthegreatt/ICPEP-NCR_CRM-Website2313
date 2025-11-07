import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/join-us", label: "Join Us" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-4 flex h-16 items-center justify-between rounded-xl border border-border/60 bg-background/50 backdrop-blur supports-backdrop-filter:bg-background/40">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-3 py-2"
              aria-label="ICpEP.SE NCR Home"
            >
              <img
                src="/ICpEP.SE Logo 3.png"
                alt="ICpEP.SE NCR"
                className="h-8 w-auto select-none"
                draggable="false"
              />
              <span className="sr-only">ICpEP.SE NCR</span>

              <span className="text-sm font-semibold tracking-wider text-foreground/90 group-hover:text-foreground text-glow-soft">
                ICpEP.SE NCR
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${
                    active
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  } px-3 py-2 text-sm transition-colors`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="#login"
              className="hidden md:inline-flex items-center mr-4 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/60 transition-colors"
            >
              Login
            </Link>

            <button
              aria-label="Toggle menu"
              className="md:hidden px-3 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`absolute w-full ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } md:hidden transition-opacity duration-200`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 overflow-hidden rounded-xl border border-border/60 bg-background/80 backdrop-blur">
            <nav className="flex flex-col py-2">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`${
                      active
                        ? "text-foreground"
                        : "text-foreground/80 hover:text-foreground"
                    } px-4 py-3 text-sm transition-colors`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
