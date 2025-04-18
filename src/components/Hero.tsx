
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-image w-full h-[600px] flex items-center justify-center text-white">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Premium Construction Equipment
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Reliable machinery for construction professionals and businesses
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Browse Equipment
          </Button>
          <Button size="lg" variant="outline" className="bg-background/20 backdrop-blur-sm border-white text-white hover:bg-background/30">
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
