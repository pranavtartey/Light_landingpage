import productImage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import Image from "next/image";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex items-center justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn ideas into a fully functional, responsive, SaaS website
            in just minutes with this template.
          </p>
        </div>
        <div className="relative ">
          <Image src={productImage} alt="productimage" className="mt-10" />
          <Image src={pyramidImage} height={262} width={262} alt="pyramidImage" className="max-md:hidden absolute -top-32 -right-36" />
          <Image src={tubeImage} alt="tube image" height={248} className="max-md:hidden absolute bottom-24 -left-36"/>
        </div>
      </div>
    </section>
  );
};
