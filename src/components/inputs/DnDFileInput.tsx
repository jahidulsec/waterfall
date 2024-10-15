"use client";

import { Upload } from "lucide-react";
import React, { ComponentProps } from "react";
import { toast } from "sonner";


type DnDFileInputProps = ComponentProps<"input"> & {
  fileState: (File | undefined)[],
  onFileChange: React.Dispatch<React.SetStateAction<(File | undefined)[]>>
};

function DnDFileInput({ fileState, onFileChange, accept, ...props }: DnDFileInputProps) {
  const [dragActive, setDragActive] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null && e.target.files[0] != undefined) {
      onFileChange(() => {
        if (fileState.length == 0) {
          return [e.target.files?.[0]];
        } 
        return [
          ...fileState,
          e.target.files?.[0]
        ]
      });
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    console.log("drag over");
    setDragActive(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLParagraphElement>) => {
    console.log("drag leave");
    setDragActive(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    console.log("dropped");

    const file = e.dataTransfer.files[0];
    const fileType = file.type;

    const validExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validExtensions.includes(fileType)) {
      console.log("this is an image");
      if (file) {
        onFileChange(() => {
          if (fileState.length == 0) {
            return [file];
          } 
          return [
            ...fileState,
            file
          ]
        });
      }
    } else {
      toast.warning(`This ${fileType.split('/').pop()} is not acceptable`)
      console.log('not acceptable')
    }

    setDragActive(false);
  };

  return (
    <p
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label
        htmlFor="fileInput"
        className={`border rounded-lg p-8  flex flex-col justify-center items-center w-full gap-2 cursor-pointer ${
          dragActive
            ? "border-primary"
            : "border-muted-foreground border-dashed"
        }`}
      >
        <Upload className="text-muted-foreground" />
        <span className="text-sm">
          Drag & Drop or{" "}
          <strong className="font-normal text-secondary">Choose file</strong> to
          upload
        </span>
        <span className="text-xs text-muted-foreground">
          JPG, GIF or PNG. Max size of 800K
        </span>
      </label>
      <input
        id="fileInput"
        type="file"
        {...props}
        className="hidden"
        onChange={handleChange}
        accept={accept}
      />
    </p>
  );
}

export default DnDFileInput;
