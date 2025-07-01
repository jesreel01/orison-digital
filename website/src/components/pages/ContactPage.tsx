"use client";

import React, { useActionState } from "react";
import { Button, Input, Textarea } from "@/components/ui";


const ContactPage = () => {


  return (
    <div className="my-18">
      
      <section>
        <div className="max-w-5xl mx-auto p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  required
                  id="firstName"
                />
              </div>
              <div>
                <Input id="lastName" name="lastName" type="text" placeholder="Last name" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
              <div>
                <Input id="email" type="email" placeholder="Email" name="email" required />
              </div>
            </div>

            <Textarea id="message" placeholder="Description" name="message" required rows={5} />

            <p>
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </p>

            <div className="pt-4">
              <Button type="submit">Submit</Button>
            </div>
          </form>
          
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
