import Image from "next/image";
import React from "react";
import Container from "../shared/Contianer";

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Upgrade Your Tech Life With{" "}
            <span className="text-primary">Smart Gadgets</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600">
            Buy Every Gadget with up to 15% Discount
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-primary btn-outline">
              Explore Products
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <Image
            alt="Buy every gadget with up to 15% discount"
            src="/assets/Hero-Banner.png"
            width={500}
            height={400}
            className="w-full max-w-md lg:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
