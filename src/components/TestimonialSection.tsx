
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at BuildTech Construction",
    content: "The excavator we purchased from BuildEmporium has been a game changer for our projects. Exceptional quality and performance.",
    avatar: "JD"
  },
  {
    name: "Sarah Johnson",
    role: "CEO at Johnson Builders",
    content: "We've been working with BuildEmporium for over 5 years now. Their equipment and service are consistently top notch.",
    avatar: "SJ"
  },
  {
    name: "Michael Rodriguez",
    role: "Site Manager at Rodriguez Construction",
    content: "The delivery was prompt and the bulldozer was exactly as described. BuildEmporium has earned our trust and future business.",
    avatar: "MR"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1 mb-4">
                  <div className="text-3xl text-muted-foreground mb-4">"</div>
                  <p className="italic text-muted-foreground">{testimonial.content}</p>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
