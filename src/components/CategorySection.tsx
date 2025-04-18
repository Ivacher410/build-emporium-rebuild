
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: "Excavators",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Powerful digging machines for all terrains"
  },
  {
    id: 2,
    name: "Bulldozers",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "Heavy-duty earth moving equipment"
  },
  {
    id: 3,
    name: "Loaders",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    description: "Versatile loading and material handling"
  },
  {
    id: 4,
    name: "Cranes",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "Lifting solutions for construction projects"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Equipment Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="overflow-hidden h-full equipment-card transition-all duration-200">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
