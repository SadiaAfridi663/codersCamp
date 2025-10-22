import { FaDownload } from "react-icons/fa";

export default function DownloadSection() {
  return (
    <div className="text-center mt-20">
      <div className="relative bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border-2 border-blue-100 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 opacity-20 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300 opacity-20 rounded-full translate-y-16 -translate-x-16"></div>

        <div className="relative">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to <span className="text-primary-dark">Master</span> These Skills?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Download the complete syllabus and start your journey to becoming an
            expert today
          </p>
          <button className="px-12 py-4 bg-white border-2 border-primary-dark text-primary-dark rounded-2xl font-bold hover:bg-primary-dark  hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto group text-lg">
            <FaDownload className="group-hover:animate-bounce" />
            Download Complete Syllabus
          </button>
          <p className="text-gray-500 text-sm mt-4">
            PDF Format • Updated Regularly
          </p>
        </div>
      </div>
    </div>
  );
}
