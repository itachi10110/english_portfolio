import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { TbBrandVk } from "react-icons/tb";

export const socialData = [
  {
    name: "VK",
    link: "https://vk.com/slz123",
    Icon: TbBrandVk,
  },
  {
    name: "Telegram",
    link: "https://t.me/salehlz",
    Icon: RiTelegramLine,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/79915986105",
    Icon: RiWhatsappLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
