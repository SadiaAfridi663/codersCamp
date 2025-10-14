import React from 'react'
import HomeHero from "../Component/Home/HomeHero"
import Categories from '../Component/Home/Categories/Categories'  
import WhyChooseUs from '../Component/Home/WhyChoseUs'
import FeaturedCourses from '../Component/Home/FeaturedCourses'
import HowItWorks from '../Component/Home/HowItWorks'
import TopInstructors from '../Component/Home/TopInstructor'
import CTASection from "../Component/Home/CTASection"
import Footer from '../Component/Home/UI/Footer'



export default function Home() {
  return (
    <div>
      < HomeHero
      title="<span class='text-white'>Learn</span><span class='text-white'>,</span> <span class='text-primary'>Anything</span><span class='text-white'>,</span> <span class='text-primary'>AnyTime</span><span class='text-white'>,</span> <span class='text-primary'>AnyWhere</span>"
      SubTitle="Join thousands of learners building their future with our expert-led courses."
      heroimage="../assets/hero.avif"
      />
      <FeaturedCourses/>

     <Categories
       Categoriestitle="Explore Learning Paths"
       CategoriesSubtitle="Discover your perfect learning journey with our curated categories."
     />

     <WhyChooseUs  />
     <HowItWorks />
     <TopInstructors />
     <CTASection/>
     <Footer
    //  title1="Quick Links"
    //  title2="Support"
    //  title3="Contact"
     />
    </div>
  )
}
