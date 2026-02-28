import React from 'react';

interface Props {
  onBack: () => void;
}

const UniversityAdmissionsPage: React.FC<Props> = ({ onBack }) => {
  return (
    <section className="min-h-screen bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <button
          onClick={onBack}
          className="mb-10 text-sm font-semibold text-[#FDB515] hover:underline"
        >
          ← Back to Services
        </button>

        <h1 className="text-5xl font-extrabold text-[#111827] mb-6">
          University Admissions
        </h1>

        <p className="text-slate-600 text-lg max-w-3xl mb-16">
          End-to-end support for Bachelors, Masters and PhD admissions with expert guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {['Profile Evaluation', 'University Shortlisting', 'Application Submission'].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-4">{item}</h3>
              <p className="text-slate-500">
                Expert guidance tailored to maximize your admission success.
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#FDB515] text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <button className="bg-white text-[#FDB515] px-8 py-3 rounded-full font-bold hover:scale-105 transition">
            Book Free Counseling
          </button>
        </div>

      </div>
    </section>
  );
};

export default UniversityAdmissionsPage;