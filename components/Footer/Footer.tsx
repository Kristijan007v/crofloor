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
    <footer className="relative flex flex-col">
      <div className="grid auto-cols-max grid-cols-1 gap-6 bg-primary-yellow p-6 md:grid-cols-2 md:p-8 lg:pt-12 lg:pb-12 lg:pr-8 lg:pl-8 2xl:grid-cols-3">
        {/* FAQs MOBILE */}
        <div className="flex flex-col space-y-4 md:col-span-2 md:hidden 2xl:col-span-1">
          <div className="flex flex-grow flex-col space-y-3">
            <p className="heading__3 h3__responsive text-center">FAQ</p>
            <Faq
              question="Kako proizvodite parkete?"
              answer="We offer wide choice and alternatives when it comes to wood specie, parquet size, lacquered or oiled surfaces and natural appearance of the wood (so called grading). Since for many years oak represents the most popular wood specie when it comes to parquet flooring, we are especially proud of our engineered parquet made of SLAVONIA OAK, worldwide famous for its exceptional quality and beauty.

              As a producer, we are dedicated to high quality and continuous improvements of our products, as well as following world trends. All parquets in our assortment are carefully developed and produced from high quality materials in order to satisfy demands regarding durability, resistance and harmlessness. Therefore, they represent perfect choice for everyone who wants to incorporate permanent quality to their premises. 2-layer and 3-layer parquet is convenient for installation on floor heating, which will additionally contribute to the comfortable living in your house or apartment."
            />
            <Faq
              question="Kako provjeravate kvalitetu?"
              answer="A blockchain is a distributed ledger of information."
            />
            <Faq
              question="Tko su vam glavni dobavlja??i?"
              answer="A blockchain is a distributed ledger of information."
            />
            <Faq
              question="??to je s garancijom za parket?"
              answer="A blockchain is a distributed ledger of information."
            />
          </div>
          <div className="flex justify-center 2xl:justify-start">
            <ButtonLink
              href="/documents/catalogue.pdf"
              newTab={true}
              text={t("button-catalogue")}
              type="button"
              color="special"
            />
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-grow flex-col space-y-4">
          <p className="heading__4 h4__responsive">{t("newsletter.title")}</p>
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
                className="w-full rounded-tl-2xl rounded-bl-2xl border-2 border-black pl-2 text-sm focus:bg-primary-gray focus:outline-none focus:placeholder:text-black sm:w-3/6 md:w-5/6 lg:w-4/6 xl:w-3/6"
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
                className="whitespace-nowrap rounded-tr-2xl rounded-br-2xl bg-black p-2 text-white"
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
          <p className="heading__4 h4__responsive">{t("info.title")}</p>
          <Link
            href={
              "https://www.google.com/maps/place/Dravska+ul.+40,+42231,+Veliki+Bukovec/@46.2869072,16.7099287,17z/data=!4m2!3m1!1s0x4768a18575c182bf:0xfbb76f3cb4d6b219"
            }
          >
            <a className="p__responsive">Dravska 40, 42 231 Veliki Bukovec</a>
          </Link>
          <p className="p__responsive">
            {t("info.phone")} <a href="tel:+385 42 406 600">+385 42 406 600</a>
          </p>
          <p className="p__responsive">
            {t("info.email")}{" "}
            <a href="mailto:pozgaj@pozgaj.com">pozgaj@pozgaj.com</a>
          </p>
        </div>

        {/* COMPANY INFO AND SECOND NAV */}
        <div className="flex flex-col space-y-4">
          {/* Work hours INFO */}
          <p className="heading__4 h4__responsive">{t("work-hours.title")}</p>
          <p className="p__responsive">
            {t("work-hours.monday-friday")}: 08h-17h
          </p>
          <p className="p__responsive">{t("work-hours.saturday")}: 08h-17h</p>
          {/* Social links */}
          <div className="justify-left flex flex-wrap items-center space-x-4">
            <ButtonLink
              href="https://facebook.com"
              newTab={true}
              ariaLabel="Link to Facebook profile"
            >
              <FacebookIcon />
            </ButtonLink>
            <ButtonLink
              href="https://instagram.com"
              newTab={true}
              ariaLabel="Link to Instagram profile"
            >
              <InstagramIcon />
            </ButtonLink>
            <ButtonLink
              href="https://linkedin.com"
              newTab={true}
              ariaLabel="Link to Linkedin profile"
            >
              <LinkedinIcon />
            </ButtonLink>
            <ButtonLink
              href="https://youtube.com"
              newTab={true}
              ariaLabel="Link to Youtube profile"
            >
              <YoutubeIcon />
            </ButtonLink>
          </div>
          <div className="xl:3/6 w-full sm:w-4/6 md:w-5/6 lg:w-4/6">
            <ul className="hide-scrollbar faq__responsive flex justify-between space-x-4 overflow-x-auto whitespace-nowrap rounded-2xl bg-primary-gray p-3">
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

        {/* FAQs */}
        <div className="hidden flex-col space-y-4 md:col-span-2 md:flex 2xl:col-span-1">
          <div className="flex flex-grow flex-col space-y-3">
            <p className="heading__3 h3__responsive text-center">FAQ</p>
            <Faq
              question="Kako proizvodite parkete?"
              answer="We offer wide choice and alternatives when it comes to wood specie, parquet size, lacquered or oiled surfaces and natural appearance of the wood (so called grading). Since for many years oak represents the most popular wood specie when it comes to parquet flooring, we are especially proud of our engineered parquet made of SLAVONIA OAK, worldwide famous for its exceptional quality and beauty.

              As a producer, we are dedicated to high quality and continuous improvements of our products, as well as following world trends. All parquets in our assortment are carefully developed and produced from high quality materials in order to satisfy demands regarding durability, resistance and harmlessness. Therefore, they represent perfect choice for everyone who wants to incorporate permanent quality to their premises. 2-layer and 3-layer parquet is convenient for installation on floor heating, which will additionally contribute to the comfortable living in your house or apartment."
            />
            <Faq
              question="Kako provjeravate kvalitetu?"
              answer="A blockchain is a distributed ledger of information."
            />
            <Faq
              question="Tko su vam glavni dobavlja??i?"
              answer="A blockchain is a distributed ledger of information."
            />
            <Faq
              question="??to je s garancijom za parket?"
              answer="A blockchain is a distributed ledger of information."
            />
          </div>
          <div className="flex justify-center 2xl:justify-start">
            <ButtonLink
              href="/documents/catalogue.pdf"
              newTab={true}
              text={t("button-catalogue")}
              type="button"
              color="special"
            />
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
          ?? 2022 {t("info.title")}. {t("footer.copyright")}
        </p>
      </div>
      <GoUp />
    </footer>
  );
}
