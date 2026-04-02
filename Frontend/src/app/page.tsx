"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic tracking-tight">
          InboxPilot AI
        </div>
        <div className="space-x-4">
          <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">
            Login
          </Link>
          <Link href="/register" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition transform hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
          <Sparkles size={14} />
          <span>Powered by Oxlo.ai</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent leading-[1.1]">
          Master your customer <br /> 
          <span className="text-blue-600">support with AI.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed">
          InboxPilot AI analyzes support messages, detects urgency, and drafts perfect replies in seconds. Focus on growth, not tickets.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/register" className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-300 hover:bg-blue-700 transition transform hover:-translate-y-1 group">
            Start Free Analysis 
            <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" size={20} />
          </Link>
          <Link href="/login" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-sm">
            Sign In
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {[
            {
              title: "Instant Insights",
              desc: "Identify sentiment and category automatically using state-of-the-art LLMs.",
              icon: Zap,
              color: "text-amber-500"
            },
            {
              title: "Urgency Detection",
              desc: "Never miss a critical issue. High-urgency messages are flagged instantly.",
              icon: ShieldCheck,
              color: "text-green-500"
            },
            {
              title: "SaaS Dashboard",
              desc: "Comprehensive analytics to monitor your support team's performance.",
              icon: BarChart3,
              color: "text-blue-500"
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-left group">
              <div className={`p-4 rounded-2xl bg-white shadow-sm inline-block mb-6 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>&copy; 2026 InboxPilot AI - Built for the Oxlo Hackathon.</p>
      </footer>
    </div>
  );
}
