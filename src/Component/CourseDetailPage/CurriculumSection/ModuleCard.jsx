import { FaBookOpen, FaClock, FaChevronDown, FaRocket } from "react-icons/fa";
import ProgressStatus from "./ProgressStatus";
import LessonItem from "./LessonItem";
import Button from "../../UI/Button";

const typeConfig = {
  video: { color: "text-primary bg-primary-light border-blue-100" },
  project: { color: "text-primary bg-primary-light border-blue-100" },
  quiz: { color: "text-primary bg-primary-light border-blue-100" },
  exercise: { color: "text-primary bg-primary-light border-blue-100" },
  article: { color: "text-primary bg-primary-light border-blue-100" },
};

export default function ModuleCard({
  module,
  index,
  expandedModule,
  toggleModule,
}) {
  const isExpanded = expandedModule === module.id;
  const isEven = index % 2 === 0;

  return (
    <div className="group">
      <div
        className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 ${
          isEven ? "hover:border-blue-200" : "hover:border-purple-200"
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 sm:p-8 cursor-pointer transition-all duration-300 bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100`}
          onClick={() => toggleModule(module.id)}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
            {/* Left Section */}
            <div className="flex items-start lg:items-center gap-6 w-full lg:w-auto">
              <div className="relative flex-shrink-0">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg bg-gradient-to-br from-primary to-primary-dark`}
                >
                  {module.id}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-3 leading-snug">
                  {module.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap">
                    <FaBookOpen className="text-primary" />
                    {module.lessons} lessons
                  </span>
                  <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap">
                    <FaClock className="text-primary" />
                    {module.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
              {/* Progress (hidden on small screens) */}
              <div className=" sm:flex flex-col  items-start ">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-24 sm:w-28 bg-gray-200 rounded-full h-2 shadow-inner">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 bg-gradient-to-r from-primary to-primary-dark`}
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 min-w-[40px]">
                    {module.progress}%
                  </span>
                </div>
                <ProgressStatus progress={module.progress} />
              </div>

              {/* Expand Icon */}
              <div
                className={`p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  isEven ? "bg-blue-50" : "bg-purple-50"
                } ${isExpanded ? "rotate-180" : ""}`}
              >
                <FaChevronDown
                  className={`transition-transform duration-500 ${
                    isEven ? "text-blue-500" : "text-purple-500"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        {isExpanded && (
          <div className="border-t border-gray-200">
            <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50">
              <div className="space-y-4 mb-8">
                {module.lessonsList.map((lesson, i) => (
                  <LessonItem key={i} lesson={lesson} />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-200 gap-4 sm:gap-0">
                <ProgressStatus progress={module.progress} />
                <Button
                  text={
                    <>
                      <FaRocket className="inline-block mr-2 text-blue-500" />
                      {module.progress === 100
                        ? "Review Module"
                        : "Start Learning"}
                    </>
                  }
                  variant="outline"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
