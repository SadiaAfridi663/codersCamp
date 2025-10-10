
import heroimage from "../../assets/hero.avif"
import Button from "./UI/Button";
import Input from "./UI/Input";
import HeroRight from "./HeroRight";

const HeroSection = ({ title, SubTitle,}) => {
 
  return (
    <section
      className="relative flex items-center justify-around overflow-hidden px-10 pb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10  text-center max-w-3xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>

        <p className="text-xl md:text-2xl text-white mb-7 max-w-3xl mx-auto leading-relaxed">
          {SubTitle}
        </p>

       
        
          {/* Search */}
          <Input type="text"  placeholder="enter text here" />
        

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button text="Browse Course" />
          <Button text=" Start Learning for Free" variant="outline" />
        </div>
      </div>

        {/* Right Section */}
      <HeroRight
        Righttitle="Courses For Every Level"
        secondtital="Biggner To Advance"
        thirdtitle="Learning in process"
      />


    </section>
  );
};

export default HeroSection;
