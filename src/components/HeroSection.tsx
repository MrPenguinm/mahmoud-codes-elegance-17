import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Languages } from 'lucide-react';

export const HeroSection = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  return (
    <section className="min-h-screen pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden matrix-bg">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 code-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary/10 rotate-45 animate-float"></div>
      <div className="absolute top-3/4 left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-secondary/10 rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated code snippets in background */}
      <div className="absolute top-10 left-10 hidden md:block opacity-30">
        <div className="font-mono text-xs text-primary/40 space-y-1 animate-fade-in">
          <div className="typing-cursor">const leader = "Mahmoud Fahim"</div>
          <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>experience: "25+ years"</div>
          <div className="animate-slide-in" style={{ animationDelay: '1s' }}>expertise: ["ERP", "Leadership", "Innovation"]</div>
          <div className="animate-slide-in" style={{ animationDelay: '1.5s' }}>mission: "Transform & Lead"</div>
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="font-mono text-xs text-secondary/20 animate-float">
          <div>{"{ leadership: true }"}</div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-30">
        <div className="font-mono text-xs text-accent/40 space-y-1 animate-fade-in">
          <div className="animate-slide-in" style={{ animationDelay: '2s' }}>// Architecting the future</div>
          <div className="animate-slide-in" style={{ animationDelay: '2.5s' }}>function innovate() {"{"}</div>
          <div className="ml-4 animate-slide-in" style={{ animationDelay: '3s' }}>return "Excellence";</div>
          <div className="animate-slide-in" style={{ animationDelay: '3.5s' }}>{"}"}</div>
        </div>
      </div>

      {/* Moving binary code streams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-20">
        <div className="binary-stream">01001000</div>
      </div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-20" style={{ animationDelay: '1s' }}>
        <div className="binary-stream">11000101</div>
      </div>
      
      <div className="container relative z-10 px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)]">
          {/* Left side - Main info */}
          <div className={`space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in order-1 lg:order-1 ${language === 'ar' ? 'text-right lg:text-right' : 'text-left lg:text-left'}`}>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  {t('name')}
                </span>
              </h1>
              
              <h2 className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-secondary ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {t('title')}
              </h2>
              
              <div className="flex items-center gap-2 text-accent font-semibold text-xs xs:text-sm md:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
                <span className={language === 'ar' ? 'font-arabic' : 'font-english'}>
                  {t('yearsExperience')}
                </span>
              </div>
            </div>

            <p className={`text-xs xs:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              {t('summaryText')}
            </p>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-500 transform hover:scale-105 shadow-glow w-full xs:w-auto text-xs xs:text-sm sm:text-base py-2 xs:py-3 touch-manipulation glow-pulse relative overflow-hidden group"
                onClick={() => {
                  // Scroll to footer for contact
                  const footer = document.querySelector('footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-2 group-hover:animate-bounce" />
                {t('contact')}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 w-full xs:w-auto text-xs xs:text-sm sm:text-base py-2 xs:py-3 touch-manipulation hover:shadow-card relative overflow-hidden group backdrop-blur-sm"
                onClick={() => {
                  // Create CV download functionality
                  toast({
                    title: "CV Download",
                    description: "CV download will be available soon",
                  });
                }}
              >
                <span className="relative z-10">{t('downloadCV')}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced Contact card */}
          <div className="animate-slide-in order-2 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <Card className="p-4 sm:p-6 md:p-8 shadow-elegant bg-gradient-card border-0 hover:shadow-glow transition-all duration-500 terminal-window glow-pulse">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-xs text-muted-foreground ml-2">contact_info.sh</span>
              </div>
              <div className="pt-4">
                <h3 className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 text-center gradient-text ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  {t('contact')}
                </h3>
              </div>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <a 
                  href="tel:+966550932402"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 code-block"
                >
                  <Phone className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 animate-pulse" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">{t('mobile')}</p>
                    <p className="font-medium text-xs xs:text-sm md:text-base font-mono text-primary">+966 55 093 2402</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:engmahmoudfahim@hotmail.com"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-accent/5 hover:border-accent/20 border border-transparent transition-all duration-300 cursor-pointer touch-manipulation active:scale-95 code-block"
                >
                  <Mail className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-accent flex-shrink-0 animate-pulse" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">{t('email')}</p>
                    <p className="font-medium text-xs xs:text-sm md:text-base break-all font-mono text-accent">engmahmoudfahim@hotmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-secondary/5 hover:border-secondary/20 border border-transparent transition-all duration-300 code-block">
                  <MapPin className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 animate-pulse" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">{t('nationality')}</p>
                    <p className="font-medium text-xs xs:text-sm md:text-base font-mono text-secondary">{t('egyptian')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 code-block">
                  <Languages className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 text-primary flex-shrink-0 animate-pulse" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">{t('languages')}</p>
                    <p className="font-medium text-xs xs:text-sm md:text-base font-mono text-primary">{t('arabic')}, {t('english')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};