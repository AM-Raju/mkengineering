import Clients from "@/components/home/Clients";
import FAQ from "@/components/home/Faq";
import ServiceSection from "@/components/home/Services";
import Slider from "@/components/home/Slider";
import StatsSection from "@/components/home/StatsSection";
import Team from "@/components/home/Team";
import Testimonial from "@/components/home/Testimonial";
import WorkGallery from "@/components/home/WorkGallery";

const homePage = () => {
  return (
    <div>
      <Slider></Slider>
      <ServiceSection></ServiceSection>
      <WorkGallery></WorkGallery>
      <StatsSection></StatsSection>
      <Testimonial></Testimonial>
      <Clients></Clients>
      <Team></Team>
      <FAQ></FAQ>
    </div>
  );
};

export default homePage;
