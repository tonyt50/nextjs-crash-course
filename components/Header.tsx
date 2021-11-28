import { FC } from "react";
import headerStyles from "../styles/Header.module.css";

const Header: FC = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with webdev news.
      </p>
    </div>
  );
};
export default Header;
