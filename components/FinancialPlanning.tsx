
import React, { useState } from 'react';
import { getScholarshipAdvice } from '../geminiService';

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
    <section className="py-24 px-6 bg-[#FFF9E6]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Financial Planning</h2>
          <p className="text-slate-600 mb-12 text-lg">Understanding your costs is the first step toward a successful journey. Here's a breakdown of what to expect for your UK experience.</p>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md">
                <span className="material-icons-outlined text-primary text-2xl">home</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-900">Accommodation</h4>
                <p className="text-slate-500">£400 - £800 /month (Shared housing or Halls)</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md">
                <span className="material-icons-outlined text-primary text-2xl">restaurant</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-900">Living Expenses</h4>
                <p className="text-slate-500">£300 - £500 /month (Food, Travel, Social)</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md">
                <span className="material-icons-outlined text-primary text-2xl">savings</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-slate-900">Scholarships Available</h4>
                <p className="text-slate-500">Up to 100% tuition coverage for outstanding profiles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
          <h3 className="text-2xl font-bold mb-8 text-slate-900">Quick Scholarship Check</h3>
          <form className="space-y-6" onSubmit={handleCheck}>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Target Program</label>
              <select 
                value={formData.program}
                onChange={e => setFormData({...formData, program: e.target.value})}
                className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-slate-700"
              >
                <option>Undergraduate</option>
                <option>Postgraduate / Masters</option>
                <option>Doctorate / PhD</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Academic Score (%)</label>
                <input 
                  value={formData.score}
                  onChange={e => setFormData({...formData, score: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-slate-700" 
                  placeholder="e.g. 85" 
                  type="number" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Subject Interest</label>
                <input 
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary text-slate-700" 
                  placeholder="e.g. Engineering" 
                  type="text" 
                />
              </div>
            </div>
            
            {advice && (
              <div className="p-5 bg-primary/5 rounded-2xl border border-primary/20 animate-fade-in">
                <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">AI Suggestion:</p>
                <div className="text-sm text-slate-600 prose prose-slate">
                  {advice.split('\n').map((line, i) => <p key={i} className="mb-1">{line}</p>)}
                </div>
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full py-5 bg-primary text-slate-900 font-bold rounded-2xl mt-4 hover:shadow-xl hover:shadow-primary/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                  Analyzing...
                </>
              ) : 'Find My Scholarships'}
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-4 italic font-medium">Free eligibility assessment by Admivo AI experts.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanning;
