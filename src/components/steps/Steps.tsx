"use client";

import { stage } from "@/lib/data";
import { Circle } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

function Steps() {
  const pathname = usePathname();

  const numOfStepsComplete = stage.findIndex((item) => {
    return item.tab === pathname.split("/").pop();
  });

  return (
    <div className="relative flex items-center w-full">
      {stage.map((item, index) => (
        <Fragment key={item.id}>
          <div className="relative w-full">
            <div
              className={`flex flex-col justify-between items-center gap-1 flex-1 ${
                pathname.split("/").pop() == item.tab
                  ? "text-secondary"
                  : "text-muted-foreground"
              }`}
            >
              <h4 className={`text-xs h-10 text-center line-clamp-2 ${(index + 1) <= numOfStepsComplete ? 'text-secondary': ''}`}>
                {item.name}
              </h4>
              <div className="icon">
                <Circle className={`size-4 ${(index + 1) <= numOfStepsComplete ? 'text-secondary fill-secondary': 'fill-background'}`} />
              </div>
            </div>
            {index + 1 != stage.length && (
              <div className={`absolute left-[50%] bottom-[6px] w-[100%] h-[2px] -z-10 bg-muted  ${(index + 1) <= numOfStepsComplete ? 'bg-secondary': 'bg-muted'}`}></div>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Steps;
