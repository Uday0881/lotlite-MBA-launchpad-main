import * as React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { LeadForm } from "@/components/site/LeadForm";

export function ApplyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-lg">
        <DialogTitle className="sr-only">Apply Now</DialogTitle>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
}
