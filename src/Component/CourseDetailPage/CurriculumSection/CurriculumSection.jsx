import React, { useState } from "react";
import { Syllabus } from "../../../../Data/Courses.Array";
import HeaderSection from "./HeaderSection";
import ModuleCard from "./ModuleCard";
import DownloadSection from "./DownloadSection";

const CurriculumSection = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const toggleModule = (id) =>
    setExpandedModule(expandedModule === id ? null : id);

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <HeaderSection Syllabus={Syllabus} />
      <div className="space-y-6">
        {Syllabus.modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
            expandedModule={expandedModule}
            toggleModule={toggleModule}
          />
        ))}
      </div>
      <DownloadSection />
    </div>
  );
};

export default CurriculumSection;
