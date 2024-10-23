"use client";
import React from "react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
export default function Services() {
  // useEffect(() => {
  // 	const observer = new IntersectionObserver(
  // 		(entries) => {
  // 			entries.forEach((entry) => {
  // 				console.log(entry);
  // 				if (entry.isIntersecting) {
  // 					entry.target.classList.replace("slide", "slid");
  // 				} else {
  // 					if (entry.target.classList.contains("slid")) {
  // 						entry.target.classList.replace("slid", "slide");
  // 					}else{
  // 						entry.target.classList.remove("slid")
  // 					}
  // 				}
  // 			});
  // 		},
  // 		{
  // 			threshold: 1, // 40% visibility required to trigger
  // 		},
  // 	);

  // 	const animElements = document.querySelectorAll(".slides");
  // 	// observer.observe(element);
  // 	animElements.forEach((el) => observer.observe(el));
  // 	return () => {
  // 		animElements.forEach((el) => observer.unobserve(el));
  // 	};
  // }, []);
  return (
    <div className="bg-[#ebebeb] treb">
      <Navbar />
      <h1 className="pt-[64px] mt-[175px] leading-[57.14px] lato text-[#ff6f20] text-center text-[40px] font-bold tracking-[1px] uppercase">
        Our services
      </h1>
      <div className="w-[115.5px] h-[2px] bg-black my-[10px] mx-auto" />
      <h1 className="text-[#000000] lato text-center font-[300] leading-[42.86px] text-[30px]">
        Access Fulcrum Limited provides Independent Quantity & Quality
        verification on a wide
        <br /> range of commodities wherever custody transfer takes place.
      </h1>
      <div className="mt-[80.5px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1  md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="md:px-12 px-3">
          <h1 className="leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal capitalize mt-2.5 mb-[10.5px]">
            Metal & Minerals Inspection Services
          </h1>
          <p className="leading-[22.85714286px] text-[#555555] text-[16px] font-normal break-words mb-[10.5px]">
            Access Fulcrum Limited provides Inspection and Sampling of Minerals,
            Mineral-concentrates and Ores in Nigeria. Our Inspectors are located
            at key points in the supply chain from Mining Sites, Intermediary
            Storage, Warehouses and Ports. We inspect and sample ferrous &
            non-ferrous metals including rare-earth materials. Our services
            include
          </p>
          <ul className="list-none ml-[10px] -indent-[10px] leading-[22.85714286px] text-[16px]">
            <li className="pl-3 list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                WSMD - Weighing, Sampling &amp; Moisture Determination
              </span>
            </li>
            <li className=" pl-3 list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                Loading supervision of bulk, bagged and containerised cargo
              </span>
            </li>
            <li className="pl-3 list-disc">
              <span className="mb-[10px] break-words whitespace-normal">
                Warehousing &amp; Stock Management
              </span>
            </li>
            <li className="pl-3 list-disc">
              Scrap &amp; Recycled Metals inspection
            </li>
            <li className="pl-3 list-disc">Stockpile Sampling</li>
            <li className="pl-3 list-disc">Sample Preparation</li>
            <li className="pl-3 list-disc">Assaying Services</li>
          </ul>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className=" border-0 p-0 mt-[36px] hover:bg-[#4b4fca] focus:bg-[#4b4fca] text-white align-middle inline-block text-center text-[14px] font-semibold bg-[#2c3093] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
        <div className="grid auto-rows-[80vw] md:auto-rows-auto grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]">
          <div className="relative">
            <Image
              src="/images/serviceImage4.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage5.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage6.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage7.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1  md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="md:px-12 px-3 order-1 md:order-2">
          <h1 className="mt-[10px] leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case">
            Oil and Gas Cargo Inspection & Testing Services
          </h1>
          <p className="leading-[22.85714286px] mt-[46.5px] mb-[10.5px] text-[#555555] text-[16px]">
            Access Fulcrum Limited provides a wide range of inspection services
            on Crude Oil and Petroleum Products, Oil and Gas Cargoes including:
          </p>
          <ul className="leading-[22.85714286px] text-[16px] pl-[5px]">
            <li className="pl-3 list-disc">
              Ship &amp; Shore based Quality &amp; Quantity Verification
            </li>
            <li className="pl-3 list-disc">Bunker Surveys</li>
            <li className="pl-3 list-disc">Ship to Ship Operations</li>
            <li className="pl-3 list-disc">Oil and Gas Terminal Audits</li>
            <li className="pl-3 list-disc">
              Cargo Superintendence and laboratory Analysis.
            </li>
          </ul>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className="border-0 p-0 mt-[36px]  mb-[10px] md:mb-0 text-white align-middle inline-block text-center text-[14px] font-semibold bg-[#2c3093] hover:bg-[#4b4fca] focus:bg-[#4b4fca] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
        <div className=" order-2 md:order-1 grid auto-rows-[80vw] md:auto-rows-auto grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]">
          <div className="relative">
            <Image
              src="/images/serviceImage1.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/about2.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage2.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage3.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/*Collateral Management and Warehousing*/}

      <div className="mt-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="grid auto-rows-[230px] md:auto-rows-auto  md:grid-cols-2 mt-[10px] md:grid-rows-2 gap-[10px] md:order-2 order-2">
          <div className="relative ">
            <Image
              src="/images/serviceImage8.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage9.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage10.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage15.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className=" md:px-[54px] px-3 md:order-1 order-1">
          <h1 className="mt-[10px] leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case">
            Collateral Management and Warehousing
          </h1>
          <p className="leading-[22.85714286px] mt-[46.5px] mb-[10.5px] text-[#555555] text-[16px]">
            Access Fulcrum Limited provides Collateral Management and Stock
            Control Services to Banks and Commodity Traders at key points in the
            supply chain. We take great care in selecting our staff to maintain
            the highest level of integrity which is backed up by commodity
            release controls, strict monitoring and proactive reporting at all
            stages in the movement of the commodity. We handle Petroleum and
            Agricultural Products.
          </p>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className="border-0 p-0 mt-[36px] hover:bg-[#4b4fca] focus:bg-[#4b4fca] text-white align-middle inline-block text-center text-[14px] font-semibold bg-[#2c3093] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/*AGRI Commodities*/}

      <div className="my-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="bg-white h-auto py-4 px-3 md:px-12 order-1 md:order-2">
          <h1 className="leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case mt-[10px] mb-[10.5px]">
            AGRI Commodities
          </h1>
          <p className="leading-[22.85714286px] text-[#555555] text-[16px] font-normal mb-[10.5px] break-words">
            Access Fulcrum Limited provides Inspection, Supervision,
            Warehousing, Container Stuffing and Collateral Management Services
            on a wide range of Agricultural Commodities at Ports and Warehouses.
            Commodities handles include:
          </p>
          <ul>
            <li className="pl-3 list-disc">Cocoa</li>
            <li className="pl-3 list-disc">Ethanol</li>
            <li className="pl-3 list-disc">Fish</li>
            <li className="pl-3 list-disc">Nuts and Grains</li>
            <li className="pl-3 list-disc">Palm Oils</li>
            <li className="pl-3 list-disc">Rice</li>
            <li className="pl-3 list-disc">Sugar</li>
            <li className="pl-3 list-disc">Timber</li>
          </ul>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className="border-0 p-0 hover:bg-[#4b4fca] focus:bg-[#4b4fca] mt-[36px] text-white align-middle inline-block text-center text-[14px] font-semibold bg-[#2c3093] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
        <div className="order-2 md:order-1 grid auto-rows-[230px] md:auto-cols-auto md:grid-cols-2 md:grid-rows-2 gap-[10px]">
          <div className="col-span-1 row-span-2 relative">
            <Image
              src="/images/serviceImage12.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className=" relative">
            <Image
              src="/images/serviceImage13.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className=" relative">
            <Image
              src="/images/serviceImage16.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* <div className="mt-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="grid auto-rows-[230px] md:auto-cols-auto grid-cols-1 md:grid-cols-2 md:mt-0 mt-[10px] md:grid-rows-2 gap-[10px] md:order-1 order-2">
          <div className="relative col-span-1 row-span-2 ">
            <Image
              src="/images/serviceImage15.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage16.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/serviceImage17.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="px-[54px] md:order-2 order-1">
          <h1 className="mt-[10px] leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case">
            P&I Club Surveys
          </h1>
          <p className="leading-[22.85714286px] mt-[46.5px] mb-[10.5px] text-[#555555] text-[16px]">
            Access Fulcrum Limited provides a range of services to P&I clubs
            from Hull and Machinery surveys, Cargo and Container Damage Surveys,
            Loss investigation and Cargo Hold Fitness Surveys.
          </p>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className="border-0 p-0 mt-[36px] hover:bg-[#4b4fca] focus:bg-[#5895da] text-white align-middle inline-block text-center text-[14px] font-semibold bg-[#2a6ebb] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
      </div> */}
      {/* <div className="my-[30px] p-[18px] w-full max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)]">
        <div className="bg-white h-auto py-4 px-3 md:px-12">
          <h1 className="leading-[42.85714287px] text-[30px] text-[#ff6f20] font-normal normal-case mt-[10px] mb-[10.5px]">
            AGRI Commodities
          </h1>
          <p className="leading-[22.85714286px] text-[#555555] text-[16px] font-normal mb-[10.5px] break-words">
            Our range of Engineering inspection include:
          </p>
          <ul>
            <li>
              Lifting Equipment, Mobile Cranes, Ship Cranes, Residential and
              Commercial Lifts Inspection&nbsp;to UK LOLER or Equivalent
            </li>
            <li>Oil Storage Tank Inspection by Drone / UAV</li>
            <li>STS Oil Hose Pressure Testing</li>
          </ul>
          <Link
            href="mailto:contact@access-fulcrum.com"
            className="border-0 p-0 mt-[36px] text-white align-middle inline-block text-center text-[14px] font-semibold hover:bg-[#4b4fca] focus:bg-[#5895da] bg-[#2a6ebb] uppercase transition-all duration-300 px-8 py-2 rounded-[20px] leading-[20px] bg-none"
          >
            Contact us
          </Link>
        </div>
        <div className="grid auto-rows-[230px] md:auto-cols-auto grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]">
          <div className="col-span-1 row-span-2 relative">
            <Image
              src="/images/serviceImage18.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className=" relative">
            <Image
              src="/images/serviceImage19.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className=" relative">
            <Image
              src="/images/serviceImage20.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
