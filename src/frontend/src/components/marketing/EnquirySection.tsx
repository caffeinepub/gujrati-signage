import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useSubmitEnquiry } from '@/hooks/useQueries';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function EnquirySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const submitEnquiry = useSubmitEnquiry();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitEnquiry.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="enquiry"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Make an{' '}
            <span className="heading-gradient">
              Enquiry
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need more information? Get in touch with us and we'll respond promptly
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card
            className={`border-border/50 shadow-premium transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Enquiry Submitted!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for your enquiry. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      disabled={submitEnquiry.isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your contact number"
                      disabled={submitEnquiry.isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      disabled={submitEnquiry.isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      disabled={submitEnquiry.isPending}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={submitEnquiry.isPending}
                  >
                    {submitEnquiry.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
