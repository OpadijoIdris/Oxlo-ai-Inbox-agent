"use client";

import ThemeToggle from "./ThemeToggle";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, MessageSquarePlus, BarChart, History, Settings, LogOut } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("inboxpilot_token");
    router.push("/login");
  };

  const navLinks = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Analyze", href: "/analyze", icon: MessageSquarePlus },
    { label: "Analytics", href: "/analytics", icon: BarChart },
    { label: "History", href: "/history", icon: History },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="bg-nav border-b border-nav-border px-6 py-4 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
          InboxPilot AI
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 text-sm font-medium transition-all hover:text-accent group ${isActive ? "text-accent" : "text-foreground/70"
                  }`}
              >
                <Icon size={18} className={`transition-transform group-hover:scale-110 ${isActive ? "text-accent" : ""}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="w-px h-6 bg-nav-border hidden sm:block" />
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-sm font-medium text-foreground/70 hover:text-red-500 transition-colors"
        >
          <LogOut size={18} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
