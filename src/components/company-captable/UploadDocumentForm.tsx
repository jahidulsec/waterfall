"use client";

import React, { useState } from "react";
import DnDFileInput from "../inputs/DnDFileInput";
import FileCard from "./FileCard";

function UploadDocumentForm() {
  const [uploadedFiles, setUploadedFiles] = useState<(File | undefined)[]>([]);

  return (
    <form className="flex flex-col gap-5 mb-10">
      <DnDFileInput fileState={uploadedFiles} onFileChange={setUploadedFiles} />

      <div className="uploaded-files flex flex-col gap-5">
        {uploadedFiles &&
          uploadedFiles.length != 0 &&
          uploadedFiles.map((file, index) => (
            <FileCard
              key={index}
              index={index}
              name={file?.name as string}
              size={Number(file?.size)}
              progress={50}
              onClose={() => {
                setUploadedFiles(() => {
                  return uploadedFiles.filter((item, idx) => {
                    return idx != index
                  })
                })
              }}
            />
          ))}
      </div>
    </form>
  );
}

export default UploadDocumentForm;
