import CardSection from "@/components/create-waterfall/CardSection";
import React from "react";

function CreateProfilePage() {
  return (
    <section>
      {/* header */}
      <div className="mb-14">
        <p className="text-sm text-muted-foreground mb-3">
          Create new waterfall
        </p>
        <h1 className="text-3xl font-medium">Choose your first step</h1>
      </div>

      {/* cards */}
      <CardSection />
    </section>
  );
}

export default CreateProfilePage;
