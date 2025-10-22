import { FaClock, FaCheck } from "react-icons/fa";
import { Syllabus } from "../../../../Data/Courses.Array";
import Button from "../../UI/Button";

export default function LessonItem({ lesson }) {
  return (
    <div className="group/lesson bg-white rounded-xl border-2 border-gray-100 hover:border-blue-300 p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <div className="p-3 rounded-xl border-2 text-primary bg-primary-light transition-transform duration-300 group-hover/lesson:scale-110">
            {lesson.icon && <lesson.icon className="text-lg" />}
          </div> */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 group-hover/lesson:text-blue-600 transition-colors">
              {lesson.name}
            </h4>
            <div className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <FaClock className="text-primary" />
                {lesson.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium capitalize text-primary bg-primary-light border">
                {lesson.type}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {lesson.completed && (
            <span className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium flex items-center gap-2 border-1 border-primary-dark">
              <FaCheck className="text-primary" />
              Completed
            </span>
          )}
          <Button text="Start Lesson"  />
        </div>
      </div>
    </div>
  );
}
