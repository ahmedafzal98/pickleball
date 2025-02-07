import { Rating } from "@mui/material";
import product from "../assets/images/product1.png";
import RatingComponent from "./Rating";

const Product = () => {
  return (
    <section>
      <div className="h-auto w-auto p-3 cursor-pointer hover:transition-transform duration-300">
        <div className="relative">
          {/* The sale text inside the image */}
          <div className="absolute top-0 left-0 bg-[#E04243] text-white p-2 rounded-br-xl">
            <span>Sale</span>
          </div>

          {/* Image */}
          <img src={product} alt="Product" className="w-[500px] h-[700px]" />
        </div>
        <div className="flex items-center p-2">
          <Rating name="half-rating" defaultValue={5} precision={1} />
          <span className="text-white opacity-60 text-2xl">(1.203)</span>
        </div>
        <span className="font-semibold text-5xl text-white">
          CRBN3X Power Series <br /> Pickleball Paddle
        </span>
        <div className="flex items-center gap-2 p-2">
          <span className="text-[#B9E018] font-bold text-[28px]">$229.99</span>
          <span className="text-white font-normal text-[ 26px] opacity-60">
            $350.99
          </span>
        </div>
      </div>
    </section>
  );
};
export default Product;
