"use client";
import { headerLinks } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex-col md:flex-row w-full items-start flex gap-5">
      {headerLinks?.map((link) => (
        <li
          className={`${
            pathname === link?.route ? "text-primary-500" : ""
          } flex-center p-medium-16 whitespace-nowrap`}
          key={link?.route}
        >
          <Link href={link?.route}>{link?.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;