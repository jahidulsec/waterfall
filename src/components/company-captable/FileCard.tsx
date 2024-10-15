import React from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Dot, File, X } from "lucide-react";

type FileCardProps = {
  name: string;
  size: number;
  progress: number;
  onClose: () => void;
  index: number;
};

function FileCard({ index, name, size, progress, onClose }: FileCardProps) {
  const fileSize =
    size < 1024 ? `${size} KB` : `${(size / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <div className="top flex justify-between items-center gap-5">
        <div className="left flex gap-3 items-center">
          <div className="icon">
            <File />
          </div>
          <div className="info flex flex-col gap-1 text-sm">
            <h3 className="line-clamp-1 max-w-[10rem] md:max-w-full">{name}</h3>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{fileSize}</span>
              {/* <Dot />
              <span>7 Seconds left</span> */}
            </p>
          </div>
        </div>

        <div className="right flex flex-col items-end gap-1">
          <Button
            type="button"
            className="h-6 w-6"
            variant={"ghost"}
            size={"icon"}
            onClick={onClose}
          >
            <X className="size-4" />
          </Button>
          <p className="text-xs">{progress}%</p>
        </div>
      </div>
      <div className="bottom">
        <Progress className="h-1" value={progress} />
      </div>
    </div>
  );
}

export default FileCard;
