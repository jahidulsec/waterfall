import UploadDocumentForm from "@/components/company-captable/UploadDocumentForm";
import React from "react";

function CapTablePage() {
  return (
    <>
      {/* header */}
      <div className="mb-14">
        <h1 className="text-3xl font-medium mb-3">Upload Document</h1>
        <p className="text-sm text-muted-foreground">
          Upload your preferred documents for lorem reason
        </p>
      </div>

      <UploadDocumentForm />

    </>
  );
}

export default CapTablePage;
