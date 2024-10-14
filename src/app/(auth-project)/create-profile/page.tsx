import { CircleOne, CircleTwo } from "@/components/assets/card";
import CardSection from "@/components/create-project/CardSection";
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
      <CardSection />
    </section>
  );
}

export default CreateProfilePage;
