import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DESTINATIONS } from "../constants";
import CountryDetailPage from "./CountryDetailPage";

interface DestinationsPageProps {
  onBack: () => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onBack }) => {
  const [selectedCountry, setSelectedCountry] = useState<{
    id: string;
    name: string;
  } | null>(null);

  if (selectedCountry) {
    return (
      <CountryDetailPage
        countryId={selectedCountry.id}
        countryName={selectedCountry.name}
        onBack={() => setSelectedCountry(null)}
      />
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">Global Opportunities</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 text-foreground tracking-tight">
            Curated Study <span className="text-muted-foreground">Destinations.</span>
          </h2>
          <p className="text-muted-foreground text-sm font-medium leading-relaxed">
            Strategic access to the world's most prestigious academic environments, tailored for your long-term success.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              onClick={() => setSelectedCountry({ id: dest.id, name: dest.name })}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl border border-border overflow-hidden transition-all duration-300 group-hover:border-foreground/20 shadow-sm hover:shadow-md">
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Flag Chip */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white border border-border shadow-sm flex items-center gap-2">
                    <img
                      src={dest.flagUrl}
                      alt={`${dest.name} flag`}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-foreground">
                      Hub Active
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                    {dest.name}
                  </h3>
                  <p className="text-muted-foreground text-[13px] leading-relaxed mb-6 line-clamp-2 font-medium">
                    {dest.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                    <span className="text-foreground font-bold text-[11px] uppercase tracking-widest flex items-center gap-2">
                      {dest.exploreLabel}
                      <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center border-t border-border pt-8"
        >
          <button
            onClick={onBack}
            className="btn btn-outline h-11 px-6 text-xs uppercase tracking-widest flex items-center gap-2 mx-auto"
          >
            <span className="material-icons-outlined text-sm">west</span>
            Return to Home
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsPage;
