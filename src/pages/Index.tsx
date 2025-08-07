import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { AchievementsSection } from '@/components/AchievementsSection';

import { Footer } from '@/components/Footer';

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className={`min-h-screen bg-background transition-all duration-300 matrix-bg relative overflow-hidden ${
      language === 'ar' ? 'font-arabic' : 'font-english'
    }`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-secondary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <Header />
      <main className="relative">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
