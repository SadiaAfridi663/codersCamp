import React from 'react'
import CourseHero from '../Component/CourseDetailPage/HeroSection/Hero'
// import Syllabus from '../Component/CourseDetailPage/Syllabus'
import CurriculumSection from '../Component/CourseDetailPage/CurriculumSection/CurriculumSection'
import CourseVideo from '../Component/CourseDetailPage/SampleVideoSection/CourseVideo'
import CTASection from '../Component/Home/CTASection'

export default function CourseDetailPage() {
  return (
    <div>
      <CourseHero />
      <CurriculumSection/>
      <CourseVideo />
      <CTASection />
    </div>
  )
}
