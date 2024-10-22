import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#2c3093] pt-5 pb-5 h-[100px]">
        <h1 className="text-center text-[15px] leading-[21.43px] text-white font-bold mb-[10.5px]">
          {" "}
          © Access Fulcrum Limited - {currentYear}
        </h1>
        <p className="text-center text-[12px] leading-[17.14px] text-[#bcd5f0] mb-[10.5px]">
          Terms and Conditions Apply
        </p>
      </div>
      <div className="h-2"></div>
    </>
  );
}

export default Footer;
