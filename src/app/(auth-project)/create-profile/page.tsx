import { CircleOne, CircleTwo } from "@/components/assets/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function CreateProfilePage() {
  return (
    <section>
      {/* header */}
      <div className="mb-14">
        <p className="text-sm text-muted-foreground mb-3">
          Create Merger Profile
        </p>
        <h1 className="text-3xl font-medium">Choose your first step</h1>
      </div>

      {/* cards */}
      <section className="flex flex-col gap-8">
        <Card className="group hover:border-secondary/50 hover:cursor-pointer">
          <CardContent className="flex gap-3 p-4 group-hover:bg-secondary/5">
            <div className="logo w-[52px]">
              <CircleOne />
            </div>
            <div>
              <h2 className="text-md font-semibold mb-0.5">
                Start from scratch
              </h2>
              <p className="text-xs text-muted-foreground">
                Plan, track, and release world-class software with the #1
                software development tool used by agile teams.
              </p>
              <Button variant={"link"} className="w-fit h-fit p-0 pt-3 text-secondary">
                Select
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:border-secondary/50 hover:cursor-pointer">
          <CardContent className="flex gap-3 p-4 group-hover:bg-secondary/5">
            <div className="logo w-[52px]">
              <CircleTwo />
            </div>
            <div>
              <h2 className="text-md font-semibold mb-0.5">
                Start with a template
              </h2>
              <p className="text-xs text-muted-foreground">
                Plan, track, and release world-class software with the #1
                software development tool used by agile teams.
              </p>
              <Button variant={"link"} className="w-fit h-fit p-0 pt-3 text-secondary">
                Select
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </section>
  );
}

export default CreateProfilePage;
