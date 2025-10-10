import React from 'react'
import HomeHero from "../Component/Home/HomeHero"
import FeaturedCourses from '../Component/Home/FeaturedCourses'
import Categories from '../Component/Home/Categories/Categories'


export default function Home() {
  return (
    <div>
      < HomeHero
      title="<span class='text-white'>Learn</span><span class='text-white'>,</span> <span class='text-primary'>Anything</span><span class='text-white'>,</span> <span class='text-primary'>AnyTime</span><span class='text-white'>,</span> <span class='text-primary'>AnyWhere</span>"
      SubTitle="Join thousands of learners building their future with our expert-led courses."
      heroimage="../assets/hero.avif"/>
      <FeaturedCourses />
    <Categories/>
    </div>
  )
}
