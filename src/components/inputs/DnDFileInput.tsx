"use client";

import { Upload } from "lucide-react";
import React, { ComponentProps } from "react";

function DnDFileInput({ onChange, ...props }: ComponentProps<"input">) {
  return (
    <p className="">
      <label htmlFor="fileInput" className="border border-muted-foreground rounded-lg p-8 border-dashed flex flex-col justify-center items-center w-full gap-2 cursor-pointer">
        <Upload className="text-muted-foreground" />
        <span className="text-sm">Drag & Drop or <strong className="font-normal text-secondary">Choose file</strong> to upload</span>
        <span className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 800K</span>
      </label>
      <input id="fileInput" type="file" {...props} className="hidden" onChange={onChange} />
    </p>
  );
}

export default DnDFileInput;
