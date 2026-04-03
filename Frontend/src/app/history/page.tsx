"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { 
  Search, 
  Filter, 
  ChevronRight, 
  MessageSquare,
  AlertCircle,
  Calendar,
  Layers,
  Sparkle
} from "lucide-react";
import Link from "next/link";

interface Analysis {
  id: string;
  category: string;
  urgency: string;
  sentiment: string;
  originalMessage: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterUrgency, setFilterUrgency] = useState("All");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get("/analysis");
        setHistory(response.data);
      } catch (error) {
        console.error("Failed to fetch history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const filteredHistory = history.filter((item) => {
    const matchesSearch = item.originalMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterUrgency === "All" || item.urgency === filterUrgency;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 pt-24">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analysis History</h1>
            <p className="text-foreground/50 mt-1">Review and manage your past AI insights.</p>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <input
                type="text"
                placeholder="Search history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-foreground/[0.03] border border-border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/50 w-full md:w-64 text-foreground placeholder-foreground/20"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
              <select
                className="pl-10 pr-4 py-2 bg-foreground/[0.03] border border-border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none text-foreground"
                value={filterUrgency}
                onChange={(e) => setFilterUrgency(e.target.value)}
              >
                <option value="All" className="bg-background">All Urgency</option>
                <option value="High" className="bg-background">High</option>
                <option value="Medium" className="bg-background">Medium</option>
                <option value="Low" className="bg-background">Low</option>
              </select>
            </div>
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20 text-foreground/30 animate-pulse">Loading history...</div>
        ) : filteredHistory.length > 0 ? (
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-foreground/[0.02] border-b border-border">
                    <th className="px-6 py-4 text-xs font-bold text-foreground/40 uppercase tracking-widest">Message Preview</th>
                    <th className="px-6 py-4 text-xs font-bold text-foreground/40 uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-xs font-bold text-foreground/40 uppercase tracking-widest">Urgency</th>
                    <th className="px-6 py-4 text-xs font-bold text-foreground/40 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-foreground/[0.01] transition-colors group">
                      <td className="px-6 py-6">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-foreground/[0.05] rounded-lg text-foreground/30 group-hover:text-blue-500 transition-colors">
                            <MessageSquare size={18} />
                          </div>
                          <span className="text-sm font-medium text-foreground/80 line-clamp-1 max-w-[300px]">
                            {item.originalMessage}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center text-sm font-semibold text-blue-500">
                          <Layers size={14} className="mr-1.5" /> {item.category}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          item.urgency === 'High' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 
                          item.urgency === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                          'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                        }`}>
                          {item.urgency}
                        </span>
                      </td>
                      <td className="px-6 py-6 text-sm text-foreground/50 flex items-center">
                        <Calendar size={14} className="mr-1.5" />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-6 text-right">
                        <Link href={`/history/${item.id}`} className="p-2 border border-border rounded-lg inline-flex items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition group-hover:shadow-md">
                          <ChevronRight size={18} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-40 p-10 bg-card rounded-3xl border border-dashed border-border">
            <Sparkle className="mx-auto text-foreground/10 mb-4" size={48} />
            <h3 className="text-xl font-bold text-foreground/30">No matching history found.</h3>
            <p className="text-foreground/20 text-sm mt-1">Try adjusting your filters or search query.</p>
          </div>
        )}
      </main>
    </div>
  );
}
