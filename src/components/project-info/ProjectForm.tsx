import React from "react";
import Input from "../inputs/Input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

function ProjectForm() {
  return (
    <form className="flex flex-col gap-5 mb-10">
      <Input label="Project Code Name" placeholder="Example" />
      <Input label="Target Company Name" placeholder="One Bank" />

      <div>
        <p className="text-sm font-medium mb-5">
          Please specify the Buyer to use for creating the model
        </p>
        <div className="border rounded-lg text-sm text-muted-foreground">
          <h3 className=" border-b py-2 px-4">Candidate Buyer</h3>
          <div className="p-4">
            <h4 className="py-2 px-4 border rounded-lg">RoBenDevs</h4>
          </div>
          <Button type="button" variant={"link"} className="mx-4 mb-4">
            <Plus className="size-4 mr-2" />
            <span>Add another buyer</span>
          </Button>
        </div>
      </div>

      <div className="buttons flex justify-end gap-5 mt-10">
        <Button asChild variant={"outline"} type="button">
          <Link href={"/create-profile/stage/deal"}>Previous</Link>
        </Button>
        <Button type="button">
          <Link href={"/create-profile/stage/cap-table"}>Continue</Link>
        </Button>
      </div>
    </form>
  );
}

export default ProjectForm;
