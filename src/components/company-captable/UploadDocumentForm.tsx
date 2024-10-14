import React from "react";
import DnDFileInput from "../inputs/DnDFileInput";
import { Dot, File, X } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

function UploadDocumentForm() {
  return (
    <form className="flex flex-col gap-5">
      <DnDFileInput />

      <div className="uploaded-files flex flex-col gap-5">
        <div className="border rounded-lg px-2 py-4 flex flex-col gap-2">
            <div className="top flex justify-between items-center gap-5">
                <div className="left flex gap-3 items-center">
                    <div className="icon">
                        <File />
                    </div>
                    <div className="info flex flex-col gap-1 text-sm">
                        <h3>IRS Notice</h3>
                        <p className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>1.2MB</span>
                            <Dot />
                            <span>7 Seconds left</span>
                        </p>
                    </div>
                </div>

                <div className="right flex flex-col items-end gap-1">
                    <Button className="h-6 w-6" variant={'ghost'} size={'icon'}><X className="size-4" /></Button>
                    <p className="text-xs">44%</p>
                </div>
            </div>
            <div className="bottom">
                <Progress className="h-2" value={50}  />
            </div>
        </div>
      </div>
    </form>
  );
}

export default UploadDocumentForm;
