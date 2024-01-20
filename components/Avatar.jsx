import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={400}
        height={337}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
