import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

  
  const Features = () => {
    const imageSrc = ""; // Change this to your image source or leave it empty for testing
    return (
      <div className="px-5 lg:px-20 ">
        <h1 className="text-6xl font-bold m-10 text-center">How It Works</h1>{/* Title with larger font */}
        
        <div className="flex flex-wrap justify-between gap-4">
          {/* Card 1 */}
          <Card className="flex-1 min-w-[300px] max-w-[350px] p-4 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-3xl font-bold">Upload The Image</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <div className="w-[200px] h-[200px] relative mx-auto">
                <AspectRatio ratio={10 / 9}>
                  {imageSrc ? (
                    <Image 
                      src={imageSrc} 
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
              </div> */}
              <p className="mt-2 text-gray-700">Upload the image in the specified area</p>
            </CardContent>
          </Card>
  
          {/* Card 2 */}
          <Card className="flex-1 min-w-[300px] max-w-[350px] p-4 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-3xl font-bold">Enter the text</CardTitle>
            </CardHeader>
            <CardContent>
              
              <p className="mt-2 text-gray-700">Enter the text you need and choose the color and position of text through interactive menus</p>
            </CardContent>
          </Card>
  
          {/* Card 3 */}
          <Card className="flex-1 min-w-[300px] max-w-[350px] p-4 border rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-3xl font-bold">Download the Image</CardTitle>
            </CardHeader>
            <CardContent>
              
            
              <p className="mt-2 text-gray-700">Download the output image with outline text effect</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  export default Features;
  