import footerLogo from "../assets/images/footer-logo.png";
import call from "../assets/icons/call.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";

const companySections = [
  "Our Story",
  "Tournament Sponsorship",
  "Customer Rewards",
  "Club Rewards",
  "Wholesale",
  "Jobs",
];
const support = [
  "Returns",
  "Shipping",
  "Warranties",
  "Price Match",
  "Affiliate",
];
const resources = [
  "Paddle Finder",
  "Paddle Guide",
  "Blog",
  "What is Pickleball?",
  "Places To Play",
];

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-tl from-[#b8e01857] to-[#000000b4] bg-no-repeat bg-fixed flex justify-center w-full h-[592px] mt-[7%]">
        <div className="flex flex-col w-full items-center">
          <div className="w-1/2 h-[280px] mt-8 flex">
            <div className=" flex flex-col h-full w-1/2 justify-between text-white">
              <div>
                <img src={footerLogo} alt="Footer Logo" />
              </div>
              <span className="font-semibold">Contact Us</span>
              <div className="flex gap-4">
                <img src={call} alt="Call" />
                <span>Call Us</span>
              </div>
              <span className="ml-10">123 456 7890</span>

              <div className="flex gap-5 ml-4 mt-4">
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
              </div>
            </div>
            <div className="flex w-[100%] justify-evenly text-[16px] font-normal">
              <div className="flex flex-col h-full text-white">
                <div>
                  <span className="text-[#B9E018] font-semibold">Company</span>
                  <div className="bg-white w-1/3 h-1 rounded-2xl mt-2"></div>
                </div>
                <ul className="list-[circle] list-inside mt-10 space-y-2">
                  {companySections &&
                    companySections.map((item) => {
                      return <li>{item}</li>;
                    })}
                </ul>
              </div>
              <div className="flex flex-col h-full text-white">
                <div>
                  <span className="text-[#B9E018] font-semibold">Support</span>
                  <div className="bg-white w-1/2 h-1 rounded-2xl mt-2"></div>
                </div>
                <ul className="list-[circle] list-inside mt-10 space-y-2">
                  {support &&
                    support.map((item) => {
                      return <li>{item}</li>;
                    })}
                </ul>
              </div>
              <div className="flex flex-col h-full text-white">
                <div>
                  <span className="text-[#B9E018] font-semibold">
                    Resources
                  </span>
                  <div className="bg-white w-1/2 h-1 rounded-2xl mt-2"></div>
                </div>
                <ul className="list-[circle] list-inside mt-10 space-y-2">
                  {resources &&
                    resources.map((item) => {
                      return <li>{item}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end items-center h-screen">
            <div className="bg-[#B9E018] w-screen h-[1px] rounded-2xl mb-6 opacity-50"></div>

            <div className="text-center text-white mb-6">
              © 2022 All rights reserved. Reliance Retail Ltd.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
