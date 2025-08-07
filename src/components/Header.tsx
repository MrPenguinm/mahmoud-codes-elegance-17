import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Download } from 'lucide-react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('name')}
          </h1>
        </div>
        
        <nav className="flex items-center gap-2 sm:gap-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-10 sm:h-10 p-0 touch-manipulation"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon className="w-3 h-3 sm:w-4 sm:h-4" /> : <Sun className="w-3 h-3 sm:w-4 sm:h-4" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleLanguage}
            className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm touch-manipulation ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
          >
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">{t('language')}</span>
            <span className="xs:hidden">{language === 'ar' ? 'EN' : 'ع'}</span>
          </Button>
          
          <Button 
            variant="default"
            size="sm"
            className="bg-gradient-primary hover:opacity-90 transition-opacity px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm touch-manipulation"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">{t('downloadCV')}</span>
            <span className="sm:hidden">CV</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};