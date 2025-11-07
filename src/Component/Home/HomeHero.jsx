import heroimage from "../../assets/hero.avif";
import Button from "../UI/Button";
import Input from "../UI/Input";
import HeroRight from "./HeroRight";
import { Link } from "react-router-dom";

const HeroSection = ({ title, SubTitle }) => {
  return (
    <section
      className=" relative flex flex-col md:flex-row items-center lg:justify-around  overflow-hidden px-10 pb-10 bg-cover bg-center bg-no-repeat lg:pt-0 pt-10 "
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

        {/* Search Input */}
        <div className="flex justify-center lg:justify-center lg:mb-8 mb-4 w-full">
          <Input
            type="text"
            placeholder="Enter text here"
            className="w-full max-w-xl text-sm sm:text-base"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex  lg:flex-row gap-4 justify-center  items-center mt-6">
          <Link to="/courses" className="w-full sm:w-auto">
            <Button
              text="Explore Courses"
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
            />
          </Link>
          <Link to="/about#FreeDemo" className="w-full sm:w-auto">
            <Button
              text="Free Demo"
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            />
          </Link>
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
