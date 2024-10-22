"use client";
import Navbar from "@/components/Navbar/navbar";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
// import Slideshow from "@/components/valuesSlideshow/slideshow";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.remove("anim");
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("anim");
          }
        });
      },
      {
        threshold: 0.4, // 40% visibility required to trigger
      }
    );

    const animElements = document.querySelectorAll(".anims");
    // observer.observe(element);
    animElements.forEach((el) => observer.observe(el));
    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="bg-[#ebebeb] treb">
      <Navbar />
      <h1 className="pt-[64px] mt-[175px] leading-[57.14px] lato text-[#ff6f20] text-center text-[40px] font-bold tracking-[1px] uppercase">
        ACCESS FULCRUM LIMITED
      </h1>
      <div className="w-[115.5px] h-[2px] bg-black my-[10px] mx-auto" />
      <h1 className="text-[#555555] text-center font-light leading-[42.86px] text-[30px]">
        An Independent inspection company with global reach!
      </h1>
      {/* <div className="w-[100%] max-w-[1170px] gap-5 px-3 md:px-0 grid grid-cols-1 md:grid-cols-2 mx-auto mt-[45.5px]">
        <div className="leading-[21.43px] text-[15px] font-thin text-[#555555]">
          <b className="font-bold">ACCESS FULCRUM LIMITED</b> is an Africa
          focused Independent Inspection Company with headquarters in Lagos with
          operations in West Africa, including Nigeria, Kenya, Djibouti, the
          Democratic Republic of Congo, Ivory Coast, Togo and Angola.Commodities
          inspected: Sampling & Testing of Metals, Mineral Concentrates & Ores –
          Agricultural – Oil – Gas – Chemicals.
        </div>
        <div className="leading-[21.43px] text-[15px] font-thin text-[#555555]">
          The company coordinates inspection and testing nominations from its
          Lagos head office or regional HQ in Lagos, Nigeria providing customers
          with a central point of contact and with a personal touch 24/7 every
          day of the year. Our aim is to provide a personal and knowledgeable
          service. Whenever you make contact with Access Fulcrum Limited, you
          will find we are happy to help you with any of your commodity
          inspection needs.
        </div>
      </div> */}
      <div className=" anims anim transition-opacity duration-200 w-[100%] max-w-[1170px] px-3 md:px-0 grid-cols-1 grid md:grid-cols-3 mx-auto mt-[45.5px] gap-[10px] auto-rows-[251.97px]">
        <div className="shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] relative">
          <Image
            src="/images/serviceImage9.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <div className="shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] relative">
          <Image
            src="/images/serviceImage19.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <div className="shadow-[0px_10px_15px_0px_rgba(0,0,0,0.3)] relative">
          <Image
            src="/images/serviceImage4.jpg"
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[100%] max-w-[1170px] gap-5 px-3 md:px-0 mx-auto leading-[21.43px] text-[15px] font-thin text-[#555555] mt-10">
        <div className="leading-[21.43px] text-[15px] font-thin  mb-[20px]">
          <h1 className="font-bold text-center my-5">Our Vision</h1> To be the
          trusted global leader in commodities inspection, collateral management
          and stock monitoring. Ensuring transparency, reliability, and
          excellence across the, metals and minerals, agricultural and allied
          commodities and oil and gas sectors.
        </div>
        <div className="leading-[21.43px] text-[15px] font-thin  mb-[20px]">
          <h1 className="font-bold text-center my-5">Our Mission</h1> At Access
          Fulcrum Limited, we strive to collaborate with the industry capacity
          building of our invaluable clients. AFL capacity building will assist
          clients to go through the crucible of organizational development.
          There is need to totally recapture the virtue of integrity in
          inspection industry. Through innovation, professionalism, and
          commitment to industry standards, we aim to foster sustainable growth
          and trust in the global commodities market.
        </div>
        <div className="leading-[21.43px] text-[15px] font-thin  mb-[20px]">
          <h1 className="font-bold text-center my-5">What We Do</h1> We offer a
          wide range of specialized services to meet the needs of our clients:
        </div>
        <ul className="mb-[10.5px] list-disc">
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px] break-words whitespace-normal">
              ⁠<span className="font-semibold">Inspection Services:</span>{" "}
              Accurate and timely inspection of commodities, ensuring quality
              and compliance at every stage of the supply chain.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px] break-words whitespace-normal">
              <span className="font-semibold">
                Collateral Management and Stock Monitoring:
              </span>
              ⁠ Secure, transparent, and reliable collateral management services
              that support financing and risk mitigation for commodities
              trading.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px]">
              <span className="font-semibold">
                Verification & Certification:
              </span>
              Independent verification and certification services, giving our
              clients confidence in the integrity of their transactions.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px]">
              <span className="font-semibold">Sector Specialization:</span>
              Expertise in metals and minerals, and agricultural and allied
              commodities and oil and gas, offering industry-specific solutions
              tailored to our client’s needs.
            </span>
          </li>
        </ul>
        <h1 className="font-bold text-center my-5">Our Core Values</h1>
        <ul className="mb-[10.5px] list-disc">
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px] break-words whitespace-normal">
              <span className="font-semibold">Integrity:</span> We uphold the
              highest standards of honesty and transparency in all our
              operations, ensuring trust in every service we provide.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px] break-words whitespace-normal">
              <span className="font-semibold">Reliability:</span> We deliver
              consistent and dependable services, meeting our client&apos;s
              needs with precision and professionalism.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px]">
              <span className="font-semibold">Innovation:</span> We embrace the
              latest technologies to enhance the efficiency, accuracy, and
              sustainability of our processes.{" "}
            </span>
          </li>
          <li className="ml-[10px] list-disc">
            <span className="mb-[10px]">
              <span className="font-semibold">Client-Centered Excellence:</span>{" "}
              We prioritize our clients, offering tailored solutions that build
              long-lasting partnerships.
            </span>
          </li>
        </ul>{" "}
        <div className="leading-[21.43px] text-[15px] font-thin  mb-[20px]">
          <h1 className="font-bold text-center my-5">Why Choose Us?</h1>
          <ul className="mb-[10.5px] list-disc">
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                <span className="font-semibold">Experienced Team:</span> Our
                professionals have extensive expertise in commodities inspection
                and management.
              </span>
            </li>
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                <span className="font-semibold">Global Reach:</span> AFL
                operates globally, providing services to clients across diverse
                markets and sectors.
              </span>
            </li>
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px]">
                <span className="font-semibold">Industry Compliance:</span> We
                adhere to international standards and best practices, ensuring
                the highest quality of service.
              </span>
            </li>
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px]">
                <span className="font-semibold">Industry Compliance:</span>
                Sector Specialization: Expertise in metals and minerals, and
                agricultural and allied commodities and oil and gas, offering
                industry-specific solutions tailored to our client&apos;s needs.
              </span>
            </li>
          </ul>{" "}
        </div>
        <div className="leading-[21.43px] text-[15px] font-thin  mb-[20px]">
          <h1 className="font-bold text-center my-5">Our Clients</h1> We proudly
          serve a diverse portfolio of clients, including major corporations,
          banks, and traders in the commodities industry. Our commitment to
          excellence has earned us long-standing partnerships based on trust and
          mutual success.
        </div>
      </div>
      {/* <h1 className="mt-[44px] text-center text-[30px] leading-[42.86px] text-[#ff6f20] font-normal">
        Our Core Values
      </h1> */}
      {/* <div className="w-[100%] max-w-[1170px] mx-auto">
        <Slideshow />
      </div> */}
      {/* <div className="w-[100%] max-w-[1170px] grid grid-cols-1 md:grid-cols-3 mx-auto mt-[45.5px] mb-[20px] gap-[10px]">
        <div className="anims anim transition-opacity duration-300 bg-[#ffcaad] bg-[linear-gradient(0deg,#ff7b33_0%,rgba(255,255,255,0)_78%)] bg-repeat bg-scroll bg-[0%_0%] p-[5em_2em]">
          <div className="">
            <Image
              src="/images/lock.png"
              alt="lock"
              width={70}
              height={70}
              className="mx-auto"
            />
            <h1 className="text-center mt-[33px] mb-[22px] uppercase leading-[42.85714287px] text-[30px] text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
              Safety
            </h1>
            <p className="leading-[21.42857143px] text-center text-[15px] text-white">
              Access Fulcrum Limited believes that good Health, Safety &
              Environmental performance enhances the financial well being of its
              business. Access Fulcrum Limited recognizes its responsibilities
              towards all personnel and the environment. The management is
              therefore determined not to spare any means or materials in the
              pursuit of the highest standards of safety at work.
            </p>
          </div>
        </div>
        <div className="anims anim transition-opacity duration-300 bg-[#bcd5f0] bg-[linear-gradient(0deg,#5895da_0%,rgba(255,255,255,0)_78%)] bg-repeat bg-scroll bg-[0%_0%] p-[5em_2em]">
          <div className="">
            <Image
              src="/images/scale.png"
              alt="lock"
              width={70}
              height={70}
              className="mx-auto"
            />
            <h1 className="text-center  mt-[33px] mb-[22px] uppercase leading-[42.85714287px] text-[30px] text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
              Integrity
            </h1>
            <p className="leading-[21.42857143px] text-center text-[15px] text-white">
              We are a fully Independent International Inspection Company
              providing impartial, unbiased results using only approved
              measurement and testing methods. Our clients put their trust in
              Access Fulcrum Limited to safeguard their interests and our
              reputation depends on this.
            </p>
          </div>
        </div>
        <div className="anims anim transition-opacity duration-300 bg-[#dcb5f7] bg-[linear-gradient(0deg,#a847eb_0%,rgba(255,255,255,0)_78%)] bg-repeat bg-scroll bg-[0%_0%] p-[5em_2em]">
          <div className="">
            <Image
              src="/images/checkmark.png"
              alt="lock"
              width={70}
              height={70}
              className="mx-auto"
            />
            <h1 className="text-center  mt-[33px] mb-[22px] uppercase leading-[42.85714287px] text-[30px] text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
              Quality
            </h1>
            <p className="leading-[21.42857143px] text-center text-[15px] text-white">
              Access Fulcrum Limited is an ISO 9001:2015 accredited company
              committed to providing our customers with efficient, cost
              effective and professional inspection, sampling and testing
              services for wet and dry commodities. We are committed to
              providing services in line with international best practices,
              applicable regulatory requirements, meets customer specifications
              and exceeds their expectations. To achieve this, we have
              implemented a Quality Management System in accordance with the
              requirements of ISO 9001:2015.
            </p>
            {/* <Image
              src="/images/quality.jpg"
              alt="lock"
              width={219.33}
              height={74.7}
              className="mx-auto"
            /> }
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
