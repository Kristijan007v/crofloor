import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";

export default function ContactUs() {
  return (
    <Skeleton>
      <ErrorBoundary>
        <SectionHeader title="Contact us" image="contact-us.jpg" />
      </ErrorBoundary>
    </Skeleton>
  );
}
