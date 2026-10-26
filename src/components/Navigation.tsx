import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="./uvana-logo.png" alt='Uvana events' className='h-12' />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              {t('nav.contact')}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
