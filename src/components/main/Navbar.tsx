import Image from "next/image";
import { Socials } from "../../../constants";

export default function Navbar() {
  return (
    <div className="max-h-[450px]:px-2 fixed top-0 z-50 h-[65px] w-full bg-[#03001417] shadow-lg shadow-[#2A0E61] backdrop-blur-md md:px-2 lg:px-10">
      <div className="max-h-[450px]: max-h-[450px]: m-auto flex h-full w-full flex-row items-center justify-around px-[5px] sm:justify-between sm:px-[10px]">
        <a href="/" className="flex h-auto w-auto flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="Logo"
            width={70}
            height={70}
            className="hover:animate-slowspin"
          />

          <span className="hidden font-bold text-gray-300 sm:ml-[10px] md:block">
            Al1nurX Dev
          </span>
        </a>

        <div className="max-h-[450px]: w-[300px] flex h-full  flex-row items-center justify-between sm:w-[500px] md:w-[400px] lg:mr-20">
          <div className="max-h-[450px]: px-[10px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] py-[10px] text-gray-200 sm:mr-[15px] md:px-[20px]">
            <a className="max-h-[450px]: text-[15px]" href="#about-me">
              About me
            </a>
            <a className="max-h-[450px]: text-[15px]" href="#skills">
              Skills
            </a>
            <a className="max-h-[450px]: text-[15px]" href="#projects">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://instagram.com/al1nurx?igshid=MTk0NTkyODZkYg==">
            <Image
              className="max-h-[450px]: hidden sm:block"
              src="/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>

          <Image
            className="max-h-[450px]: hidden sm:block"
            src="/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
          <Image
            className="max-h-[450px]: hidden sm:block"
            src="/discord.svg"
            alt="Discord"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
