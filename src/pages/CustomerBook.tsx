import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Filter
} from "lucide-react";

export default function CustomerBook() {
  const nearbyServices = [
    {
      id: 1,
      name: "City Medical Center",
      category: "Healthcare",
      location: "Downtown, 0.5 mi",
      rating: 4.8,
      currentQueue: 12,
      estimatedWait: "25 min",
      nextSlot: "2:30 PM",
      status: "Open"
    },
    {
      id: 2,
      name: "Bella Vista Restaurant",
      category: "Restaurant",
      location: "Marina District, 0.8 mi",
      rating: 4.6,
      currentQueue: 8,
      estimatedWait: "15 min",
      nextSlot: "1:45 PM",
      status: "Open"
    },
    {
      id: 3,
      name: "Glamour Hair Salon",
      category: "Beauty",
      location: "Fashion Square, 1.2 mi",
      rating: 4.9,
      currentQueue: 5,
      estimatedWait: "30 min",
      nextSlot: "3:00 PM",
      status: "Open"
    },
    {
      id: 4,
      name: "Fresh Market Grocery",
      category: "Grocery",
      location: "Sunset Avenue, 0.3 mi",
      rating: 4.4,
      currentQueue: 0,
      estimatedWait: "No wait",
      nextSlot: "Available now",
      status: "Open"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Book Your Slot
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find and book appointments with service providers near you. 
            Track your queue position in real-time.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for services, doctors, restaurants..." 
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Location" 
                className="pl-10 md:w-64"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Healthcare", "Restaurant", "Beauty", "Grocery", "Automotive"].map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">
              Nearby Services ({nearbyServices.length})
            </h2>
            <select className="border border-border rounded-md px-3 py-2 text-sm">
              <option>Sort by distance</option>
              <option>Sort by wait time</option>
              <option>Sort by rating</option>
            </select>
          </div>

          <div className="grid gap-6">
            {nearbyServices.map((service) => (
              <Card key={service.id} className="p-6 hover:shadow-card transition-all duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                      <Badge variant="outline">{service.category}</Badge>
                      <Badge 
                        variant={service.status === "Open" ? "default" : "secondary"}
                        className={service.status === "Open" ? "bg-success text-success-foreground" : ""}
                      >
                        {service.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {service.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {service.rating}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{service.currentQueue} in queue</p>
                          <p className="text-xs text-muted-foreground">Current wait</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-warning" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{service.estimatedWait}</p>
                          <p className="text-xs text-muted-foreground">Estimated wait</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-success" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{service.nextSlot}</p>
                          <p className="text-xs text-muted-foreground">Next available</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:min-w-0 lg:w-auto">
                    <Button variant="hero" className="w-full lg:w-auto">
                      Book Now
                    </Button>
                    <Button variant="outline" className="w-full lg:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Services
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}