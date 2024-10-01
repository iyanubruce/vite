import React from "react";
import Image from "next/image";
function Footer() {
	return (
		<>
			<div className="bg-[#2a6ebb] pt-5 pb-5 h-[200px]">
				<h1 className="text-center text-[15px] leading-[21.43px] text-white font-bold mb-[10.5px]">
					{" "}
					© Access Global Limited - 2024
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
						height={25}
						alt="footer2"
					/>
					<Image
						src="/images/footer3.png"
						width={57}
						height={51}
						alt="footer3"
					/>
				</div>
			</div>
			<div className="h-2"></div>
		</>
	);
}

export default Footer;
