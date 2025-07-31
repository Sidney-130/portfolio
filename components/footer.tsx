import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-6 pb-5 border-t bottom-0">
      <div className="flex justify-center items-center space-x-8">
        <a
          href="https://t.me/sidney_13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/Janey_Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/Sidney-130"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
