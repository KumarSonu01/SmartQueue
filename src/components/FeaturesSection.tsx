import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Bell, 
  Users, 
  BarChart, 
  Shield, 
  Smartphone,
  ArrowRight
} from "lucide-react";

export function FeaturesSection() {
  const customerFeatures = [
    {
      icon: Clock,
      title: "Real-time Queue Tracking",
      description: "See your exact position and estimated wait time"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerted when you're 5 people away from your turn"
    },
    {
      icon: Smartphone,
      title: "Mobile-first Design",
      description: "Book and manage appointments on any device"
    }
  ];

  const businessFeatures = [
    {
      icon: Users,
      title: "Queue Management",
      description: "Manage daily slots and customer flow efficiently"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track booking patterns and optimize capacity"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your business data"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a customer looking to save time or a business wanting to 
            improve service efficiency, we've got you covered
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customer Features */}
          <div className="animate-fade-in">
            <Card className="p-8 h-full border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">For Customers</h3>
              </div>
              
              <div className="space-y-6 mb-8">
                {customerFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" className="w-full">
                Start Booking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Business Features */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 h-full border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">For Businesses</h3>
              </div>
              
              <div className="space-y-6 mb-8">
                {businessFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-success/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                Join as Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}