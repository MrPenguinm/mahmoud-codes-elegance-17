import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Software Delivery Manager",
    company: "Next Level For Communications and Information Technology",
    period: "December 2024 – Present",
    location: "Saudi Arabia",
    description: "Spearheaded the successful delivery of software projects, ensuring adherence to project timelines, budget constraints, and quality standards. Coordinated and synchronized efforts across diverse teams.",
    skills: ["Project Management", "Team Coordination", "Quality Assurance", "Budget Management"]
  },
  {
    title: "Senior Computer Specialist",
    company: "Egyptian Airports Company",
    period: "May 2021 – September 2024",
    location: "Egypt",
    description: "Led Oracle ERP implementation, IBM Maximo maintenance, and web development for 18 airport websites. Managed cloud-based Odoo servers and database administration.",
    skills: ["Oracle ERP", "IBM Maximo", "Web Development", "Database Administration", "Odoo"]
  },
  {
    title: "Projects Executive Manager",
    company: "MAS",
    period: "June 2023 – December 2024 (Part-time)",
    location: "Remote",
    description: "Responsible for the successful implementation and client delivery of Odoo solutions, ensuring alignment with business objectives and client satisfaction.",
    skills: ["Odoo ERP", "Client Management", "Solution Implementation", "Business Analysis"]
  },
  {
    title: "Manager of Databases Administration",
    company: "Egyptian Airports Company",
    period: "May 2016 – May 2021",
    location: "Egypt",
    description: "Oversaw administration of all databases including MSSQL Server, Oracle11g for Oracle ERP, and IBM Maximo. Led IBM Maximo support team and system implementations.",
    skills: ["Database Administration", "MSSQL Server", "Oracle", "IBM Maximo", "Team Leadership"]
  },
  {
    title: "Head of Analysis and Design of Systems",
    company: "Egyptian Airports Company",
    period: "January 2010 – May 2016",
    location: "Egypt",
    description: "Led team responsible for analyzing and designing systems. Developed critical internal systems including Maintenance, Personnel, and Stores systems.",
    skills: ["Systems Analysis", "Team Leadership", "C#", "System Design", "Project Management"]
  },
  {
    title: "System Analyst and Software Developer",
    company: "Delta Software",
    period: "January 2001 – August 2003",
    location: "Egypt",
    description: "Analyzed customer requirements and designed systems, specializing in accounting software development. Collaborated on various business systems.",
    skills: ["Requirements Analysis", "Software Development", "System Design", "Accounting Systems"]
  }
];

export const ExperienceSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('experience')}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            25+ years of progressive leadership in software engineering and enterprise systems
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 md:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background shadow-lg"></div>
                
                <div className="ml-10 sm:ml-16 md:ml-20">
                  <Card className="p-3 sm:p-4 md:p-6 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0">
                    <div className="space-y-3 sm:space-y-4 mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className={`text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 sm:mb-2 leading-tight ${
                          language === 'ar' ? 'font-arabic' : 'font-english'
                        }`}>
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-start gap-1 sm:gap-2 text-primary mb-1 sm:mb-2">
                          <Building className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm md:text-base leading-tight">{exp.company}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="leading-tight">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="leading-tight">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4 ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs sm:text-sm px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};