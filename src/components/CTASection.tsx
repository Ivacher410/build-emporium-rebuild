
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Equip Your Projects?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us today to request a quote, schedule a consultation, or learn more about our 
              equipment leasing and financing options. Our team is ready to help you find the perfect 
              solution for your construction needs.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">Call us: 1-800-BUILD-NOW</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-medium">Email: info@buildemporium.com</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <Input id="company" placeholder="Your Company" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="equipment" className="text-sm font-medium">Equipment Needed</label>
                <Input id="equipment" placeholder="Excavator, Bulldozer, etc." />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project needs..."
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
