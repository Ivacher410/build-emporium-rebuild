
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Truck, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-muted py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">About BuildEmporium</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in construction equipment since 1995
            </p>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 1995, BuildEmporium has grown from a small equipment rental company to a leading provider of construction equipment for professionals and businesses across the country.
              </p>
              <p className="text-lg mb-4">
                Our journey began with a simple mission: to provide reliable, high-quality construction equipment with exceptional customer service. Today, we continue to uphold these values while expanding our product offerings and services.
              </p>
              <p className="text-lg">
                With over 25 years of industry experience, we understand the challenges and demands of construction projects. That's why we're committed to offering not just equipment, but complete solutions tailored to our customers' needs.
              </p>
            </div>
            <div className="relative h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb" 
                alt="BuildEmporium headquarters" 
                className="rounded-lg object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Our team of industry professionals brings decades of combined experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
                <p className="text-muted-foreground">We source only the best equipment from trusted manufacturers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Our efficient logistics network ensures timely delivery to your site.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Reliable Support</h3>
                <p className="text-muted-foreground">We provide 24/7 support for all equipment and services.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <Button size="lg">Contact Our Team</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
