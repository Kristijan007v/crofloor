import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ButtonLink from "../ButtonLink/ButtonLink";
import GoUp from "../Buttons/GoUp";
import Faq from "../Faq/Faq";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

export default function Footer() {
  const { t } = useTranslation("footer");

  const { register, getValues, handleSubmit, reset, formState } = useForm();

  const { isSubmitting } = formState;
  const { errors } = formState;

  const router = useRouter();

  const subscribe = async () => {
    const email = getValues("email");
    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      toast(`${t("newsletter.error-message")}`);

      return;
    }

    // 5. Clear the input value and show a success message.
    toast(`${t("newsletter.success-message")}`);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);

  return (
    <>
      <footer className="relative flex flex-col">
        {/* FAQ */}
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex flex-grow flex-col space-y-4 bg-primary-bg p-6 lg:flex-col-reverse">
            <ButtonLink
              href="/documents/catalogue.pdf"
              newTab={true}
              text={t("button-catalogue")}
              type="button"
              color="special"
            />
            <div className="flex flex-grow flex-col space-y-4">
              <p className="heading__3 text-center">FAQ</p>
              <Faq
                question="Kako proizvodite parkete?"
                answer="A blockchain is a distributed ledger of information."
              />
              <Faq
                question="Kako provjeravate kvalitetu?"
                answer="A blockchain is a distributed ledger of information."
              />
              <Faq
                question="Tko su vam glavni dobavljači?"
                answer="A blockchain is a distributed ledger of information."
              />
              <Faq
                question="Što je s garancijom za parket?"
                answer="A blockchain is a distributed ledger of information."
              />
            </div>
          </div>

          <div className="flex flex-grow flex-col space-y-2 bg-primary-yellow p-6 lg:bg-primary-bg">
            <p className="heading__4">{t("newsletter.title")}</p>
            {errors?.name && errors.name.message}

            <form
              onSubmit={handleSubmit(subscribe)}
              className="flex flex-col space-y-2"
            >
              {/* <p>
                Apply for our newsletter and get the latest news and updates on
                our products, services and new donations.
              </p> */}
              <div className="flex overflow-x-auto">
                <input
                  className="grow rounded-tl-2xl rounded-bl-2xl border-2 border-black pl-2 text-sm focus:bg-primary-gray focus:outline-none focus:placeholder:text-black md:grow-0"
                  type="email"
                  id="email"
                  disabled={isSubmitting ? true : false}
                  placeholder={t("newsletter.placeholder")}
                  {...register("email", {
                    required: "Name is required",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <button
                  type="submit"
                  className="rounded-tr-2xl rounded-br-2xl bg-black p-2 text-white"
                  disabled={isSubmitting ? true : false}
                >
                  {isSubmitting ? (
                    <>{t("newsletter.button-message")}</>
                  ) : (
                    <>{t("newsletter.button")}</>
                  )}
                </button>
              </div>
            </form>

            {/* Compay INFO */}
            <p className="heading__4">{t("info.title")}</p>
            <Link
              href={
                "https://www.google.com/maps/place/Dravska+ul.+40,+42231,+Veliki+Bukovec/@46.2869072,16.7099287,17z/data=!4m2!3m1!1s0x4768a18575c182bf:0xfbb76f3cb4d6b219"
              }
            >
              <a>Dravska 40, 42 231 Veliki Bukovec</a>
            </Link>
            <p>
              {t("info.phone")}{" "}
              <a href="tel:+385 42 406 600">+385 42 406 600</a>
            </p>
            <p>
              {t("info.email")}{" "}
              <a href="mailto:pozgaj@pozgaj.com">pozgaj@pozgaj.com</a>
            </p>

            {/* Work hours INFO */}
            <p className="heading__4">{t("work-hours.title")}</p>
            <p>{t("work-hours.monday-friday")}: 08h-17h</p>
            <p>{t("work-hours.saturday")}: 08h-17h</p>
            {/* Social links */}
            <div className="justify-left flex flex-wrap items-center space-x-4">
              <ButtonLink href="https://facebook.com" newTab={true}>
                <FacebookIcon />
              </ButtonLink>
              <ButtonLink href="https://instagram.com" newTab={true}>
                <InstagramIcon />
              </ButtonLink>
              <ButtonLink href="https://linkedin.com" newTab={true}>
                <LinkedinIcon />
              </ButtonLink>
              <ButtonLink href="https://youtube.com" newTab={true}>
                <YoutubeIcon />
              </ButtonLink>
            </div>
            <div className="w-full md:w-3/6">
              <ul className="hide-scrollbar flex justify-between space-x-4 overflow-x-auto whitespace-nowrap rounded-2xl bg-primary-gray p-3">
                <li>
                  <Link href="/">
                    <a>{t("navigation.homepage")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>{t("navigation.products")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>{t("navigation.contact")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>{t("navigation.blog")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>{t("navigation.about")}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className=" flex flex-col items-center justify-between bg-black p-5 md:flex-row">
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4">
            <Link href={"/legal/privacy-policy"} locale={router.locale}>
              <a className="text-lg uppercase text-white underline-offset-4 hover:underline">
                {t("footer.privacy-policy")}
              </a>
            </Link>
            <Link href={"/legal/terms"} locale={router.locale}>
              <a className="text-lg uppercase text-white underline-offset-4 hover:underline">
                {t("footer.terms")}
              </a>
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2022 {t("info.title")}. {t("footer.copyright")}
          </p>
        </div>
        <GoUp />
      </footer>
    </>
  );
}
