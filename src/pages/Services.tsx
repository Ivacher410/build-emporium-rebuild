
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Equipment Rental",
    description: "Short or long-term rental of our premium construction equipment.",
    features: [
      "Daily, weekly, and monthly rates",
      "Flexible terms for project-based needs",
      "Delivery and pickup services available",
      "Operator training available"
    ],
    image: "https://images.unsplash.com/photo-1529939828339-077fdb5c8336"
  },
  {
    id: 2,
    name: "Equipment Maintenance",
    description: "Professional maintenance services to keep your equipment running smoothly.",
    features: [
      "Scheduled maintenance programs",
      "Emergency repairs",
      "Parts replacement",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
  },
  {
    id: 3,
    name: "Operator Training",
    description: "Comprehensive training programs for safe and effective equipment operation.",
    features: [
      "Certified instructors",
      "Hands-on training sessions",
      "Safety certification",
      "Advanced operation techniques"
    ],
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d"
  },
  {
    id: 4,
    name: "Equipment Financing",
    description: "Flexible financing options to help you acquire the equipment you need.",
    features: [
      "Competitive interest rates",
      "Customized payment plans",
      "Leasing options",
      "Trade-in programs"
    ],
    image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-muted py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions for construction professionals and businesses
            </p>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
