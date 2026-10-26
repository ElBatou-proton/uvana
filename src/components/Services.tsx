import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: '📋',
      titleKey: 'services.eventPlanning.title',
      descriptionKey: 'services.eventPlanning.description',
    },
    {
      icon: '🎯',
      titleKey: 'services.protocol.title',
      descriptionKey: 'services.protocol.description',
    },
    {
      icon: '🤝',
      titleKey: 'services.coordination.title',
      descriptionKey: 'services.coordination.description',
    },
    {
      icon: '💡',
      titleKey: 'services.consulting.title',
      descriptionKey: 'services.consulting.description',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
