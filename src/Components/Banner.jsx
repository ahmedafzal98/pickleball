import Button from "./Button";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <>
      <div className="bg-[#B9E018] opacity-50 h-[0.5px] w-full]"></div>
      <section className="flex flex-col items-center h-[564px]">
        <div className="flex flex-col items-center w-4/5 h-[564px] ">
          <span className="text-[32px] font-normal text-[#B9E018] p-4">
            Shop easily, quickly, and stylishly
          </span>
          <span className="w-full flex justify-center text-center text-[70px] font-normal text-white">
            NEW! CRBN TruFoam Genesis Pickleball <br /> Paddles
          </span>
          <SearchBar />`
          <div className="flex space-x-8">
            <Button title="CART" backgroundColor="bg-[#B9E018]" />
            <Button title="ABOUT US" textColor="#B9E018" isIcon="true" />
          </div>
          `
        </div>
      </section>
    </>
  );
};

export default Banner;
