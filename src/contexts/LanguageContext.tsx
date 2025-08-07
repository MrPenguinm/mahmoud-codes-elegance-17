import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    name: "Mahmoud Fahim",
    title: "Senior Software Engineering Expert",
    summary: "Professional Summary",
    experience: "Professional Experience",
    skills: "Technical Expertise",
    education: "Education & Certifications",
    achievements: "Key Achievements",
    contact: "Contact Information",
    downloadCV: "Download CV",
    darkMode: "Dark Mode",
    language: "العربية",
    mobile: "Mobile",
    email: "Email",
    nationality: "Nationality",
    languages: "Languages",
    egyptian: "Egyptian",
    arabic: "Arabic (Native)",
    english: "English (Fluent)",
    yearsExperience: "25+ Years of Experience",
    summaryText: "Distinguished Software Engineering Expert with over 25 years of comprehensive experience in enterprise software development, systems architecture, and technical leadership. Proven expertise in implementing large-scale ERP solutions (Oracle, Odoo), Asset Management Systems (IBM Maximo), and leading cross-functional development teams. Specialized in database administration across multiple platforms (MSSQL Server, Oracle, MySQL, PostgreSQL) with a track record of delivering mission-critical applications for various industries.",
    coreCompetencies: "Core Competencies",
    projectManagement: "Software Project Management",
    deliveryManagement: "Software Delivery Management",
    teamLeadership: "Technical Team Leadership",
    erpSystems: "ERP Systems Implementation",
    ibmMaximo: "IBM Maximo Expertise",
    databaseAdmin: "Database Administration",
    systemsAnalysis: "Systems Analysis & Design",
    softwareDev: "Software Development",
    projects: "Featured Projects",
    projectsDesc: "Showcase of key projects and technical implementations",
    technologies: "Technologies & Tools",
    getInTouch: "Get In Touch",
    sendMessage: "Send Message",
    viewProject: "View Project",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    projectDetails: "Project Details",
    keyFeatures: "Key Features",
    techStack: "Technology Stack",
    challenges: "Challenges & Solutions",
    results: "Results & Impact",
    collaborate: "Let's Collaborate",
    collaborateDesc: "Ready to discuss how my expertise can contribute to your next software engineering project",
    formName: "Full Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message",
    formNamePlaceholder: "Enter your full name",
    formEmailPlaceholder: "your.email@company.com",
    formSubjectPlaceholder: "Project inquiry or collaboration",
    formMessagePlaceholder: "Tell me about your project requirements, challenges, or how we can work together...",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Failed to send message. Please try again.",
    requiredField: "This field is required",
    invalidEmail: "Please enter a valid email address",
    specializations: "Specializations",
    certifications: "Professional Certifications",
    awards: "Awards & Recognition"
  },
  ar: {
    name: "محمود فهيم",
    title: "خبير هندسة البرمجيات الأول",
    summary: "الملخص المهني",
    experience: "الخبرة المهنية",
    skills: "الخبرة التقنية",
    education: "التعليم والشهادات",
    achievements: "الإنجازات الرئيسية",
    contact: "معلومات الاتصال",
    downloadCV: "تحميل السيرة الذاتية",
    darkMode: "الوضع المظلم",
    language: "English",
    mobile: "الهاتف",
    email: "البريد الإلكتروني",
    nationality: "الجنسية",
    languages: "اللغات",
    egyptian: "مصري",
    arabic: "العربية (اللغة الأم)",
    english: "الإنجليزية (بطلاقة)",
    yearsExperience: "25+ سنة من الخبرة",
    summaryText: "خبير هندسة برمجيات متميز مع أكثر من 25 عامًا من الخبرة الشاملة في تطوير البرمجيات المؤسسية وهندسة الأنظمة والقيادة التقنية. خبرة مثبتة في تنفيذ حلول ERP واسعة النطاق (Oracle، Odoo) وأنظمة إدارة الأصول (IBM Maximo) وقيادة فرق التطوير متعددة الوظائف. متخصص في إدارة قواعد البيانات عبر منصات متعددة (MSSQL Server، Oracle، MySQL، PostgreSQL) مع سجل حافل في تقديم تطبيقات حيوية للصناعات المختلفة.",
    coreCompetencies: "الكفاءات الأساسية",
    projectManagement: "إدارة مشاريع البرمجيات",
    deliveryManagement: "إدارة تسليم البرمجيات",
    teamLeadership: "قيادة الفرق التقنية",
    erpSystems: "تنفيذ أنظمة ERP",
    ibmMaximo: "خبرة IBM Maximo",
    databaseAdmin: "إدارة قواعد البيانات",
    systemsAnalysis: "تحليل وتصميم الأنظمة",
    softwareDev: "تطوير البرمجيات",
    projects: "المشاريع المميزة",
    projectsDesc: "عرض للمشاريع الرئيسية والتطبيقات التقنية",
    technologies: "التقنيات والأدوات",
    getInTouch: "تواصل معي",
    sendMessage: "إرسال رسالة",
    viewProject: "عرض المشروع",
    liveDemo: "عرض تجريبي",
    sourceCode: "الكود المصدري",
    projectDetails: "تفاصيل المشروع",
    keyFeatures: "الميزات الرئيسية",
    techStack: "المجموعة التقنية",
    challenges: "التحديات والحلول",
    results: "النتائج والتأثير",
    collaborate: "دعنا نتعاون",
    collaborateDesc: "مستعد لمناقشة كيف يمكن لخبرتي المساهمة في مشروع هندسة البرمجيات القادم",
    formName: "الاسم الكامل",
    formEmail: "عنوان البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "الرسالة",
    formNamePlaceholder: "أدخل اسمك الكامل",
    formEmailPlaceholder: "your.email@company.com",
    formSubjectPlaceholder: "استفسار مشروع أو تعاون",
    formMessagePlaceholder: "أخبرني عن متطلبات مشروعك أو التحديات أو كيف يمكننا العمل معًا...",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة بنجاح!",
    messageError: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    requiredField: "هذا الحقل مطلوب",
    invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
    specializations: "التخصصات",
    certifications: "الشهادات المهنية",
    awards: "الجوائز والتقدير"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};