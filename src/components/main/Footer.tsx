import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-[200px] h-full w-full bg-transparent p-[15px] text-gray-200 shadow-lg">
      <div className="m-auto flex w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-row flex-wrap items-center justify-around">
          <div className="flex h-auto min-w-[200px] flex-col items-center justify-center">
            <div className="mb-4 text-[18px] font-bold">Community</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <FaYoutube />
              <span className="ml-[6px] text-[15px]">YouTube</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxGithubLogo />
              <span className="ml-[6px] text-[15px]">Github</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxDiscordLogo />
              <span className="ml-[6px] text-[15px]">Discord</span>
            </p>
          </div>

          <div className="flex h-auto min-w-[200px] flex-col items-center justify-center">
            <div className="mb-4 text-[18px] font-bold">Social Media</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxInstagramLogo />
              <span className="ml-[6px] text-[15px]">Instagram</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxTwitterLogo />
              <span className="ml-[6px] text-[15px]">Twitter</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <RxLinkedinLogo />
              <span className="ml-[6px] text-[15px]">Linkedin</span>
            </p>
          </div>

          <div className="flex h-auto min-w-[200px] flex-col items-center justify-center">
            <div className="mb-4 text-[18px] font-bold">About</div>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <span className="ml-[6px] text-[15px]">Become Sponsor</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center">
              <span className="ml-[6px] text-[15px]">Learning about me</span>
            </p>
            <p className="my-[15px] flex cursor-pointer flex-row items-center font-semibold">
              <span className="ml-[6px] text-[15px]">vashalinur@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mb-[30px] mt-9 text-center text-[15px]">
          &copy; Al1nurX Dev 2023 Ins. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
