"use server";

import { ActionType } from "@/types/action-type";
import z from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "Name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormData = z.infer<typeof schema>;

export async function contactSubmitForm(
  prevState: ActionType<ContactFormData>,
  formData: FormData
): Promise<ActionType<ContactFormData>> {
  const result = await schema.safeParseAsync(Object.fromEntries(formData));

  if (!result.success) {
    const errors = result.error.flatten();

    return {
      ...prevState,
      success: false,
      error: "Validation failed",
      validationErrors: errors.fieldErrors,
      data: Object.fromEntries(formData.entries()) as ContactFormData,
    };
  }

  const { email, firstName, lastName, message } = result.data;
  try {
    console.log("Sending email with data:", {
      email,
      firstName,
      lastName,
      message,
    });

    const response = await fetch("https://n8n.orisondigital.net/webhook/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        message,
      }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      ...prevState,
      success: false,
      error: "Failed to send message",
      validationErrors: {},
      data: Object.fromEntries(formData.entries()) as ContactFormData,
    };
  }

  return {
    success: true,
  };
}
