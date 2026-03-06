import React, { useState } from 'react';
import { getScholarshipAdvice } from '../geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const FinancialPlanning: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);
  const [formData, setFormData] = useState({ program: 'Undergraduate', score: '', subject: '' });

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.score || !formData.subject) return;
    setLoading(true);
    const result = await getScholarshipAdvice(formData.program, Number(formData.score), formData.subject);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Content Pillar */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#6B7280] uppercase mb-[16px] block">
              Financial Intelligence
            </span>
            <h2 className="text-[40px] font-semibold mb-[20px] text-[#111111] tracking-[-0.02em] leading-[1.2]">
              Smart Budgeting.
            </h2>
            <p className="text-[#4B5563] mb-10 text-[14px] leading-[1.6]">
              Strategic financial mapping for your international education. We provide institutional clarity on expenses and scholarship architecture.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'home_work', title: 'Managed Residence', desc: '£400 - £800 /month (Institutional Hall)' },
                { icon: 'account_balance_wallet', title: 'Operational Costs', desc: '£300 - £500 /month (Essential Subsistence)' },
                { icon: 'auto_awesome', title: 'Scholarship Portfolios', desc: 'Access to 100% tuition coverage protocols' }
              ].map((item, i) => (
                <div key={i} className="group p-5 rounded-2xl border border-border bg-white hover:border-black/10 hover:shadow-sm transition-all duration-300">
                  <div className="flex gap-5 items-center">
                    <div className="w-10 h-10 bg-secondary/30 rounded-lg flex-shrink-0 flex items-center justify-center text-[#6B7280] group-hover:text-[#111111] transition-colors">
                      <span className="material-icons-outlined text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[14px] text-[#111111] mb-0.5 tracking-tight">{item.title}</h4>
                      <p className="text-[13px] text-[#4B5563]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Engine */}
          <div className="lg:col-span-7">
            <div className="p-10 bg-white border border-border rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 rounded-bl-full -mr-12 -mt-12 opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-secondary/50 rounded-lg flex items-center justify-center text-[#111111]">
                    <span className="material-icons-outlined text-sm">analytics</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#111111] tracking-tight">Institutional Scholarship Engine</h3>
                </div>

                <form className="space-y-6" onSubmit={handleCheck}>
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider px-1">Target Program Level</label>
                    <select
                      value={formData.program}
                      onChange={e => setFormData({ ...formData, program: e.target.value })}
                      className="w-full bg-secondary/10 border border-border rounded-lg px-4 py-3 text-[14px] text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all appearance-none"
                    >
                      <option>Undergraduate</option>
                      <option>Postgraduate / Masters</option>
                      <option>Doctorate / PhD</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider px-1">Academic Score (%)</label>
                      <input
                        value={formData.score}
                        onChange={e => setFormData({ ...formData, score: e.target.value })}
                        className="w-full bg-secondary/10 border border-border rounded-lg px-4 py-3 text-[14px] text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all"
                        placeholder="e.g. 85"
                        type="number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider px-1">Subject Major</label>
                      <input
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-secondary/10 border border-border rounded-lg px-4 py-3 text-[14px] text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111] transition-all"
                        placeholder="e.g. Computer Science"
                        type="text"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {advice && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-6 bg-emerald-50/50 rounded-xl border border-emerald-100/50"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="material-icons-outlined text-emerald-600 text-sm">verified_user</span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Eligibility Determination:</span>
                        </div>
                        <div className="text-[13px] text-emerald-900 leading-relaxed font-medium">
                          {advice.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    disabled={loading}
                    className="btn btn-primary w-full h-12 text-[11px] tracking-widest uppercase mt-6 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                    ) : 'Analyze Strategic Eligibility'}
                  </button>
                  <p className="text-[11px] text-center text-[#6B7280] mt-6 italic">Verified assessment powered by Admivo Institutional AI.</p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialPlanning;
