import { CircleOne, CircleTwo } from "@/components/assets/card";
import CardSection from "@/components/deal-stage/CardSection";
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
     <CardSection />
    </>
  );
}

export default DealStagePage;
