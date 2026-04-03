"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Save, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Info
} from "lucide-react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";

const SettingsPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    supportTone: "Friendly but professional",
    refundPolicy: "",
    deliveryPolicy: "",
    businessHours: "",
    faq: "",
    escalationInstructions: "",
    brandVoiceExamples: "",
    restrictedPhrases: ""
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/business-profile");
      if (data) {
        setFormData({
          companyName: data.companyName || "",
          companyDescription: data.companyDescription || "",
          supportTone: data.supportTone || "Friendly but professional",
          refundPolicy: data.refundPolicy || "",
          deliveryPolicy: data.deliveryPolicy || "",
          businessHours: data.businessHours || "",
          faq: data.faq || "",
          escalationInstructions: data.escalationInstructions || "",
          brandVoiceExamples: data.brandVoiceExamples || "",
          restrictedPhrases: data.restrictedPhrases || ""
        });
      }
    } catch (err: any) {
      console.error("Failed to fetch profile", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess(false);

    try {
      await api.post("/business-profile", formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12 pt-24">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Business Intelligence
            </h1>
            <p className="text-foreground/50 mt-2 text-lg">
              Set the foundation for your AI support copilot.
            </p>
          </motion.div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-center gap-3 text-emerald-600 dark:text-emerald-400"
              >
                <CheckCircle2 size={20} />
                <span>Business profile updated successfully!</span>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl flex items-center gap-3 text-rose-500"
              >
                <AlertCircle size={20} />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section 1: Company Basics */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500">
              <Building2 size={120} />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-500">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Company Basics</h3>
                <p className="text-foreground/40 text-sm">Essential identity details.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. SwiftCart"
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-foreground/20 text-foreground"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Description</label>
                <textarea
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  placeholder="Tell the AI what your business does..."
                  rows={3}
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-foreground/20 resize-none text-foreground"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 2: Policies */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border backdrop-blur-sm relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-500">
              <ShieldCheck size={120} />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Customer Policies</h3>
                <p className="text-foreground/40 text-sm">Rules the AI must follow.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Refund Policy</label>
                <textarea
                  name="refundPolicy"
                  value={formData.refundPolicy}
                  onChange={handleChange}
                  placeholder="e.g. 30-day money-back guarantee..."
                  rows={2}
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-foreground/20 resize-none text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Delivery Policy</label>
                <textarea
                  name="deliveryPolicy"
                  value={formData.deliveryPolicy}
                  onChange={handleChange}
                  placeholder="e.g. Ships within 2 business days..."
                  rows={2}
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-foreground/20 resize-none text-foreground"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  <Clock size={14} /> Business Hours
                </label>
                <input
                  type="text"
                  name="businessHours"
                  value={formData.businessHours}
                  onChange={handleChange}
                  placeholder="e.g. Mon-Fri, 9 AM - 6 PM EST"
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all placeholder:text-foreground/20 text-foreground"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 3: Brand Voice */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border backdrop-blur-sm relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 text-pink-500">
              <MessageSquare size={120} />
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-500">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Brand Voice & AI</h3>
                <p className="text-foreground/40 text-sm">How the AI sounds to customers.</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Support Tone</label>
                <select
                  name="supportTone"
                  value={formData.supportTone}
                  onChange={handleChange}
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all appearance-none cursor-pointer text-foreground"
                >
                  <option className="bg-background" value="Friendly but professional">Friendly but professional</option>
                  <option className="bg-background" value="Highly Formal">Highly Formal</option>
                  <option className="bg-background" value="Upbeat & Energetic">Upbeat & Energetic</option>
                  <option className="bg-background" value="Empathetic & Caring">Empathetic & Caring</option>
                  <option className="bg-background" value="Minimalist & Direct">Minimalist & Direct</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Brand Reply Examples</label>
                  <textarea
                    name="brandVoiceExamples"
                    value={formData.brandVoiceExamples}
                    onChange={handleChange}
                    placeholder="Paste some ideal replies here..."
                    rows={4}
                    className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all placeholder:text-foreground/20 resize-none text-sm text-foreground"
                  />
                  <p className="text-xs text-foreground/30">Helps the AI match your specific wording.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-rose-500">Restricted Phrases</label>
                  <textarea
                    name="restrictedPhrases"
                    value={formData.restrictedPhrases}
                    onChange={handleChange}
                    placeholder="e.g. 'We cannot help', 'No refunds'..."
                    rows={4}
                    className="w-full bg-foreground/3 border border-rose-500/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all placeholder:text-foreground/20 resize-none text-sm text-foreground"
                  />
                  <p className="text-xs text-foreground/30">Phrases the AI will strictly avoid.</p>
                </div>
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  Escalation Instructions
                </label>
                <textarea
                  name="escalationInstructions"
                  value={formData.escalationInstructions}
                  onChange={handleChange}
                  placeholder="When should the AI stop and hand over to a human?"
                  rows={2}
                  className="w-full bg-foreground/3 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all placeholder:text-foreground/20 resize-none text-foreground"
                />
              </div>
            </div>
          </motion.section>

          {/* Save Button */}
          <div className="flex justify-end pt-4 pb-12">
            <button
              type="submit"
              disabled={saving}
              className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {saving ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Save size={20} className="group-hover:scale-110 transition-transform" />
              )}
              <span>{saving ? "Optimizing Profile..." : "Update Business Identity"}</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SettingsPage;
