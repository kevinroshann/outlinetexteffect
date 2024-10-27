// src/app/page.tsx
"use client"
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import FilloutEmbed from './waitlist/Filloutembed';
import { Button } from "@/components/ui/button";
import Features from "@/app/features/features";
import Opinion from "./opinion/opinion";
import Feedback from "./feedback/feedback";
import Main from "./main/main";
import MoreImages from "./moreimages/moreimages";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
 
  return (
    <div className="flex flex-col items-center p-5 lg:p-10 space-y-10"> {/* Responsive padding and spacing */}
      <Main/>
     <Features />
      <Opinion />
      <section id="target-section" className="w-full">
        <FilloutEmbed />
      </section>


<MoreImages/>

      <Feedback />
    </div>
  );
};

export default HomePage;
