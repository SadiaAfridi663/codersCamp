import React from 'react'
import { popularCourses } from '../../../Data/Array'

export default function FeaturedCoursesCategories() {
  return (
    <div className='bg-[from-blue-500 to-cyan-500] py-10'>
    <div className='grid grid-cols-1 bg-gray-100 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 mb-20'>
      {popularCourses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.desc}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

   