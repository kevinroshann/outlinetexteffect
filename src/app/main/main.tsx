import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Button } from "@/components/ui/button";
import Features from "@/app/features/features";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Main = () => {
    const imageSrc = "images/outline1.jpg"; // Change this to your image source or leave it empty for testing
    const title = "Create Cool Outline Text Effect"; // Replace with your desired title
    const description = "Create your own Images With Creative and Trending Outline Text Effect "; // Replace with your description
    const scrollToSection = () => {
      const targetSection = document.getElementById("target-section");
      targetSection?.scrollIntoView({ behavior: "smooth" });
    };
    return ( <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 w-full lg:w-auto">
        
        {/* Text Section */}
        <div className="flex flex-col mt-10 space-y-4">
        <h1 className="text-3xl lg:text-7xl font-bold text-center">{title}</h1>
<p className="text-gray-700 text-base lg:text-lg text-center">{description}</p>

  
  <Button 
    onClick={scrollToSection} 
    className="mt-4 lg:mt-20 lg:w-auto text-3xl lg:text-2xl" 
    variant="default"
  >
   Join The Waitlist
  </Button>
</div>
        {/* Image Section */}
        <div className="w-full lg:w-[600px] relative">
          <AspectRatio ratio={10 / 9}>
            {imageSrc ? (
              <Image 
                src="/images/outline1.jpg"
                alt="Image" 
                className="rounded-md object-cover" 
                fill 
              />
            ) : (
              <div className="rounded-md bg-gray-300 flex items-center justify-center h-full">
                <p className="text-gray-600">No Image Available</p>
              </div>
            )}
          </AspectRatio>
        </div>
      </div> );
}
 
export default Main;