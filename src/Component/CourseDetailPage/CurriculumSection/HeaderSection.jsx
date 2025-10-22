import { FaStar } from "react-icons/fa";

export default function HeaderSection({ Syllabus }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
        <FaStar className="text-yellow-300" />
        Structured Learning Path
      </div>

      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        What You'll <span className="text-primary">Learn</span>
      </h2>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
        Master in-demand skills through our carefully crafted curriculum
        designed for real-world success
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {Syllabus.total.map((item) => (
          <div key={item.title} className="group text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-gray-600 font-medium mt-2">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
