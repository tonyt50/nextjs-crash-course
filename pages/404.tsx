import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound: FC = () => {
  const router = useRouter();
  const [timeoutFinished, setTimooutFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimooutFinished(true);
    }, 6000);
  }, []);

  if (timeoutFinished) {
    router.push("/");
  }

  return (
    <div className="not-found">
      <h1>Ooops ....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a className="linkName">Home</a>
        </Link>{" "}
        Page.
      </p>
      <p>
        {" "}
        will goback to home in 6 seconds, if you don&apos;t press link to Home
        above
      </p>
    </div>
  );
};

export default NotFound;
