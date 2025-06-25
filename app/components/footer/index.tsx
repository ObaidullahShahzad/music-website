import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white h-fit pt-[20px] md:pt-[50px] text-center  pb-8 px-4">
      <div className="flex justify-center mb-[30px]">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Image
            src="/insta.svg"
            alt="Instagram"
            width={44}
            height={44}
            className="hover:opacity-75 transition"
          />
        </a>
      </div>
      <a
        href="mailto:music4matt@outlook.com"
        className="text-[12px] md:text-[20px] mb-[30px] font-[500] font-lexend tracking-widest hover:underline block"
      >
        music4matt@outlook.com
      </a>
      <p className="text-[12px] md:text-[20px] font-[500] font-lexend tracking-widest">
        ©2025 4MATT - ALL RIGHT RESERVED
      </p>
    </footer>
  );
};

export default Footer;
