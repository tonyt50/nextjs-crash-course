import { FC } from "react";
import Meta from "./Meta";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Meta />
        <Nav />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
