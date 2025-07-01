"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Textarea } from "@/components/ui";
import Script from "next/script";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security
      if (event.origin !== "https://api.leadconnectorhq.com") return;

      if (event.data.type === "form_submitted") {
        setSubmitMessage("Form submitted successfully!");
        setIsSubmitting(false);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else if (event.data.type === "form_error") {
        setSubmitMessage("There was an error submitting the form. Please try again.");
        setIsSubmitting(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          {
            type: "populate_and_submit",
            data: formData,
          },
          "https://api.leadconnectorhq.com"
        );
      }
    } catch (error) {
      console.error("Error sending data to iframe:", error);
      setSubmitMessage("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-18">
      {/* Hidden iframe form */}

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

      <section>
        <div className="max-w-5xl mx-auto p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  id="firstName"
                />
              </div>
              <div>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <Textarea
              id="message"
              placeholder="Description"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
            />

            {submitMessage && (
              <div
                className={`p-4 rounded-md ${
                  submitMessage.includes("success")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <p>
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </p>

            <div className="pt-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <iframe
          ref={iframeRef}
          src="https://api.leadconnectorhq.com/widget/form/H4xFmWsVrM4jqApeI5T2"
          style={{
            width: "100%",
            height: "740px",
            border: "none",
            borderRadius: "3px",
          }}
          id="inline-H4xFmWsVrM4jqApeI5T2"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 0"
          data-height="740"
          data-layout-iframe-id="inline-H4xFmWsVrM4jqApeI5T2"
          data-form-id="H4xFmWsVrM4jqApeI5T2"
          title="Form 0"
        />
      </div>
    </div>
  );
};

export default ContactPage;
