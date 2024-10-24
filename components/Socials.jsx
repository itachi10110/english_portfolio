import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiTelegramFill,
  RiVkFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "VK",
    link: "https://vk.com/slz123",
    Icon: RiVkFill,
  },
  {
    name: "Telegram",
    link: "https://t.me/salehlz",
    Icon: RiTelegramFill,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/79915986105",
    Icon: RiWhatsappFill,
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
