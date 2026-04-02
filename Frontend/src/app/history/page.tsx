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
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Analysis History</h1>
            <p className="text-slate-600 mt-1">Review and manage your past AI insights.</p>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search history..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                value={filterUrgency}
                onChange={(e) => setFilterUrgency(e.target.value)}
              >
                <option value="All">All Urgency</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20 text-slate-400 animate-pulse">Loading history...</div>
        ) : filteredHistory.length > 0 ? (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Message Preview</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Urgency</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-6">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-slate-100 rounded-lg text-slate-400">
                            <MessageSquare size={18} />
                          </div>
                          <span className="text-sm font-medium text-slate-700 line-clamp-1 max-w-[300px]">
                            {item.originalMessage}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center text-sm font-semibold text-blue-600">
                          <Layers size={14} className="mr-1.5" /> {item.category}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.urgency === 'High' ? 'bg-red-100 text-red-700' : 
                          item.urgency === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {item.urgency}
                        </span>
                      </td>
                      <td className="px-6 py-6 text-sm text-slate-500 flex items-center">
                        <Calendar size={14} className="mr-1.5" />
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-6 text-right">
                        <Link href={`/history/${item.id}`} className="p-2 border border-slate-200 rounded-lg inline-flex items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition group-hover:shadow-md">
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
          <div className="text-center py-40 p-10 bg-white rounded-3xl border border-dashed border-slate-200">
            <Sparkle className="mx-auto text-slate-200 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-400">No matching history found.</h3>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your filters or search query.</p>
          </div>
        )}
      </main>
    </div>
  );
}
