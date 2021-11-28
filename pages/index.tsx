import { FC } from "react";
import Link from "next/link";

const Home: FC = () => {
  return (
    <>
      <div>
        <Link href="/ssg">
          <a className="linkName">SSG Static site generation</a>
        </Link>
        <p>Page props created at build time using getStaticProps.</p>
      </div>
      <div>
        <Link href="/ssp">
          <a className="linkName">SSP Server side props</a>
        </Link>
        <p>
          Page props created on page load or page refresh in browser using
          getServerSideProps.
        </p>
      </div>
      <div>
        <Link href="/gsp">
          <a className="linkName">GSP getstatic paths</a>
        </Link>
        <p>
          Get static paths allows us to get a item not statically generated.
          LIKE http://localhost:3000/article/10 go and get article 10
        </p>
      </div>
      <div>
        <Link href="/rtc">
          <a className="linkName">Jed RTC package</a>
        </Link>
        <p>
          Jeds RTC package get client talkin to client usin RTC
          serverless-webrtc-react
        </p>
      </div>
    </>
  );
};

export default Home;
