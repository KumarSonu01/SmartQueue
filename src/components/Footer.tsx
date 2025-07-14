import { Clock, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Clock className="h-6 w-6 text-primary-light" />
              SmartQueue
            </div>
            <p className="text-background/70 mb-6">
              The universal platform connecting customers with service providers 
              through intelligent queue management.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/customer/book" className="text-background/70 hover:text-background transition-colors">Healthcare</Link></li>
              <li><Link to="/customer/book" className="text-background/70 hover:text-background transition-colors">Restaurants</Link></li>
              <li><Link to="/customer/book" className="text-background/70 hover:text-background transition-colors">Beauty & Salons</Link></li>
              <li><Link to="/customer/book" className="text-background/70 hover:text-background transition-colors">Retail & Shopping</Link></li>
              <li><Link to="/customer/book" className="text-background/70 hover:text-background transition-colors">Government Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-background/70 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-background/70 hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/help" className="text-background/70 hover:text-background transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-light" />
                <span className="text-background/70 text-sm">hello@smartqueue.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-light" />
                <span className="text-background/70 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-light" />
                <span className="text-background/70 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 SmartQueue. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-background/70 hover:text-background text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}