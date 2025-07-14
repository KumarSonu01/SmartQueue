import { ServiceCard } from "./ServiceCard";
import { 
  Stethoscope, 
  UtensilsCrossed, 
  Shirt, 
  Scissors, 
  ShoppingBag, 
  Car,
  Building2,
  Heart
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Book appointments with doctors, specialists, and medical centers",
      color: "bg-blue-500"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants",
      description: "Reserve tables and skip waiting lines at your favorite restaurants",
      color: "bg-orange-500"
    },
    {
      icon: Shirt,
      title: "Fashion & Retail",
      description: "Book personal shopping sessions and fitting appointments",
      color: "bg-purple-500"
    },
    {
      icon: Scissors,
      title: "Salons & Spas",
      description: "Schedule beauty treatments, haircuts, and wellness services",
      color: "bg-pink-500"
    },
    {
      icon: ShoppingBag,
      title: "Grocery & Markets",
      description: "Reserve shopping slots and avoid crowded store times",
      color: "bg-green-500"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Book service appointments for car maintenance and repairs",
      color: "bg-red-500"
    },
    {
      icon: Building2,
      title: "Government",
      description: "Schedule appointments for licenses, permits, and official documents",
      color: "bg-indigo-500"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Book fitness classes, therapy sessions, and health consultations",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Universal Service Booking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From healthcare to dining, beauty to automotive - manage queues across 
            all service industries in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}