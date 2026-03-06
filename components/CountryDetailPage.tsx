import React, { useEffect, useRef } from "react";
import { COUNTRY_DETAILS, DESTINATIONS, useCurrencyRate } from "../constants";

interface CountryDetailPageProps {
  countryId: string;
  countryName: string;
  onBack: () => void;
}

const CountryDetailPage: React.FC<CountryDetailPageProps> = ({
  countryId,
  countryName,
  onBack,
}) => {
  const data = COUNTRY_DETAILS[countryId];
  const destination = DESTINATIONS.find((d) => d.id === countryId);
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    rate: conversionRate,
    loading: rateLoading,
    error: rateError,
  } = useCurrencyRate(countryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-lg mb-4">
            No data found for this country.
          </p>
          <button
            onClick={onBack}
            className="text-[#F59E0B] font-bold text-sm hover:underline"
          >
            ← Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="country-detail-scroll" className="bg-[#F0F4F8]">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative h-[50vh] min-h-[600px] max-h-[800px] overflow-hidden"
      >
        {/* Floating back button */}
        <button
          onClick={onBack}
          className="group absolute top-6 left-8 md:left-16 z-20 inline-flex flex-col items-center gap-1 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
        >
          <span className="inline-flex items-center gap-2">
            <span className="material-icons-outlined text-sm transition-transform duration-300 group-hover:-translate-x-1">
              west
            </span>
            All Destinations
          </span>
          <span className="block h-px w-4 bg-[#F59E0B]/60 group-hover:w-full group-hover:bg-[#F59E0B] transition-all duration-500 ease-out" />
        </button>
        <img
          src={data.bannerImage}
          alt={countryName}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 pt-20 px-8 md:px-16 max-w-6xl mx-auto left-0 right-0">
          <div className="flex items-center gap-3 mb-5">
            {destination?.flagUrl && (
              <img
                src={destination.flagUrl}
                alt={countryName}
                className="w-9 h-9 rounded-full object-cover border-2 border-white/30 shadow-lg"
              />
            )}
            <span className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">
              Study Destination
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight mb-4">
            {countryName}
          </h1>

          <p className="text-white/70 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-8">
            {data.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            {data.facts.slice(0, 3).map((fact, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
              >
                <span className="material-icons-outlined text-[#F59E0B] text-sm">
                  {fact.icon}
                </span>
                <span className="text-white text-xs font-semibold">
                  {fact.label}:{" "}
                  <span className="text-white/80 font-normal">
                    {fact.value}
                  </span>
                </span>
              </div>
            ))}

            {/* ── Live Exchange Rate ── */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="material-icons-outlined text-[#F59E0B] text-sm">
                currency_exchange
              </span>
              {rateLoading ? (
                <span className="text-white text-xs font-semibold">
                  Live Rate:{" "}
                  <span className="text-white/50 font-normal inline-flex items-center gap-1">
                    <span className="w-2.5 h-2.5 border border-white/30 border-t-white/80 rounded-full animate-spin inline-block" />
                    Fetching…
                  </span>
                </span>
              ) : rateError ? (
                <span className="text-white text-xs font-semibold">
                  Live Rate:{" "}
                  <span className="text-white/50 font-normal">Unavailable</span>
                </span>
              ) : (
                <span className="text-white text-xs font-semibold">
                  Live Rate:{" "}
                  <span className="text-[#F59E0B] font-bold">
                    {conversionRate}
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content Body ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* ── Quick Facts Grid ────────────────────────────────────────────── */}
        <div className="-mt-8 mb-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-slate-100">
              {data.facts.map((fact, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-2 py-6 px-4 text-center hover:bg-amber-50/50 transition-colors cursor-pointer"
                >
                  <span className="material-icons-outlined text-[#F59E0B] text-2xl">
                    {fact.icon}
                  </span>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400">
                    {fact.label}
                  </p>
                  <p className="text-sm font-bold text-[#111827] leading-tight">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Overview ─────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight">
                Why {countryName} stands out
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-[#6B7280] text-base leading-8 font-medium">
                {data.overview}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-black text-[#111827]">
                    {data.facts.find((f) => f.label === "Universities")?.value}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase mt-1">
                    Universities
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#111827]">
                    {
                      data.facts.find((f) => f.label === "Intl. Students")
                        ?.value
                    }
                  </p>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase mt-1">
                    International Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Top Universities ─────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Academia
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight">
                Top Universities
              </h2>
            </div>
            <p className="text-slate-400 text-sm font-medium hidden md:block">
              {data.universities.length} featured institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {data.universities.map((uni, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#F59E0B]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={uni.imageUrl}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#F59E0B] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    {uni.tag}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full">
                    {uni.rank}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-black text-[#111827] mb-1">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                    <span className="flex items-center gap-1">
                      <span className="material-icons-outlined text-xs">
                        location_on
                      </span>
                      {uni.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <span className="material-icons-outlined text-xs">
                        payments
                      </span>
                      {uni.fees}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Study Here ───────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase mb-2">
              Reasons to Choose
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight">
              Why study in {countryName}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.whyStudy.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#F59E0B]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mb-4 group-hover:bg-[#F59E0B]/20 transition-colors">
                  <span className="material-icons-outlined text-[#F59E0B] text-xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-black text-[#111827] text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="relative bg-[#111827] rounded-2xl overflow-hidden px-8 md:px-14 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-[#F59E0B]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative text-center md:text-left">
              <p className="text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                Ready to Apply?
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                Start your journey to {countryName}
              </h2>
              <p className="text-slate-400 text-sm max-w-md">
                Get personalised counselling for university applications, visa
                guidance, and scholarship support.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors whitespace-nowrap">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
