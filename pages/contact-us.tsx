import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import FormField from "../components/FormField/FormField";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";

export default function ContactUs() {
  return (
    <Skeleton>
      <ErrorBoundary>
        <SectionHeader title="Contact us" image="contact-us.jpg" />
      </ErrorBoundary>

      <form className="flex flex-col bg-primary-yellow p-4">
        <FormField label="Name" type="text" name="name" id="name" />
        <FormField label="E-mail address" type="text" name="email" id="email" />
        <FormField
          label="Message"
          type="textarea"
          name="message"
          id="message"
        />
        <ButtonDefault text="Send" ariaLabel="Send message" style="mt-10" />
      </form>
    </Skeleton>
  );
}
