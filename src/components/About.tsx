import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-purple-600 mb-3">
                {t('about.mission')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center relative">
                <span className="text-8xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
