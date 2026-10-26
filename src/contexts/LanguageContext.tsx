import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Uvana',
      subtitle: 'Organization & Event Protocol',
      tagline: 'Creating unforgettable experiences with precision and elegance',
      cta: 'Get in Touch',
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'We transform your vision into reality',
      eventPlanning: {
        title: 'Event Planning',
        description: 'Comprehensive planning for corporate and social events',
      },
      protocol: {
        title: 'Protocol Management',
        description: 'Expert protocol for diplomatic and official ceremonies',
      },
      coordination: {
        title: 'On-site Coordination',
        description: 'Seamless execution on the day of your event',
      },
      consulting: {
        title: 'Event Consulting',
        description: 'Professional advice for your event strategy',
      },
    },
    // About Section
    about: {
      title: 'About Us',
      description: 'Uvana is a premier event organization and protocol company dedicated to creating exceptional experiences. With years of experience in corporate events, diplomatic ceremonies, and social gatherings, we bring expertise, attention to detail, and a personal touch to every project.',
      mission: 'Our Mission',
      missionText: 'To deliver flawless events that exceed expectations through meticulous planning, elegant protocol, and unwavering commitment to excellence.',
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s create something extraordinary together',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
    },
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    // Hero Section
    hero: {
      title: 'Uvana',
      subtitle: 'Organización y Protocolo de Eventos',
      tagline: 'Creando experiencias inolvidables con precisión y elegancia',
      cta: 'Contáctanos',
    },
    // Services Section
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Transformamos tu visión en realidad',
      eventPlanning: {
        title: 'Planificación de Eventos',
        description: 'Planificación integral para eventos corporativos y sociales',
      },
      protocol: {
        title: 'Gestión de Protocolo',
        description: 'Expertos en protocolo para ceremonias diplomáticas y oficiales',
      },
      coordination: {
        title: 'Coordinación in situ',
        description: 'Ejecución impecable el día de tu evento',
      },
      consulting: {
        title: 'Consultoría de Eventos',
        description: 'Asesoramiento profesional para tu estrategia de eventos',
      },
    },
    // About Section
    about: {
      title: 'Sobre Nosotros',
      description: 'Uvana es una empresa líder en organización y protocolo de eventos dedicada a crear experiencias excepcionales. Con años de experiencia en eventos corporativos, ceremonias diplomáticas y reuniones sociales, aportamos experiencia, atención al detalle y un toque personal a cada proyecto.',
      mission: 'Nuestra Misión',
      missionText: 'Entregar eventos impecables que superen las expectativas a través de una planificación meticulosa, protocolo elegante y un compromiso inquebrantable con la excelencia.',
    },
    // Contact Section
    contact: {
      title: 'Contáctanos',
      subtitle: 'Creemos algo extraordinario juntos',
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Tu Mensaje',
      send: 'Enviar Mensaje',
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
