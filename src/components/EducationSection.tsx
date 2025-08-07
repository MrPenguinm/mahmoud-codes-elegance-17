import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, Star } from 'lucide-react';

const education = {
  degree: "Bachelor of Computers & Information Sciences",
  major: "Information Systems",
  university: "Ain Shams University",
  project: "Excellent",
  year: "1999"
};

const certifications = [
  {
    name: "Project Management Professional (PMP)",
    issuer: "PMI",
    date: "October 2017",
    type: "Professional Certification",
    icon: Award
  },
  {
    name: "Microsoft Certified Trainer - Programming C#",
    issuer: "Microsoft",
    code: "2124",
    type: "Technical Certification",
    icon: Star
  },
  {
    name: "Core Web Application Technologies with Visual Studio 2005",
    issuer: "Microsoft",
    code: "2543",
    type: "Technical Certification",
    icon: Star
  },
  {
    name: "Advanced Web Application Technologies with Visual Studio 2005",
    issuer: "Microsoft",
    code: "2544",
    type: "Technical Certification",
    icon: Star
  },
  {
    name: "Core Data Access with Visual Studio 2005",
    issuer: "Microsoft",
    code: "2541",
    type: "Technical Certification",
    icon: Star
  },
  {
    name: "Advanced Data Access with Visual Studio 2005",
    issuer: "Microsoft",
    code: "2542",
    type: "Technical Certification",
    icon: Star
  },
  {
    name: "Implementing Microsoft SQL Server 2008 Database",
    issuer: "Microsoft",
    code: "6232",
    type: "Database Certification",
    icon: Star
  },
  {
    name: "Maintaining Microsoft SQL Server 2008 Database",
    issuer: "Microsoft",
    code: "6231",
    type: "Database Certification",
    icon: Star
  },
  {
    name: "Eccairs Program Certificate of Appreciation",
    issuer: "ICAO",
    date: "February 5-9, 2017",
    type: "Specialized Training",
    icon: Award
  },
  {
    name: "Management, Analysis, and Interpretation of Information",
    issuer: "Institute of National Planning",
    date: "January 28 - February 1, 2007",
    type: "Professional Development",
    icon: Award
  }
];

export const EducationSection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('education')}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            Academic foundation and professional certifications driving technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Education */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 h-full bg-gradient-card border-0 shadow-elegant animate-fade-in">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className={`text-lg font-semibold text-foreground ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {education.degree}
                  </h4>
                  <p className="text-primary font-medium">{education.major}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground">{education.university}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{education.year}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Graduation Project: {education.project}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold mb-6 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                Professional Certifications
              </h3>
              
              <div className="grid gap-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-4 hover:shadow-card transition-all duration-300 bg-gradient-card border-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className={`font-semibold text-foreground leading-tight ${
                                language === 'ar' ? 'font-arabic' : 'font-english'
                              }`}>
                                {cert.name}
                              </h4>
                              <p className="text-sm text-primary font-medium mt-1">
                                {cert.issuer}
                              </p>
                              {cert.code && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  Code: {cert.code}
                                </p>
                              )}
                              {cert.date && (
                                <div className="flex items-center gap-1 mt-2">
                                  <Calendar className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                                </div>
                              )}
                            </div>
                            
                            <Badge 
                              variant="secondary"
                              className="bg-secondary/20 text-secondary hover:bg-secondary/30 flex-shrink-0"
                            >
                              {cert.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};