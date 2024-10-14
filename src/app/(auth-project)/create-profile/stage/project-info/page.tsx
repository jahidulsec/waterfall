import ProjectForm from "@/components/project-info/ProjectForm";
import React from "react";

function ProjectInfoPage() {
  return (
    <>
      {/* header */}
      <div className="mb-14">
        <h1 className="text-3xl font-medium mb-3">Project Information</h1>
        <p className="text-sm text-muted-foreground">
          Provide the details of your project
        </p>
      </div>

      <ProjectForm />
    </>
  );
}

export default ProjectInfoPage;
