import Link from "next/link";
import React from "react";
import Faq from "../Faq/Faq";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

export default function Footer() {
  return (
    <footer className="">
      {/* FAQ */}
      <div className="flex flex-col space-y-4 bg-primary-bg p-6">
        <h3 className="heading__3 text-center">FAQ</h3>
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
      <div className="flex flex-col space-y-4 bg-primary-yellow p-6">
        <h4 className="heading__4">Stay up to date</h4>
        <div className="flex">
          <input
            className="grow rounded-tl-2xl rounded-bl-2xl border-2 border-black"
            type="text"
            name="email"
            id="email"
          />
          <button className="rounded-tr-2xl rounded-br-2xl bg-black p-2 text-white">
            Apply
          </button>
        </div>
        <h4 className="heading__4">Požgaj Group</h4>
        <p>Dravska 40, 42 231 Veliki Bukovec</p>
        <p>Phone: +385 42 406 600</p>
        <p>Email: pozgaj@pozgaj.com</p>
        {/* Social links */}
        <div className="justify-left flex items-center space-x-4">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <YoutubeIcon />
        </div>
        <ul className="flex justify-between rounded-2xl bg-primary-gray p-3">
          <li>
            <Link href="/">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-4">
        <Link href={"/"}>
          <a className="text-lg text-white">PRIVACY POLICY</a>
        </Link>
        <Link href={"/"}>
          <a className="text-lg text-white">TERMS & CONDITIONS</a>
        </Link>
        <p className="text-sm text-gray-400">
          © Požgaj Grupa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
