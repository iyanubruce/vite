// import Image from "next/image";
"use client";
import Navbar from "../components/Navbar/navbar";
import ImageSlideShow from "../components/imageSlideshow/ImageSlideShow";
import Slideshow from "@/components/newsSlideShow/slideshow";
import Footer from "@/components/footer/Footer";
import React, { useEffect } from "react";

export default function Home() {
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
    <div className="treb">
      <Navbar />
      <div className="h-[662px] mt-[175px] overflow-hidden flex justify-center items-center bg">
        <ImageSlideShow />
      </div>
      <div className="anims bg-[url('/images/WELCOME.jpg')] h-[500px] text-4xl text-white font-bold bg-center bg-cover anim transition-opacity duration-200 flex flex-col md:flex-row justify-center items-center pt-[62px] pb-[25px] z-10 overflow-hidden">
        Welcome
      </div>
      <div className="bg-[#ebebeb] w-full h-auto">
        <div className="mx-auto p-6 w-[89%] max-w-[1170px]">
          <h1 className="pt-[64px] leading-[57.14px] lato text-[#ff6f20] text-center text-[40px] font-bold tracking-[1px] uppercase">
            ACCESS FULCRUM LIMITED
          </h1>
          <div className="w-[115.5px] h-[2px] bg-black my-[10px] mx-auto" />
          <h1 className="text-[#555555] mb-9 text-center font-light leading-[42.86px] text-[30px]">
            ...exceeding your expectations
          </h1>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            Access Fulcrum Limited is a leading worldwide independent provider
            of comprehensive commodities inspection, collateral management and
            stock monitoring services.
            <br />
            We specialize in the inspection of Metals and Minerals,
            Agricultural, Agro Allied, and Oil and Gas products. Through our
            global network, we provide world-class inspection to high profile
            organisations We are dedicated to delivering reliable, accurate, and
            timely services that support the integrity of our global clients We
            believe in the dignity of labour. We believe that commitment is the
            greatest qualifier for excellent inspection
          </p>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            Access Fulcrum Limited is founded on the principles of integrity and
            client-centered excellence. We are committed to ensuring that
            commodities transactions are safe, transparent, and compliant with
            the highest industry standards.{" "}
          </p>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            <h1>Our Vision</h1> To be the trusted global leader in commodities
            inspection, collateral management and stock monitoring. Ensuring
            transparency, reliability, and excellence across the, metals and
            minerals, agricultural and allied commodities and oil and gas
            sectors.
          </p>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            <h1>Our Mission</h1> At Access Fulcrum Limited, we strive to
            collaborate with the industry capacity building of our invaluable
            clients. AFL capacity building will assist clients to go through the
            crucible of organizational development. There is need to totally
            recapture the virtue of integrity in inspection industry. Through
            innovation, professionalism, and commitment to industry standards,
            we aim to foster sustainable growth and trust in the global
            commodities market.
          </p>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            <h1>What We Do</h1> We offer a wide range of specialized services to
            meet the needs of our clients:
          </p>
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
                ⁠ Secure, transparent, and reliable collateral management
                services that support financing and risk mitigation for
                commodities trading.{" "}
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
                commodities and oil and gas, offering industry-specific
                solutions tailored to our client’s needs.
              </span>
            </li>
          </ul>
          Our Core Values
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
                <span className="font-semibold">Innovation:</span> We embrace
                the latest technologies to enhance the efficiency, accuracy, and
                sustainability of our processes.{" "}
              </span>
            </li>
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px]">
                <span className="font-semibold">
                  Client-Centered Excellence:
                </span>{" "}
                We prioritize our clients, offering tailored solutions that
                build long-lasting partnerships.
              </span>
            </li>
          </ul>{" "}
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            <h1>Why Choose Us?</h1>
            <ul className="mb-[10.5px] list-disc">
              <li className="ml-[10px] list-disc">
                <span className="mb-[10px] break-words whitespace-normal">
                  <span className="font-semibold">Experienced Team:</span> Our
                  professionals have extensive expertise in commodities
                  inspection and management.
                </span>
              </li>
              <li className="ml-[10px] list-disc">
                <span className="mb-[10px] break-words whitespace-normal">
                  <span className="font-semibold">Global Reach:</span> AFL
                  operates globally, providing services to clients across
                  diverse markets and sectors.
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
                  industry-specific solutions tailored to our clients’ needs.
                </span>
              </li>
            </ul>{" "}
          </p>
          <p className="leading-[21.43px] text-[15px] font-thin text-black mb-[20px]">
            <h1>Our Clients</h1> We proudly serve a diverse portfolio of
            clients, including major corporations, banks, and traders in the
            commodities industry. Our commitment to excellence has earned us
            long-standing partnerships based on trust and mutual success.
          </p>
        </div>
        {/* <div className="w-full md:w-[580px] break-words brword px-5">
          <h1 className="text-[16px] leading-[22.86px] mb-[10.5px] brword whitespace-normal text-[#555555]">
            {" "}
            We provide quality and and Quantity independent inspection services
            on:{" "}
          </h1>
          <ul className="mb-[10.5px] list-disc">
            <li className="ml-[10px] list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
⁠Inspection Services: Accurate and timely
        inspection of commodities, ensuring quality and compliance at every
        stage of the supply chain.              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
⁠ ⁠Collateral Management and Stock
        Monitoring: Secure, transparent, and reliable collateral management
        services that support financing and risk mitigation for commodities
        trading.              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">
⁠Verification & Certification: Independent verification and
        certification services, giving our clients confidence in the integrity
        of their transactions.              </span>
            </li>
            <li className="ml-[10px] font-bold list-disc">
              <span className="mb-[10px]">⁠Sector Specialization: Expertise in metals
        and minerals, and agricultural and allied commodities and oil and gas,
        offering industry-specific solutions tailored to our clients’ needs.</span>
            </li>
          </ul>
          <p className="brword whitespace-normal text-[#555555]">
            Whenever and wherever you require a first class independent
            inspection service we are just a phone call away -Tel: +00 0000
            000000
          </p>
        </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 w-[85%] max-w-[1500px] gap-[10px] mx-auto">
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage1.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage4.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage3.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage4.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative bg-[#580f8b] flex items-center anims anim transition-opacity duration-300">
            <div className="py-[0.3em] px-[2em]">
              <h1 className="text-[24px] mt-[21px] mb-[10.5px] text-center leading-[34.29px] text-[#ff6f20] font-medium">
                Our Mission statement
              </h1>
              <div className="w-[70px] h-[4px] mx-auto bg-white mt-[10px] mb-[15px]"></div>
              <p className="text-center mb-[42.5px] text-white font-normal leading-[23.8px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                Access Fulcrum Limited Global Solutions is committed to Customer
                Service Excellence Worldwide. Anticipating our Customer&apos;s
                expectations, as well as adding value at every opportunity is
                the foundation of everything we do.
              </p>
            </div>
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage8.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage5.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage6.jpg" fill alt="grid image" />
          </div>
          <div className="h-[383px] relative anims anim transition-opacity duration-300">
            <Image src="/images/gridImage7.jpg" fill alt="grid image" />
          </div>
        </div> */}
      </div>
      <div className="bg-[linear-gradient(90deg,#333333_0%,#707070_100%)]">
        <div className="pt-[21px] pb-[30px]">
          <Slideshow />
        </div>
      </div>
      {/* <div className="bg-[#2a6ebb] pt-5 pb-5 h-[200px]">
        <h1 className="text-center text-[15px] leading-[21.43px] text-white font-bold mb-[10.5px]">
          {" "}
          ©Access Global Limited- 2024
        </h1>
        <p className="text-center text-[12px] leading-[17.14px] text-[#bcd5f0] mb-[10.5px]">
          Terms and Conditions Apply
        </p>
        <div className="flex gap-5 justify-center mt-10">
          <Image
            src="/images/footer1.png"
            width={53}
            height={52}
            alt="footer1"
          />
          <Image
            src="/images/footer2.png"
            width={128}
            height={30}
            alt="footer2"
          />
          <Image
            src="/images/footer3.png"
            width={57}
            height={51}
            alt="footer3"
          />
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}
