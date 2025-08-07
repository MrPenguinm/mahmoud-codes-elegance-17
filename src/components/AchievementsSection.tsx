import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { 
  Trophy, 
  Target, 
  Users, 
  Zap, 
  Database, 
  Globe, 
  Building,
  TrendingUp 
} from 'lucide-react';

const achievements = [
  {
    title: "Database Administration Excellence",
    description: "Served as MSSQL Server Database Administrator for over 15 years, ensuring robust database performance and integrity across critical business applications.",
    icon: Database,
    metrics: "15+ Years",
    impact: "Zero downtime for critical systems"
  },
  {
    title: "ERP Implementation Leadership",
    description: "Successfully managed implementation of complex Oracle ERP, Odoo ERP, and IBM Maximo systems, driving significant operational improvements.",
    icon: Building,
    metrics: "3 Major ERP Systems",
    impact: "40% efficiency improvement"
  },
  {
    title: "Enterprise System Development",
    description: "Designed and developed multiple critical internal systems including Maintenance, Personnel, and Stores systems, enhancing internal processes.",
    icon: Target,
    metrics: "10+ Systems",
    impact: "Streamlined operations"
  },
  {
    title: "Digital Transformation Leader",
    description: "Led development and deployment of websites for 18 airports utilizing Odoo modules, significantly expanding digital presence.",
    icon: Globe,
    metrics: "18 Airport Websites",
    impact: "Enhanced digital presence"
  },
  {
    title: "Team Leadership Excellence",
    description: "Successfully led diverse technical teams across multiple projects, fostering collaboration and delivering results under tight deadlines.",
    icon: Users,
    metrics: "25+ Team Members",
    impact: "100% project success rate"
  },
  {
    title: "Performance Optimization",
    description: "Improved operational efficiency and system performance through strategic database optimization and process enhancements.",
    icon: TrendingUp,
    metrics: "50% Performance Gain",
    impact: "Reduced operational costs"
  },
  {
    title: "Technical Innovation",
    description: "Resolved critical technical challenges that other teams couldn't address, including complex Cardiff system issues for Xerox Corporation.",
    icon: Zap,
    metrics: "100% Issue Resolution",
    impact: "System rescue & optimization"
  },
  {
    title: "Certification Excellence",
    description: "Achieved PMP certification and multiple Microsoft technical certifications, demonstrating commitment to professional development.",
    icon: Trophy,
    metrics: "10+ Certifications",
    impact: "Industry recognition"
  }
];

export const AchievementsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('achievements')}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            Key accomplishments that demonstrate impact and leadership in enterprise software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`font-semibold text-foreground leading-tight ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {achievement.title}
                    </h3>
                    
                    <div className="text-2xl font-bold text-primary">
                      {achievement.metrics}
                    </div>
                    
                    <p className={`text-xs text-accent font-medium ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {achievement.impact}
                    </p>
                  </div>
                  
                  <p className={`text-sm text-muted-foreground leading-relaxed ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className={`text-sm text-muted-foreground ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              Years Experience
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className={`text-sm text-muted-foreground ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              Projects Completed
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">10+</div>
            <div className={`text-sm text-muted-foreground ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              Certifications
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className={`text-sm text-muted-foreground ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};