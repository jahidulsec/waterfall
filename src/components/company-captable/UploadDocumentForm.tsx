"use client";

import React, { ChangeEvent, useState } from "react";
import DnDFileInput from "../inputs/DnDFileInput";
import FileCard from "./FileCard";

function UploadDocumentForm() {
  const [uploadedFiles, setUploadedFiles] = useState<(File | undefined)[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null && e.target.files[0] != undefined) {
      setUploadedFiles(() => {
        if (uploadedFiles.length == 0) {
          return [e.target.files?.[0]];
        } 
        return [
          ...uploadedFiles,
          e.target.files?.[0]
        ]
      });
    }
  }

  return (
    <form className="flex flex-col gap-5 mb-10">
      <DnDFileInput
        onChange={handleChange}
      />

      <div className="uploaded-files flex flex-col gap-5">
       {
        uploadedFiles && uploadedFiles.length != 0 &&
        uploadedFiles.map(file => (
          <FileCard name={file?.name as string} size={Number(file?.size)} progress={50} />
        ))
       }
      </div>
    </form>
  );
}

export default UploadDocumentForm;
