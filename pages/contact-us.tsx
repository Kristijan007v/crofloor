import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import FormField from "../components/FormField/FormField";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import toast from "react-hot-toast";
import toastStyle from "../lib/styles/toastStyle";

export default function ContactUs() {
  const toastStyle = {
    position: "bottom-center",
    style: {
      borderRadius: "10px",
      background: "rgb(21, 28, 38, 60%)",
      backdropFilter: "blur(10px)",
      color: "#fff",
      border: "1px solid rgb(29, 78, 216)",
    },
  };

  return (
    <Skeleton>
      <ErrorBoundary>
        <SectionHeader title="Contact us" image="contact-us.jpg" />
      </ErrorBoundary>

      <div className="flex flex-col space-y-8">
        <form className="flex flex-col bg-primary-yellow p-4">
          <FormField label="Name" type="text" name="name" id="name" />
          <FormField
            label="E-mail address"
            type="text"
            name="email"
            id="email"
          />
          <FormField
            label="Message"
            type="textarea"
            name="message"
            id="message"
          />
          <span className="flex items-center space-x-4 p-4">
            <input type={"checkbox"} name={"terms"} id={"terms"} />
            <label className="font-medium">I agree to the terms</label>
          </span>
          <ButtonDefault
            text="Send"
            ariaLabel="Send message"
            style="mt-10"
            onclick={() => {
              toast("Message sent sucessfully!");
            }}
          />
        </form>
        <div className="m-4 rounded-2xl border border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
            className="rounded-2xl"
            width={"100%"}
            height={"300"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact and address info */}
        <div className="items-left m-6 flex flex-col justify-center space-y-2 pb-8">
          <p>Dravska 40, 42 231 Veliki Bukovec</p>
          <p>
            Phone: <a href="tel:+385 42 406 600">+385 42 406 600</a>
          </p>
          <p>
            Email: <a href="mailto:pozgaj@pozgaj.com">pozgaj@pozgaj.com</a>
          </p>
        </div>
      </div>
    </Skeleton>
  );
}
