import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white backdrop-blur-md border-t border-white/10 py-6 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Text */}
      <p className="text-sm sm:text-base font-medium tracking-wide text-center sm:text-left">
        © {year} LMS | All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex gap-5 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-500 transition transform hover:scale-110"
        >
          <BsFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-400 transition transform hover:scale-110"
        >
          <BsInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400 transition transform hover:scale-110"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-cyan-400 transition transform hover:scale-110"
        >
          <BsTwitterX />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
