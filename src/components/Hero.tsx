import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-16 relative overflow-hidden"
    >
      <img src="./hero-event.jpg" alt="" className="absolute h-full object-cover" />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-white">
          {t("hero.title")}
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 text-shadow-white">
          {t("hero.subtitle")}
        </h2>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-shadow-white">
          {t("hero.tagline")}
        </p>
        <a
          href="#contact"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl text-shadow-white"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
