import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const {
    rate: conversionRate,
    loading: rateLoading,
  } = useCurrencyRate(countryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-6 font-medium">No strategic data found for this region.</p>
          <button onClick={onBack} className="btn btn-primary h-11 px-8 text-xs uppercase tracking-widest">
            Back to Hubs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden border-b border-border">
        {/* Top Overlay Controls */}
        <div className="absolute top-0 left-0 w-full z-20 pt-10">
          <div className="container-custom flex justify-between items-center">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="group flex items-center gap-2 bg-background/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-foreground transition-all duration-300"
            >
              <span className="material-icons-outlined text-sm">west</span>
              All Destinations
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-background/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                {rateLoading ? "Syncing..." : conversionRate}
              </span>
            </motion.div>
          </div>
        </div>

        <img
          src={data.bannerImage}
          alt={countryName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {destination?.flagUrl && (
                  <img
                    src={destination.flagUrl}
                    alt={countryName}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/20 shadow-xl"
                  />
                )}
                <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em]">Premier Academic Hub</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight mb-5">
                {countryName}.
              </h1>

              <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                {data.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Body ─────────────────────────────────────────────────── */}
      <div className="container-custom -mt-12 relative z-10">

        {/* ── Quick Statistics Bento ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border rounded-xl overflow-hidden shadow-sm">
          {data.facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 flex flex-col items-center text-center group transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-6 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <span className="material-icons-outlined text-lg">{fact.icon}</span>
              </div>
              <p className="text-[9px] font-bold tracking-widest uppercase text-muted-foreground mb-2">{fact.label}</p>
              <p className="text-md font-bold text-foreground tracking-tight">{fact.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Overview & Cost Breakdown ─────────────────────────────────────────────────── */}
        <div className="mt-20 grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">Strategic Overview</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight">
              Global <span className="text-muted-foreground">Strategic Advantage.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium mb-12">
              {data.overview}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 border-t border-border pt-12">
              <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
                <p className="text-4xl font-bold text-foreground mb-2 tabular-nums tracking-tight">
                  {data.facts.find(f => f.label === "Universities")?.value}
                </p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-display">Ranked Institutions</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
                <p className="text-4xl font-bold text-foreground mb-2 tabular-nums tracking-tight">
                  {data.facts.find(f => f.label === "Intl. Students")?.value}
                </p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-display">Global Community</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground">
                  <span className="material-icons-outlined text-sm">query_stats</span>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">Resource Indices</h3>
              </div>

              <p className="text-muted-foreground text-xs font-medium mb-6">Standard cost of living estimates for students in {countryName}.</p>

              <div className="space-y-4">
                {data.costOfLiving?.map((cost, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-transparent hover:border-border hover:bg-white transition-all">
                    <div className="flex items-center gap-3">
                      <span className="material-icons-outlined text-muted-foreground text-lg">{cost.icon}</span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">{cost.label}</span>
                    </div>
                    <span className="text-sm font-bold text-foreground tracking-tight">{cost.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/50 border border-border italic text-[10px] text-muted-foreground font-medium leading-relaxed">
                Institutional indices. Adjusted for academic year projections.
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Top Universities ─────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4 block">Elite Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 tracking-tight">Preferred <span className="text-muted-foreground">Institutions.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.universities.map((uni, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300 shadow-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={uni.imageUrl}
                    alt={uni.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span className="bg-white/90 backdrop-blur-md text-foreground text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg border border-white/20">
                      {uni.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <span className="text-white text-2xl font-bold tracking-tight">{uni.rank}</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-foreground transition-all duration-300">
                      <span className="material-icons-outlined text-lg">arrow_forward</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-muted-foreground duration-300 leading-tight">
                    {uni.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons-outlined text-base">location_on</span>
                      {uni.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons-outlined text-base">payments</span>
                      {uni.fees}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative bg-foreground rounded-2xl overflow-hidden px-10 py-16 shadow-xl text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">Direct Portal</span>
              <h2 className="text-3xl md:text-5xl font-bold text-background leading-tight tracking-tight mb-5">
                Initiate your <br /><span className="text-muted-foreground">global academic profile.</span>
              </h2>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">
                Precision strategy for elite admissions, visa architecture, and global network facilitation.
              </p>
              <button className="btn btn-secondary h-12 px-10 text-xs uppercase tracking-widest">
                Request Private Consult
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
