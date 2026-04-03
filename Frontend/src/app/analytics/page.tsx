"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap, 
  Clock, 
  Filter, 
  Download,
  AlertTriangle,
  Smile,
  Frown,
  Meh,
  Calendar
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

import { useTheme } from "next-themes";

const COLORS = ["#6366f1", "#818cf8", "#a78bfa", "#c084fc", "#e879f9"];

const AnalyticsPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data: stats } = await api.get("/analytics");
      setData(stats);
    } catch (err) {
      console.error("Failed to fetch analytics", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(99,102,241,0.3)]"></div>
      </div>
    );
  }

  const chartTextColor = theme === "dark" ? "#94a3b8" : "#475569";
  const gridColor = theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)";
  const tooltipBg = theme === "dark" ? "#0f172a" : "#ffffff";
  const tooltipBorder = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)";

  const sentimentIcon = (name: string) => {
    if (name.toLowerCase().includes("frust") || name.toLowerCase().includes("angry")) return <Frown className="text-rose-500" size={14} />;
    if (name.toLowerCase().includes("happy") || name.toLowerCase().includes("good")) return <Smile className="text-emerald-500" size={14} />;
    return <Meh className="text-amber-500" size={14} />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 pt-24">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Performance Intelligence
            </h1>
            <p className="text-foreground/50 mt-2 text-lg">
              Data-driven insights from your support copilot.
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-foreground/[0.05] border border-border rounded-xl text-sm transition-all text-foreground/70">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
              <Download size={16} /> Export Report
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Tickets", value: data.totalAnalyses, icon: BarChart3, color: "text-blue-500", bg: "bg-blue-500/10" },
            { label: "High Urgency %", value: `${data.highUrgencyPercentage}%`, icon: AlertTriangle, color: "text-rose-500", bg: "bg-rose-500/10" },
            { label: "Frustrated Customer %", value: `${data.angrySentimentPercentage}%`, icon: Frown, color: "text-amber-500", bg: "bg-amber-500/10" },
            { label: "Avg Confidence", value: `${data.averageConfidence}%`, icon: Zap, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm group hover:border-accent/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={20} />
                </div>
                <div className="text-[10px] uppercase font-mono text-foreground/30 font-bold tracking-tighter">Live Insight</div>
              </div>
              <h4 className="text-3xl font-bold mb-1">{stat.value}</h4>
              <p className="text-foreground/50 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Area Chart */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <TrendingUp className="text-indigo-500" size={20} /> Support Requests
              </h3>
              <div className="text-xs text-foreground/30 font-mono">LAST 30 DAYS</div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.analysesPerDay}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    stroke={chartTextColor} 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(val) => new Date(val).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis stroke={chartTextColor} fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}`, borderRadius: "12px", fontSize: "12px" }}
                    itemStyle={{ color: "#6366f1", fontWeight: "bold" }}
                  />
                  <Area type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorCount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
             className="p-8 rounded-3xl bg-card border border-border backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Users className="text-indigo-500" size={20} /> Common Issues
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.categoryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.categoryDistribution.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}`, borderRadius: "12px", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {data.categoryDistribution.slice(0, 3).map((item: any, i: number) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-foreground/50">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                    {item.name}
                  </div>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Bar Chart */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="p-8 rounded-3xl bg-card border border-border backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Smile className="text-amber-500" size={20} /> Customer Sentiment
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.sentimentDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis dataKey="name" stroke={chartTextColor} fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke={chartTextColor} fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.05)' }}
                    contentStyle={{ backgroundColor: tooltipBg, border: `1px solid ${tooltipBorder}`, borderRadius: "12px", fontSize: "12px" }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {data.sentimentDistribution.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Heatmap Custom Implementation */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="p-8 rounded-3xl bg-card border border-border backdrop-blur-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Clock className="text-emerald-500" size={20} /> Hourly Complaint Map
              </h3>
              <div className="text-[10px] text-foreground/30 font-mono">PEAK HOURS</div>
            </div>
            
            <div className="flex-1 overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="flex mb-2">
                  <div className="w-20" />
                  {["00", "04", "08", "12", "16", "20"].map(h => (
                    <div key={h} className="flex-1 text-[10px] text-foreground/40 font-mono">{h}:00</div>
                  ))}
                </div>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                  <div key={day} className="flex items-center gap-1 mb-1">
                    <div className="w-20 text-[10px] text-foreground/40 font-mono uppercase">{day.slice(0, 3)}</div>
                    <div className="flex-1 flex gap-1">
                      {Array.from({ length: 24 }).map((_, hour) => {
                        const cellData = data.hourlyHeatmap.find((h: any) => h.day === day && h.hour === hour);
                        const count = cellData?.count || 0;
                        const opacity = Math.min(0.2 + (count * 0.2), 1);
                        const baseOpacity = theme === 'dark' ? 0.05 : 0.1;
                        
                        return (
                          <div 
                            key={hour}
                            title={`${day} @ ${hour}:00 - ${count} issues`}
                            className="flex-1 h-6 rounded-sm bg-indigo-500 transition-all hover:ring-2 hover:ring-indigo-400"
                            style={{ opacity: count > 0 ? opacity : baseOpacity }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-end gap-3 text-[10px] text-foreground/40">
              <span>Less</span>
              <div className="flex gap-1">
                 <div className="w-3 h-3 rounded-sm bg-indigo-500 opacity-[0.1]" />
                 <div className="w-3 h-3 rounded-sm bg-indigo-500 opacity-[0.3]" />
                 <div className="w-3 h-3 rounded-sm bg-indigo-500 opacity-[0.6]" />
                 <div className="w-3 h-3 rounded-sm bg-indigo-500 opacity-[1]" />
              </div>
              <span>More</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
