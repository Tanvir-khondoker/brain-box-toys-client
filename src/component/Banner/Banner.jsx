import banner1 from "../../../public/assets/banner/banner1.jpg";
import banner2 from "../../../public/assets/banner/banner2.jpg";
import banner3 from "../../../public/assets/banner/banner3.jpg";
import { FaAngleRight } from "react-icons/fa";


const Banner = () => {
  return (
    <div className="carousel mt-[150px] mb-24 rounded mx-auto lg:h-[600px]">
      <div className="mt-2 mb-2">
      </div>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-xl" alt="Banner 1" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#8c7272] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-4 md:pl-24 w-full md:w-1/2">
            <h2 className="text-2xl md:text-6xl font-bold">
              Enchanting Scientific Toys: Unleashing Wonders
            </h2>
            <p>
              Explore the World of Science with our Latest Additions! Get an Exciting Discount of up to 40% on Select Scientific Toys.
            </p>
            <div>
              <button className="btn btn-primary mr-5">Order now  <FaAngleRight/></button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-xl" alt="Banner 2" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#8c7272] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-4 md:pl-24 w-full md:w-1/2">
            <h2 className="text-2xl md:text-6xl font-bold">
              Captivating Educational Toys for Knowledge Seekers
            </h2>
            <p>
              Unleash the Power of Learning with our New Educational Toys! Enjoy a Special Discount of up to 30% on Select Items.
            </p>
            <div>
            <button className="btn btn-primary mr-5">Order now  <FaAngleRight/></button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-xl" alt="Banner 3" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#8c7272] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-4 md:pl-24 w-full md:w-1/2">
            <h2 className="text-2xl md:text-6xl font-bold">
              Empowering Fluency with Innovative Learning Toys
            </h2>
            <p>
              Elevate Your Language Skills with our Cutting-edge Language Learning Toys! Do nott Miss the Opportunity to Save up to 25% on Select Items.
            </p>
            <div>
            <button className="btn btn-primary mr-5">Order now  <FaAngleRight/></button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
