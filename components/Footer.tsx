import Link from "next/link";
import { BsFire } from "react-icons/bs";

function Footer() {
  return (
    <footer className="py-8 flex flex-row items-center bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-1">
            <BsFire className="text-orange-600 h-7 w-7" />
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 to-fuchsia-400">
              ClassForge
            </h2>
          </div>

          <ul className="flex flex-row gap-8 items-center">
            <li>
              <Link
                href="/dashboard"
                className="hover:underline text-gray-400 hover:text-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/manage-plan"
                className="hover:underline text-gray-400 hover:text-gray-700"
              >
                Manage Plan
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/ryanbakker/class-forge"
                className="hover:underline text-gray-400 hover:text-gray-700"
              >
                GitHub Repo
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:underline text-gray-400 hover:text-gray-700"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
