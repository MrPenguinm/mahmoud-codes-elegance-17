import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Code, 
  Server, 
  Settings, 
  BarChart3, 
  Globe, 
  Cpu, 
  Shield,
  GitBranch,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C#", level: 95, years: "20+ years" },
      { name: "Java", level: 85, years: "15+ years" },
      { name: "Python", level: 80, years: "10+ years" },
      { name: "ASP.NET", level: 95, years: "20+ years" },
      { name: "Borland Delphi", level: 90, years: "15+ years" }
    ]
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: [
      { name: "MSSQL Server", level: 98, years: "20+ years" },
      { name: "Oracle", level: 90, years: "15+ years" },
      { name: "MySQL", level: 85, years: "12+ years" },
      { name: "PostgreSQL", level: 85, years: "10+ years" }
    ]
  },
  {
    title: "ERP & Enterprise Systems",
    icon: Settings,
    skills: [
      { name: "Oracle ERP", level: 95, years: "10+ years" },
      { name: "Odoo ERP", level: 90, years: "8+ years" },
      { name: "IBM Maximo", level: 95, years: "12+ years" },
      { name: "DevExpress XAF", level: 85, years: "8+ years" }
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "Joomla", level: 90, years: "10+ years" },
      { name: "WordPress", level: 85, years: "8+ years" },
      { name: "Web Development", level: 90, years: "15+ years" },
      { name: "CMS Systems", level: 90, years: "12+ years" }
    ]
  },
  {
    title: "Project Management",
    icon: BarChart3,
    skills: [
      { name: "PMP Certified", level: 95, years: "7+ years" },
      { name: "Agile/Scrum", level: 90, years: "8+ years" },
      { name: "Team Leadership", level: 95, years: "15+ years" },
      { name: "Stakeholder Management", level: 90, years: "12+ years" }
    ]
  },
  {
    title: "System Administration",
    icon: Server,
    skills: [
      { name: "Cloud Administration", level: 85, years: "5+ years" },
      { name: "Server Management", level: 90, years: "15+ years" },
      { name: "System Security", level: 85, years: "12+ years" },
      { name: "Performance Optimization", level: 90, years: "15+ years" }
    ]
  }
];

export const SkillsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('skills')}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            Comprehensive expertise across enterprise technologies and software engineering disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="p-3 sm:p-4 md:p-6 hover:shadow-card transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in hover:scale-[1.03] group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className={`text-sm sm:text-base md:text-lg font-semibold ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium text-xs sm:text-sm ${
                          language === 'ar' ? 'font-arabic' : 'font-english'
                        }`}>
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.years}
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-1.5 sm:h-2"
                      />
                      <div className="text-right">
                        <span className="text-xs text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};