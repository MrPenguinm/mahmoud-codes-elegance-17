import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Database, 
  Server, 
  Globe, 
  Users,
  BarChart3,
  Shield,
  Zap,
  Workflow
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Enterprise ERP Implementation",
    titleAr: "تنفيذ نظام ERP للمؤسسات",
    description: "Led the complete implementation of Oracle ERP system for a manufacturing company with 500+ employees, integrating finance, HR, inventory, and production modules.",
    descriptionAr: "قدت التنفيذ الكامل لنظام Oracle ERP لشركة تصنيع تضم أكثر من 500 موظف، مع دمج وحدات المالية والموارد البشرية والمخزون والإنتاج.",
    technologies: ["Oracle ERP", "PL/SQL", "Oracle Database", "Java", "Web Services", "ETL"],
    category: "ERP Systems",
    image: "/api/placeholder/600/400",
    results: ["40% reduction in processing time", "99.9% system uptime", "$2M cost savings annually"],
    resultsAr: ["تقليل وقت المعالجة بنسبة 40%", "وقت تشغيل النظام 99.9%", "توفير 2 مليون دولار سنوياً"],
    icon: Database,
    featured: true
  },
  {
    id: 2,
    title: "Asset Management System",
    titleAr: "نظام إدارة الأصول",
    description: "Developed comprehensive IBM Maximo-based asset management solution for oil & gas industry, managing $50M+ in equipment assets.",
    descriptionAr: "طورت حل إدارة أصول شامل قائم على IBM Maximo لصناعة النفط والغاز، يدير أصول معدات بقيمة تزيد عن 50 مليون دولار.",
    technologies: ["IBM Maximo", "Java", "Oracle Database", "JavaScript", "Automation Scripts", "REST APIs"],
    category: "Asset Management",
    image: "/api/placeholder/600/400",
    results: ["35% reduction in maintenance costs", "50% faster work order processing", "Real-time asset tracking"],
    resultsAr: ["تقليل تكاليف الصيانة بنسبة 35%", "معالجة أوامر العمل أسرع بنسبة 50%", "تتبع الأصول في الوقت الفعلي"],
    icon: Server,
    featured: true
  },
  {
    id: 3,
    title: "Database Optimization Project",
    titleAr: "مشروع تحسين قاعدة البيانات",
    description: "Optimized performance of critical database systems handling 10M+ daily transactions, achieving 60% performance improvement.",
    descriptionAr: "حسنت أداء أنظمة قواعد البيانات الحيوية التي تتعامل مع أكثر من 10 مليون معاملة يومياً، محققاً تحسناً في الأداء بنسبة 60%.",
    technologies: ["MSSQL Server", "PostgreSQL", "T-SQL", "Performance Tuning", "Indexing", "Query Optimization"],
    category: "Database Administration",
    image: "/api/placeholder/600/400",
    results: ["60% query performance improvement", "Reduced database size by 30%", "Zero downtime migration"],
    resultsAr: ["تحسين أداء الاستعلامات بنسبة 60%", "تقليل حجم قاعدة البيانات بنسبة 30%", "ترحيل بدون توقف"],
    icon: BarChart3,
    featured: false
  },
  {
    id: 4,
    title: "Web Application Development",
    titleAr: "تطوير تطبيق الويب",
    description: "Built modern web application for supply chain management using React, Node.js, and microservices architecture.",
    descriptionAr: "بنيت تطبيق ويب حديث لإدارة سلسلة التوريد باستخدام React و Node.js وهندسة الخدمات المصغرة.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "AWS"],
    category: "Web Development",
    image: "/api/placeholder/600/400",
    results: ["300% faster order processing", "Mobile-responsive design", "Real-time inventory tracking"],
    resultsAr: ["معالجة الطلبات أسرع بنسبة 300%", "تصميم متجاوب للجوال", "تتبع المخزون في الوقت الفعلي"],
    icon: Globe,
    featured: false
  }
];

export const ProjectsSection = () => {
  const { language, t } = useLanguage();

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-muted/30 to-accent/5">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('projects')}
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 ${
            language === 'ar' ? 'font-arabic' : 'font-english'
          }`}>
            {t('projectsDesc')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 ${
            language === 'ar' ? 'font-arabic text-right' : 'font-english'
          }`}>
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-primary overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-6">
                  <h4 className={`text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-tight ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {language === 'ar' ? project.titleAr : project.title}
                  </h4>
                  
                  <p className={`text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed ${
                    language === 'ar' ? 'font-arabic text-right' : 'font-english'
                  }`}>
                    {language === 'ar' ? project.descriptionAr : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-1.5 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4 sm:mb-6">
                    <h5 className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-accent ${
                      language === 'ar' ? 'font-arabic text-right' : 'font-english'
                    }`}>
                      {t('results')}:
                    </h5>
                    <ul className="space-y-1">
                      {(language === 'ar' ? project.resultsAr : project.results).slice(0, 2).map((result, idx) => (
                        <li key={idx} className={`text-xs sm:text-sm text-muted-foreground flex items-start gap-2 ${
                          language === 'ar' ? 'font-arabic' : 'font-english'
                        }`}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="leading-tight">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-xs sm:text-sm py-1.5 sm:py-2 touch-manipulation">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {t('viewProject')}
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm py-1.5 sm:py-2 touch-manipulation">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 ${
            language === 'ar' ? 'font-arabic text-right' : 'font-english'
          }`}>
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-gradient-card"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-1 ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {language === 'ar' ? project.titleAr : project.title}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <p className={`text-sm text-muted-foreground mb-4 ${
                  language === 'ar' ? 'font-arabic text-right' : 'font-english'
                }`}>
                  {language === 'ar' ? project.descriptionAr : project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
