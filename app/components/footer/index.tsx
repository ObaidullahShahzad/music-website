import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white text-center pb-8 px-4">
      <div className="flex justify-center mb-4">
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
        href="mailto:wainwrightm19@gmail.com"
        className="text-sm sm:text-base mb-2 font-lexend tracking-widest hover:underline block"
      >
        wainwrightm19@gmail.com
      </a>
      <p className="text-xs sm:text-sm font-lexend tracking-widest">
        ©2025 4MATT - ALL RIGHT RESERVED
      </p>
    </footer>
  );
};

export default Footer;
