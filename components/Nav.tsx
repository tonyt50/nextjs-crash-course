import { FC } from "react";
import Link from "next/link";

const Nav: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
        </li>
        <li>
          <Link href="/ssp">
            <a>SSP</a>
          </Link>
        </li>
        <li>
          <Link href="/gsp">
            <a>GSP</a>
          </Link>
        </li>
        <li>
          <Link href="/rtc">
            <a>RTC</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
