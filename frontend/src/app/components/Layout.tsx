import { Link, Outlet, useLocation } from "react-router";
import { Leaf, Camera, BookOpen, Info, Home } from "lucide-react";
import clsx from "clsx";

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Predict", path: "/predict", icon: Camera },
    { name: "Plants", path: "/plants", icon: BookOpen },
    { name: "About", path: "/about", icon: Info },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center sm:p-6 lg:p-8">
      {/* Mobile App Container */}
      <div className="w-full sm:max-w-md bg-background min-h-screen sm:min-h-0 sm:h-[850px] sm:rounded-[2.5rem] sm:shadow-2xl flex flex-col relative overflow-hidden sm:border-[8px] sm:border-gray-900">
        
        {/* Mobile Status Bar / App Header */}
        <header className="bg-primary text-primary-foreground px-5 py-4 shadow-md z-10 shrink-0 flex items-center justify-between rounded-b-2xl">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none tracking-wide">AgroAI</h1>
              <p className="text-primary-foreground/80 text-[10px] mt-0.5 uppercase tracking-wider">Crop Predictor</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <span className="text-xs font-bold">FA</span>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto pb-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="p-4 sm:p-5">
            <Outlet />
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full bg-card border-t border-border pb-safe pt-2 px-6 pb-4 sm:pb-6 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-3xl z-20">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center gap-1 p-2 w-16"
              >
                <div className={clsx(
                  "p-2.5 rounded-2xl transition-all duration-300",
                  active ? "bg-primary/10 text-primary scale-110" : "text-muted-foreground hover:text-foreground"
                )}>
                  <Icon className={clsx("w-5 h-5", active && "fill-primary/20")} />
                </div>
                <span className={clsx(
                  "text-[10px] font-semibold transition-colors",
                  active ? "text-primary" : "text-muted-foreground"
                )}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
