import Banner from "@/components/Banner";
import Bio from "@/components/Bio";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import WorkTogether from "@/components/WorkTogether";


export default function Home() {
  return (
    <>
      <Banner /> 
      <Services />     
      <Bio />
      <Skills />
      <Work />
      <Experience />
      <WorkTogether />
    </>
  );
}
