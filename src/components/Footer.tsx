
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="font-bold text-xl">BUILD<span className="text-primary">EMPORIUM</span></span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted source for high-quality construction equipment and machinery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/category/1" className="text-muted-foreground hover:text-primary">Excavators</Link></li>
              <li><Link to="/category/2" className="text-muted-foreground hover:text-primary">Bulldozers</Link></li>
              <li><Link to="/category/3" className="text-muted-foreground hover:text-primary">Loaders</Link></li>
              <li><Link to="/category/4" className="text-muted-foreground hover:text-primary">Cranes</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary">All Equipment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/rental" className="text-muted-foreground hover:text-primary">Equipment Rental</Link></li>
              <li><Link to="/services/financing" className="text-muted-foreground hover:text-primary">Financing Options</Link></li>
              <li><Link to="/services/maintenance" className="text-muted-foreground hover:text-primary">Maintenance & Repair</Link></li>
              <li><Link to="/services/parts" className="text-muted-foreground hover:text-primary">Spare Parts</Link></li>
              <li><Link to="/services/training" className="text-muted-foreground hover:text-primary">Operator Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>1234 Construction Way</p>
              <p>Building Industry Park</p>
              <p>Equipment City, EC 12345</p>
              <p className="pt-2">Phone: 1-800-BUILD-NOW</p>
              <p>Email: info@buildemporium.com</p>
            </address>
          </div>
        </div>
        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} BuildEmporium. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
