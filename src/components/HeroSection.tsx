import { Button } from "@/components/ui/button";
import { Clock, Users, Zap } from "lucide-react";
import heroBusinessImg from "@/assets/hero-business.jpg";
import heroCustomerImg from "@/assets/hero-customer.jpg";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Skip the Queue,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Book Your Slot
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with service providers across medical, food, fashion, salons, and more. 
              Book slots, track live queues, and get notified when it's your turn.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-3"
              >
                <Users className="mr-2 h-5 w-5" />
                Book a Slot
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3"
              >
                <Clock className="mr-2 h-5 w-5" />
                For Business
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Real-time</p>
                  <p className="text-sm text-muted-foreground">Queue tracking</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instant</p>
                  <p className="text-sm text-muted-foreground">Notifications</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Universal</p>
                  <p className="text-sm text-muted-foreground">All services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={heroBusinessImg} 
                  alt="Business management" 
                  className="rounded-lg shadow-card w-full h-48 object-cover"
                />
                <div className="bg-card p-4 rounded-lg shadow-card border border-border">
                  <p className="text-sm font-medium text-foreground">Queue Status</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-muted-foreground">5 people ahead</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-card p-4 rounded-lg shadow-card border border-border">
                  <p className="text-sm font-medium text-foreground">Next in line</p>
                  <p className="text-lg font-bold text-primary mt-1">3 min</p>
                </div>
                <img 
                  src={heroCustomerImg} 
                  alt="Customer booking" 
                  className="rounded-lg shadow-card w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}