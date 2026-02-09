import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSubmitOrder } from '@/hooks/useQueries';
import { PRODUCTS } from '@/lib/products';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function OrderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderSummary, setOrderSummary] = useState<{ productName: string; customerName: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    productId: '',
    customerName: '',
    phone: '',
    quantity: '1',
    notes: '',
  });

  const submitOrder = useSubmitOrder();

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

  useEffect(() => {
    const handlePreselectProduct = (event: Event) => {
      const customEvent = event as CustomEvent<{ productId: string }>;
      setFormData((prev) => ({
        ...prev,
        productId: customEvent.detail.productId,
      }));
    };

    window.addEventListener('preselectProduct', handlePreselectProduct);
    return () => window.removeEventListener('preselectProduct', handlePreselectProduct);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const orderInput = {
        productId: formData.productId,
        customerName: formData.customerName,
        phone: formData.phone,
        quantity: BigInt(formData.quantity),
        notes: formData.notes,
      };

      await submitOrder.mutateAsync(orderInput);
      
      const selectedProduct = PRODUCTS.find((p) => p.id === formData.productId);
      setOrderSummary({
        productName: selectedProduct?.name || 'Product',
        customerName: formData.customerName,
      });
      setShowSuccess(true);
      setFormData({ productId: '', customerName: '', phone: '', quantity: '1', notes: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
        setOrderSummary(null);
      }, 7000);
    } catch (error) {
      console.error('Failed to submit order:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProductChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      productId: value,
    }));
  };

  return (
    <section
      id="order"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Place Your{' '}
            <span className="heading-gradient">
              Order
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order? Fill out the form below and we'll process your request immediately
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card
            className={`border-border/50 shadow-premium transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Order Details</CardTitle>
              <CardDescription>
                Select your product and provide your contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess && orderSummary ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Order Placed Successfully!</h3>
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground">
                      Thank you, <span className="font-semibold text-foreground">{orderSummary.customerName}</span>!
                    </p>
                    <p className="text-muted-foreground">
                      Your order for <span className="font-semibold text-foreground">{orderSummary.productName}</span> has been received.
                    </p>
                    <p className="text-muted-foreground">
                      We'll contact you shortly to confirm the details.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="productId">Select Product *</Label>
                    <Select
                      value={formData.productId}
                      onValueChange={handleProductChange}
                      required
                      disabled={submitOrder.isPending}
                    >
                      <SelectTrigger id="productId">
                        <SelectValue placeholder="Choose a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRODUCTS.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customerName">Your Name *</Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      disabled={submitOrder.isPending}
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
                      disabled={submitOrder.isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity (Optional)</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="1"
                      disabled={submitOrder.isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special requirements or notes..."
                      rows={4}
                      disabled={submitOrder.isPending}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={submitOrder.isPending}
                  >
                    {submitOrder.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Placing Order...
                      </>
                    ) : (
                      'Place Order'
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
