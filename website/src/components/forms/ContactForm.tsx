import React from "react";
import { Button, Input } from "@/components/ui";

export function ContactForm() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input type="text" placeholder="First name" name="firstName" required />
          </div>
          <div>
            <Input type="text" placeholder="Last name" name="lastName" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input type="email" placeholder="E-mail" name="email" required />
          </div>
          <div>
            <Input type="text" placeholder="Company name" name="company" />
          </div>
        </div>

        <div className="pt-4">
          <Button>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
