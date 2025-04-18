
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium">Home</Link>
                <Link to="/products" className="text-lg font-medium">Products</Link>
                <Link to="/services" className="text-lg font-medium">Services</Link>
                <Link to="/about" className="text-lg font-medium">About Us</Link>
                <Link to="/contact" className="text-lg font-medium">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl sm:text-2xl">BUILD<span className="text-primary">EMPORIUM</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/products" className="text-sm font-medium hover:text-primary">Products</Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary">Services</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+1234567890" className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-primary">
            <Phone className="h-4 w-4" />
            <span>1-800-BUILD-NOW</span>
          </a>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
