import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-[#082032] text-white flex">
      <div className="max-w-[1240px] my-[20px] w-full h-[40vh] text-left mx-auto flex justify-between xrm:flex-col xrm:h-[110vh]">
        {/* Our Services */}
        <div className="px-10">
          <h1 className="text-2xl font-bold">
            Our Services
          </h1>
          <div className="pb-5">
            <ul className="">
              <li className="py-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/freightAudit"}>Freight Auditing Service</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/technology"}>Value Added Service</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Quick Links */}
        <div className="px-10">
          <h1 className="text-2xl font-bold">
            Quick Links
          </h1>
          <div className="pb-5">
            <ul className="">
              <li className="py-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/freightAudit"}>FreightAudit</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/technology"}>Technology</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/career"}>Career</Link>
              </li>
              <li className="pb-2 text-left font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Our Location */}
        <div className="px-10">
          <h1 className="text-2xl font-bold">
            Our Location
          </h1>
          <div className="pb-5 flex">
            <Image
              src="/images/location-icon-image.png"
              width={30}
              height={50}
              priority
              className="my-2 pr-2 w-[30px] h-[30px]"
            />
            <p className="mt-2">
              S-5 2nd Floor, 24 Carat Tower, Station Rd,
              <br /> Chickoo Wadi, Ankleshwar, Gujarat 393001
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.9104841465514!2d72.99414497434033!3d21.628411566914824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023f196b44299%3A0x52bd854dbb48ed02!2sIGNITE%20DATA%20LABS!5e0!3m2!1sen!2sin!4v1690354965396!5m2!1sen!2sin"
            width="400"
            height="150"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg xrm:w-[81vw]"
          ></iframe>
        </div>
        {/* Our Contact */}
        <div className="pl-[20px] pr-[20px] xrm:px-10 xrm:py-10">
          <h1 className="text-2xl font-bold">
            Contact Info
          </h1>
          <div className="flex">
            <Image
              src="/images/linkedin-icon-image.png"
              width={40}
              height={100}
              priority
              className="my-2"
            />
            <h1 className="pt-4 pl-3 font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
              Linkedin
            </h1>
          </div>
          <div className="flex">
            <Image
              src="/images/Whatsapp-icon-image.png"
              width={40}
              height={100}
              priority
              className="my-2"
            />
            <h1 className="pt-4 pl-3 font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
              Whatsapp
            </h1>
          </div>
          <div className="flex">
            <Image
              src="/images/telegram-icon-image.png"
              width={40}
              height={100}
              priority
              className="my-2"
            />
            <h1 className="pt-4 pl-3 font-semibold hover:text-black hover:scale-110 duration-300 cursor-pointer">
              Business Inquirie
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
