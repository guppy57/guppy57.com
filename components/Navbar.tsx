import { cn } from "@/lib/utils";
import Link from "next/link";
import ContainerWide from "@/components/ContainerWide";
import Logo from "./Logo";
import Home from "./icons/Home";
import Heart from "./icons/Heart";
import Chat from "./icons/Chat";
import BookOpen from "./icons/BookOpen";
import Pin from "./icons/Pin";
import Shield from "./icons/Shield";

interface NavbarProps {
  activeLink: string;
}

interface LinkProps {
  title: string;
  href: string;
  target?: string;
  icon: React.ReactNode;
  isActive: boolean;
}

function NavLink(props: LinkProps) {
  return (
    <Link
      href={props.href}
      target={props.target}
      className={cn(
        "flex items-center justify-center transition hover:underline",
        props.isActive ? "decoration-[rgba(38,38,38,1)]" : "decoration-inactive",
      )}
    >
        {props.icon}
        <p
          className={cn(
            "font-bold tracking-tight text-lg",
            props.isActive ? "text-[rgba(38,38,38,1)]" : "text-inactive"
          )}
        >
          {props.title}
        </p>
    </Link>
  );
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="sticky top-0 py-4 z-50 bg-[#FFFFFD] bg-opacity-50 backdrop-blur-md">
      <ContainerWide className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Logo className="h-8 w-auto -mt-1.5" />
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <NavLink
            title="Home"
            href="/"
            icon={
              <Home
                className="w-6 h-6 -mt-0.5"
                color={
                  props.activeLink === "home" ? "rgba(38,38,38,1)" : "#B7B7B5"
                }
              />
            }
            isActive={props.activeLink === "home"}
          />
          <NavLink
            title="Support"
            href="mailto:support@kreativeusa.com"
            target="_blank"
            icon={<Heart className="w-6 h-6" color={"#B7B7B5"} />}
            isActive={false}
          />
          <NavLink
            title="About"
            href="/about"
            icon={
              <BookOpen
                className="w-6 h-6"
                color={
                  props.activeLink === "about" ? "rgba(38,38,38,1)" : "#B7B7B5"
                }
              />
            }
            isActive={props.activeLink === "about"}
          />
          <NavLink
            title="MyKreative"
            href="https://my.kreativeusa.com/account"
            target="_blank"
            icon={<Shield className="w-6 h-6 -ml-1" color={"#B7B7B5"} />}
            isActive={false}
          />
          <NavLink
            title="Contact"
            href="mailto:hello@kreativeusa.com"
            target="_blank"
            icon={<Chat className="w-6 h-6" color={"#B7B7B5"} />}
            isActive={false}
          />
          <NavLink
            title="Legal"
            href="/legal"
            icon={
              <Pin
                className="w-6 h-6 -ml-1"
                color={props.activeLink === "legal" ? "#262626" : "#B7B7B5"}
              />
            }
            isActive={props.activeLink === "legal"}
          />
        </div>
      </ContainerWide>
    </nav>
  );
}
