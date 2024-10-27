// src/app/page.tsx
"use client"

import FilloutEmbed from './waitlist/Filloutembed';

import Features from "@/app/features/features";
import Opinion from "./opinion/opinion";
import Feedback from "./feedback/feedback";
import Main from "./main/main";
import MoreImages from "./moreimages/moreimages";


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
