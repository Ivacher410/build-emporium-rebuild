
import React from 'react';
import { Button } from "@/components/ui/button";
import { HardHat, ShieldCheck, TrendingUp, Truck } from "lucide-react";

const features = [
  {
    icon: HardHat,
    title: "Expert Advice",
    description: "Our team of construction equipment specialists can help you find the right machinery for your specific needs."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "All our equipment undergoes rigorous quality control and meets industry standards."
  },
  {
    icon: TrendingUp,
    title: "Advanced Technology",
    description: "Stay ahead with our cutting-edge construction equipment featuring the latest innovations."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We offer nationwide delivery and can expedite shipping for urgent project needs."
  }
];

const AboutSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">About BuildEmporium</h2>
            <p className="text-muted-foreground mb-6">
              BuildEmporium is a leading provider of construction equipment with over 25 years of experience in the industry. 
              We offer a wide range of high-quality machinery from trusted manufacturers to help construction professionals 
              complete their projects efficiently and safely.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you're looking for excavators, bulldozers, loaders, or cranes, we have the right equipment to meet your needs. 
              Our team of experts is ready to assist you in finding the perfect machinery for your specific requirements.
            </p>
            <Button>Learn More About Us</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
