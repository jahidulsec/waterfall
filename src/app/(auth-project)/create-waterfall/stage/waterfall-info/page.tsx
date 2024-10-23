import ProjectForm from "@/components/waterfall-info/ProjectForm";
import React from "react";

function ProjectInfoPage() {
  return (
    <>
      {/* header */}
      <div className="mb-14">
        <h1 className="text-3xl font-medium mb-3">Waterfall Information</h1>
        <p className="text-sm text-muted-foreground">
          Provide the details of your waterfall
        </p>
      </div>

      <ProjectForm />
    </>
  );
}

export default ProjectInfoPage;
