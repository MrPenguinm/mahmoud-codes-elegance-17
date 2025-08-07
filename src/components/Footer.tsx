import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe,
  Send,
  Heart,
  CheckCircle,
  Loader2
} from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: t('requiredField') + ": " + t('formName'),
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Validation Error", 
        description: t('invalidEmail'),
        variant: "destructive"
      });
      return false;
    }
    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: t('requiredField') + ": " + t('formSubject'),
        variant: "destructive"
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: t('requiredField') + ": " + t('formMessage'),
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate email sending - In real implementation, use Supabase Edge Functions
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:engmahmoudfahim@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoLink);
      
      toast({
        title: "Success!",
        description: t('messageSent'),
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: t('messageError'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              {t('contact')}
            </h2>
            <p className={`text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              {t('collaborateDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className={`text-2xl font-semibold ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  {t('getInTouch')}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+966550932402" 
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">+966 55 093 2402</p>
                      <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:engmahmoudfahim@hotmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">engmahmoudfahim@hotmail.com</p>
                      <p className="text-sm text-muted-foreground">Professional inquiries</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Saudi Arabia / Egypt</p>
                      <p className="text-sm text-muted-foreground">Available for remote work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${
                  language === 'ar' ? 'font-arabic' : 'font-english'
                }`}>
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-gradient-card border-0 shadow-elegant">
              <h3 className={`text-xl font-semibold mb-6 ${
                language === 'ar' ? 'font-arabic' : 'font-english'
              }`}>
                {t('sendMessage')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-sm font-medium text-muted-foreground ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {t('formName')} *
                    </label>
                    <Input 
                      placeholder={t('formNamePlaceholder')}
                      className="mt-1"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className={`text-sm font-medium text-muted-foreground ${
                      language === 'ar' ? 'font-arabic' : 'font-english'
                    }`}>
                      {t('formEmail')} *
                    </label>
                    <Input 
                      type="email" 
                      placeholder={t('formEmailPlaceholder')}
                      className="mt-1"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`text-sm font-medium text-muted-foreground ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('formSubject')} *
                  </label>
                  <Input 
                    placeholder={t('formSubjectPlaceholder')}
                    className="mt-1"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className={`text-sm font-medium text-muted-foreground ${
                    language === 'ar' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('formMessage')} *
                  </label>
                  <Textarea 
                    placeholder={t('formMessagePlaceholder')}
                    className="mt-1 min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t('sendMessage')}
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`text-sm text-muted-foreground ${
              language === 'ar' ? 'font-arabic' : 'font-english'
            }`}>
              © 2024 {t('name')}. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for software engineering excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};