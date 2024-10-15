"use client";

import React, { useState } from "react";
import DnDFileInput from "../inputs/DnDFileInput";
import FileCard from "./FileCard";
import { Button } from "../ui/button";
import Link from "next/link";

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

      <div className="buttons flex justify-end gap-5 mt-10">
        <Button asChild variant={"outline"} type="button">
          <Link href={"/create-profile/stage/project-info"}>Previous</Link>
        </Button>
        <Button asChild type="button">
          <Link href={"/"}>Continue</Link>
        </Button>
      </div>
    </form>
  );
}

export default UploadDocumentForm;
