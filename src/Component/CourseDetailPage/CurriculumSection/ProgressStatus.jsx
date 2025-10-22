import { FaCheck, FaRocket, FaBookOpen } from "react-icons/fa";

export default function ProgressStatus({ progress }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {progress === 100 && (
        <>
          <FaCheck className="text-green-500" /> Completed
        </>
      )}
      {progress > 0 && progress < 100 && (
        <>
          <FaRocket className="text-primary" /> In Progress
        </>
      )}
      {progress === 0 && (
        <>
          <FaBookOpen className="text-gray-400" /> Ready to Start
        </>
      )}
    </div>
  );
}
