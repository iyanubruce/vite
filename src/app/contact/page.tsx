import React from "react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="bg-[#ebebeb] treb">
      <Navbar />
      <h1 className="pt-[64px] mt-[175px] leading-[57.14px] lato text-[#ff6f20] text-center text-[40px] font-bold tracking-[1px] uppercase">
        Contact us
      </h1>
      <div className="w-[115.5px] h-[2px] bg-black my-[10px] mx-auto" />
      <h1 className="text-[#555555] lato text-center font-[300] leading-[42.86px] text-[30px]">
        Coordination Centres
      </h1>
      <div className="mt-[60.5px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="py-4 px-12">
          <h1 className="mt-[10px] leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case">
            Access Fulcrum Limited
          </h1>
          <p className="leading-[22.85714286px] text-[16px] text-[#555555] mb-[10.5px]">
            Abuja Office Plot 242 Muhammadu Buhari Way (2nd Floor) Central
            Business District, Abuja, Nigeria. <br />
            <br />
            <i>{/*We are currently in the process of changing address.*/}</i>
            <br />
            <i>
              {/*Our new details will be published shortly.*/}
              <br />
            </i>
            <br />
            Tel : +234 803 992 6902 <br />
            Email : contact@access-fulcrum.com
            <br />{" "}
          </p>
        </div>
        <div className="h-[230px] md:h-auto">
          <div className="relative h-full w-full">
            <Image
              src="/images/contactImage1.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="my-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="order-2 md:order-1 h-[230px] md:h-auto">
          <div className="relative h-full w-full">
            <Image
              src="/images/contactImage2.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="py-4 md:px-12 px-3 order-1 md:order-2">
          <h1 className="mt-[10px] leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case">
            Access Fulcrum Limited
          </h1>
          <p className="additional-class-872327712 bd-content-element">
            Lagos Office
            <br /> We are currently in the process of changing address. Our new
            details will be published shortly.
            <br />
            <br />
            <br />
            {/* <i>Director West Africa & International Operations </i> */}
            <br />
            Tel: +234 803 992 6902
            <br />
            <br />
            Email:{" "}
            <a href="mailto:contact@access-fulcrum.com">
              contact@access-fulcrum.com{" "}
            </a>
            <br />
            <br />
            {/*<b>Mr. Ton Doe</b>*/}
            <br />
            {/*<i>Manager and WAF Ops Coordinator</i>*/}
            <br />
            {/*Tel: +234 000 000 0000*/}
            <br />
            {/*Email:{" "}*/}
            {/*<a href="mailto:france@accessfulcrumlimited-global-solutions.co">
							janedoe@access-global-limited.com
						</a>*/}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
