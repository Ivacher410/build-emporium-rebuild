
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "CAT 336 Excavator",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    price: 225000,
    rating: 4.9,
    featured: true
  },
  {
    id: 2,
    name: "Komatsu D61PXi Bulldozer",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    price: 175000,
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    name: "Volvo L350H Wheel Loader",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    price: 310000,
    rating: 4.8,
    featured: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Equipment</h2>
          <Button variant="link">View All Products</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden equipment-card transition-all duration-200">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-[4/3] object-cover"
                />
                {product.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>
                <p className="text-2xl font-bold">${product.price.toLocaleString()}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
