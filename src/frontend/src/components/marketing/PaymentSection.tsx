import { CreditCard, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const paymentFeatures = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Your payment information is protected with industry-standard security',
    },
    {
      icon: Clock,
      title: 'Flexible Payment Terms',
      description: 'Multiple payment options available to suit your project needs',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden fees - clear quotes provided upfront for all projects',
    },
  ];

  return (
    <section id="payment" className="py-20 bg-accent/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="heading-gradient">Payment Information</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer flexible and secure payment options for all our signage solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {paymentFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-3xl mx-auto border-primary/20 shadow-premium">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription className="text-base">
              Contact us for a detailed quote and payment plan tailored to your project
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('enquiry')}
              className="w-full sm:w-auto shadow-premium hover:shadow-premium-lg transition-all duration-300"
            >
              Make an Enquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto border-2 hover:bg-accent/10 shadow-premium-sm hover:shadow-premium transition-all duration-300"
            >
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
