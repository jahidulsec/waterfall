'use client'

import React from "react";
import { Card, CardContent } from "../ui/card";
import { CircleOne, CircleTwo } from "../assets/card";
import { Button } from "../ui/button";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

function CardSection() {

    const router = useRouter()
    const pathname = usePathname()

  return (
    <section className="flex flex-col gap-8">
      <Card className="group hover:border-secondary/50 hover:cursor-pointer" onClick={() => {router.push(pathname + `/stage/deal`)}}>
        <CardContent className="flex gap-3 p-4 group-hover:bg-secondary/5">
          <div className="logo w-[52px]">
            <CircleOne />
          </div>
          <div>
            <h2 className="text-md font-semibold mb-0.5">Start from scratch</h2>
            <p className="text-xs text-muted-foreground">
              Plan, track, and release world-class software with the #1 software
              development tool used by agile teams.
            </p>
            <Button
              variant={"link"}
              className="w-fit h-fit p-0 pt-3 text-secondary"
            >
              Select
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="group hover:border-secondary/50 hover:cursor-pointer" onClick={() => {router.push(pathname + `/stage/deal`)}}>
        <CardContent className="flex gap-3 p-4 group-hover:bg-secondary/5">
          <div className="logo w-[52px]">
            <CircleTwo />
          </div>
          <div>
            <h2 className="text-md font-semibold mb-0.5">
              Start with a template
            </h2>
            <p className="text-xs text-muted-foreground">
              Plan, track, and release world-class software with the #1 software
              development tool used by agile teams.
            </p>
            <Button
              variant={"link"}
              className="w-fit h-fit p-0 pt-3 text-secondary"
            >
              Select
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CardSection;
