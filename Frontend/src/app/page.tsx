"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/20 transition-colors duration-300">
      {/* Navbar - Using the same brand style but without the full nav for landing simplicity */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic tracking-tight">
          InboxPilot AI
        </div>
        <div className="space-x-6 flex items-center">
          <Link href="/login" className="text-sm font-bold text-foreground/50 hover:text-blue-500 transition-colors">
            Login
          </Link>
          <Link href="/register" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition transform hover:-translate-y-0.5 active:scale-95">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-10 animate-pulse">
          <Sparkles size={14} />
          <span>Powered by Oxlo.ai</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-10 leading-[1.05]">
          Master your customer <br />
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">support with AI.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-foreground/50 mb-14 leading-relaxed">
          InboxPilot AI analyzes support messages, detects urgency, and drafts perfect replies in seconds. Focus on growth, not tickets.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link href="/register" className="w-full sm:w-auto flex items-center justify-center px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:bg-blue-500 transition transform hover:-translate-y-1 group active:scale-95">
            Start Free Analysis
            <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" size={22} />
          </Link>
          <Link href="/login" className="w-full sm:w-auto px-12 py-5 bg-card text-foreground border border-border rounded-2xl font-bold text-lg hover:bg-foreground/3 transition shadow-sm active:scale-95">
            Sign In
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-48">
          {[
            {
              title: "Instant Insights",
              desc: "Identify sentiment and category automatically using state-of-the-art LLMs.",
              icon: Zap,
              color: "text-amber-500",
              bg: "bg-amber-500/10"
            },
            {
              title: "Urgency Detection",
              desc: "Never miss a critical issue. High-urgency messages are flagged instantly.",
              icon: ShieldCheck,
              color: "text-emerald-500",
              bg: "bg-emerald-500/10"
            },
            {
              title: "SaaS Dashboard",
              desc: "Comprehensive analytics to monitor your support team's performance.",
              icon: BarChart3,
              color: "text-blue-500",
              bg: "bg-blue-500/10"
            }
          ].map((feature, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-border bg-card/50 hover:bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity scale-150 rotate-12">
                <feature.icon size={150} />
              </div>

              <div className={`p-4 rounded-2xl ${feature.bg} ${feature.color} inline-block mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/50 leading-relaxed text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-16 text-center text-foreground/30 text-sm">
        <p className="mb-2">&copy; 2026 InboxPilot AI - Built for the Oxlo Hackathon.</p>
        <p className="italic">Elevating customer experience through intelligent automation.</p>
      </footer>
    </div>
  );
}