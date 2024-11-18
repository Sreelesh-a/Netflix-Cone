
import { LINKEDIN_IMG ,NETFLIX_LOGO} from "../utils/constants";

const Footer = () => {
 
  // console.log(swiggyData);

  return (
    <div>
      <div className="hidden lg:block  w-full h-auto bg-[#02060C] text-white">
        <div className="px-4 sm:px-48 py-9">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className=" flex items-center gap-x-0">
                <img className=" w-28" src={NETFLIX_LOGO} />
                <span className="font-medium text-white text-2xl">Ai</span>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-400">
                  Designed and Developed by
                  <br />
                  <span className="font-bold">Sreelesh A</span>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sreelesha/"
                    target="_blank"
                  >
                    <div className="  border-[.01rem] p-3 rounded-md flex gap-3   border-gray-400">
                      <div className="text-md text-gray-200">
                        Let's connect!
                      </div>
                      <div className="w-11 sm:w-20">
                        <img src={LINKEDIN_IMG} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-1 sm:gap-40 tracking-wider">
              <div className="space-y-3">
                <span className="font-bold">Company</span>
                <ul className="text-gray-400 space-y-3 ">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Team</li>
                  <li>netflix One</li>
                 
                 
                </ul>
              </div>
              <div className="space-y-3">
                <span className="font-bold">Contact Us</span>
                <ul className="text-gray-400 space-y-3">
                  <li>Help & Support</li>
                  <li>Partner with us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
              <div className="space-y-3">
                <span className="font-bold">Legal</span>
                <ul className="text-gray-400 space-y-3">
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy policy</li>
                  <li>Investor Relations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
