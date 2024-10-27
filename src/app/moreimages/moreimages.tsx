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

const MoreImages = () => {
    const imageSrc1='/images/outlineorg.jpg'
    const imageSrc2='/images/outline2.jpg'
    return ( 
    
    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 w-full lg:w-auto">
        
        {/* Text Section */}
        <div className="flex flex-col mt-10 space-y-4">
        <h1 className="text-6xl font-bold m-10">More Images</h1> {/* Title with larger font */}
        
        <div className="flex flex-wrap justify-between gap-4">
        <Card className="flex-1 min-w-[300px] max-w-[350px] p-1 border rounded-lg shadow-md">
            
              
                <AspectRatio ratio={10 / 9}>
                  {imageSrc1 ? (
                    <Image 
                      src={imageSrc1} 
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
            
              
          </Card>
          <Card className="flex-1 min-w-[300px] max-w-[350px] p-1 border rounded-lg shadow-md">
            
              
                <AspectRatio ratio={10 / 9}>
                  {imageSrc2 ? (
                    <Image 
                      src={imageSrc2} 
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
            
              
          </Card>
          
          
          
          </div>
            </div></div> );
}
 
export default MoreImages;