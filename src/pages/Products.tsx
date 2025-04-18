import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info } from "lucide-react";
import OrderDialog from '@/components/OrderDialog';

const products = [
  {
    id: 1,
    name: "CAT 336 Excavator",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    price: 225000,
    rating: 4.9,
    featured: true,
    category: "Excavators"
  },
  {
    id: 2,
    name: "Komatsu D61PXi Bulldozer",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    price: 175000,
    rating: 4.7,
    featured: true,
    category: "Bulldozers"
  },
  {
    id: 3,
    name: "Volvo L350H Wheel Loader",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    price: 310000,
    rating: 4.8,
    featured: true,
    category: "Loaders"
  },
  {
    id: 4,
    name: "Liebherr LTM 1450-8.1 Mobile Crane",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    price: 850000,
    rating: 4.9,
    featured: false,
    category: "Cranes"
  },
  {
    id: 5,
    name: "Hitachi ZX350LC-6 Excavator",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    price: 195000,
    rating: 4.6,
    featured: false,
    category: "Excavators"
  },
  {
    id: 6,
    name: "Bobcat S650 Skid-Steer Loader",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    price: 42000,
    rating: 4.5,
    featured: false,
    category: "Loaders"
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<null | typeof products[0]>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="text-3xl font-bold mb-6">All Construction Equipment</h1>
          
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
                  <Badge variant="outline" className="mb-2">{product.category}</Badge>
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
                  <Button 
                    className="w-full"
                    onClick={() => setSelectedProduct(product)}
                  >
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
      </main>
      <Footer />
      {selectedProduct && (
        <OrderDialog
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
