"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, History, MessageSquarePlus, LogOut, BarChart, Settings } from "lucide-react";

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
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">
          InboxPilot AI
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
      >
        <LogOut size={18} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
