import { CircleOne, CircleTwo } from "@/components/assets/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function DealStagePage() {
  return (
    <>
      {/* header */}
      <div className="mb-14">
        <p className="text-sm text-muted-foreground mb-3">
          Create Merger Profile
        </p>
        <h1 className="text-3xl font-medium">Choose your first step</h1>
      </div>

      {/* cards */}
      <section className="flex gap-10 items-center">
        <Card className="w-[8rem]  group hover:border-secondary/50 hover:cursor-pointer">
          <CardContent className="flex flex-col gap-3 p-4 pb-14 group-hover:bg-secondary/5">
            <div className="logo w-[30px]">
              <CircleOne />
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-0.5">Stage 1</h3>
              <h2 className="text-sm font-semibold">PRE-LOI</h2>
            </div>
          </CardContent>
        </Card>

        <p className="font-semibold">OR</p>

        <Card className="w-[8rem]  group hover:border-secondary/50 hover:cursor-pointer">
          <CardContent className="flex flex-col gap-3 p-4 pb-14 group-hover:bg-secondary/5">
            <div className="logo w-[30px]">
              <CircleTwo />
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-0.5">Stage 2</h3>
              <h2 className="text-sm font-semibold">POST-LOI</h2>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default DealStagePage;
