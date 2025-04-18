
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info } from "lucide-react";

// Mock data for categories and their products
const categories = [
  {
    id: 1,
    name: "Excavators",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Powerful digging machines for all terrains",
    products: [
      {
        id: 1,
        name: "CAT 336 Excavator",
        image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
        price: 225000,
        rating: 4.9,
        featured: true
      },
      {
        id: 5,
        name: "Hitachi ZX350LC-6 Excavator",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
        price: 195000,
        rating: 4.6,
        featured: false
      },
      {
        id: 9,
        name: "Komatsu PC210LC-11 Excavator",
        image: "https://images.unsplash.com/photo-1586416854864-0d0f8ea552fb",
        price: 180000,
        rating: 4.7,
        featured: false
      },
      {
        id: 10,
        name: "JCB JS220 Excavator",
        image: "https://images.unsplash.com/photo-1547609434-9b887fe7d382",
        price: 150000,
        rating: 4.5,
        featured: false
      }
    ]
  },
  {
    id: 2,
    name: "Bulldozers",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "Heavy-duty earth moving equipment",
    products: [
      {
        id: 2,
        name: "Komatsu D61PXi Bulldozer",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        price: 175000,
        rating: 4.7,
        featured: true
      },
      {
        id: 11,
        name: "CAT D6 Bulldozer",
        image: "https://images.unsplash.com/photo-1597358271894-5790f7e3f8fa",
        price: 195000,
        rating: 4.8,
        featured: false
      },
      {
        id: 12,
        name: "John Deere 850K Bulldozer",
        image: "https://images.unsplash.com/photo-1505471768190-275e2ad236d9",
        price: 165000,
        rating: 4.6,
        featured: false
      }
    ]
  },
  {
    id: 3,
    name: "Loaders",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    description: "Versatile loading and material handling",
    products: [
      {
        id: 3,
        name: "Volvo L350H Wheel Loader",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        price: 310000,
        rating: 4.8,
        featured: true
      },
      {
        id: 6,
        name: "Bobcat S650 Skid-Steer Loader",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
        price: 42000,
        rating: 4.5,
        featured: false
      },
      {
        id: 13,
        name: "CAT 966M Wheel Loader",
        image: "https://images.unsplash.com/photo-1511027643897-af9c005db61d",
        price: 280000,
        rating: 4.7,
        featured: false
      }
    ]
  },
  {
    id: 4,
    name: "Cranes",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "Lifting solutions for construction projects",
    products: [
      {
        id: 4,
        name: "Liebherr LTM 1450-8.1 Mobile Crane",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
        price: 850000,
        rating: 4.9,
        featured: false
      },
      {
        id: 14,
        name: "Manitowoc MLC300 Crawler Crane",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        price: 750000,
        rating: 4.8,
        featured: false
      },
      {
        id: 15,
        name: "Terex RT 90 Rough Terrain Crane",
        image: "https://images.unsplash.com/photo-1601541034058-54e16bb2aa93",
        price: 550000,
        rating: 4.6,
        featured: false
      }
    ]
  }
];

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const categoryId = parseInt(id || "0");
  
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="mb-6">The category you're looking for doesn't exist.</p>
            <Button asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div 
          className="w-full h-[300px] flex items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${category.image}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">
              {category.name}
            </h1>
            <p className="text-xl mb-0 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">{category.name} Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
