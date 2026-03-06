import React from 'react';

const PlanDetailsPage: React.FC<{ selectedPlan: string | null; onBack: () => void }> = ({ selectedPlan, onBack }) => {
    const features = [
        { name: 'University Shortlisting', pro: 'US, UK, CA, AU', premium: 'All Countries', ultimate: 'All Countries' },
        { name: 'SOP Review', pro: '1', premium: '2', ultimate: '5' },
        { name: 'Visa Support', pro: 'Basic', premium: 'Priority', ultimate: 'Full Concierge' },
        { name: 'Mock Interviews', pro: '✕', premium: '1 Session', ultimate: '3 Sessions' },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Dark Hero Section from Video */}
            <div className="bg-[#0F172A] text-white py-20 px-6 text-center">
                <button onClick={onBack} className="text-slate-400 hover:text-white mb-8 flex items-center gap-2 mx-auto">
                    <span className="material-icons-outlined">arrow_back</span> Back to Plans
                </button>
                <h1 className="text-5xl font-extrabold mb-4">Choose your <span className="text-yellow-400">study abroad plan</span></h1>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">Choose a comprehensive plan or pick individual services. Either way, you get world-class support.</p>
                
                <div className="flex justify-center gap-12 mt-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold">15K+</div>
                        <div className="text-slate-500 text-sm">Students Helped</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">98%</div>
                        <div className="text-slate-500 text-sm">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold">50K+</div>
                        <div className="text-slate-500 text-sm">Universities</div>
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto -mt-10 px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="p-8 text-slate-500 font-medium">Plan Features</th>
                                <th className={`p-8 text-center border-l ${selectedPlan === 'Starter' ? 'bg-blue-50/50' : ''}`}>
                                    <span className="block text-xl font-bold">Pro</span>
                                    <span className="text-sm text-slate-400">₹2,499</span>
                                </th>
                                <th className={`p-8 text-center border-l ${selectedPlan === 'Global Admissions' ? 'bg-blue-50/50' : ''}`}>
                                    <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-1 rounded uppercase font-bold">Most Popular</span>
                                    <span className="block text-xl font-bold mt-2">Premium</span>
                                    <span className="text-sm text-slate-400">₹34,999</span>
                                </th>
                                <th className={`p-8 text-center border-l ${selectedPlan === 'Elite VIP' ? 'bg-blue-50/50' : ''}`}>
                                    <span className="block text-xl font-bold">Ultimate</span>
                                    <span className="text-sm text-slate-400">₹69,999</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, i) => (
                                <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-slate-700">{feature.name}</td>
                                    <td className="p-6 text-center border-l text-slate-600">{feature.pro}</td>
                                    <td className="p-6 text-center border-l text-slate-600 font-semibold">{feature.premium}</td>
                                    <td className="p-6 text-center border-l text-slate-600">{feature.ultimate}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="p-8"></td>
                                <td className="p-4 border-l text-center"><button className="w-full py-3 rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50">Select Pro</button></td>
                                <td className="p-4 border-l text-center"><button className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700">Get Premium</button></td>
                                <td className="p-4 border-l text-center"><button className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-black">Get Ultimate</button></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PlanDetailsPage;