import Head from "next/head";
import { IMeta } from "../types/index";
import { FC } from "react";

const Meta: FC<IMeta> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev NewZ",
  keywords: "web development, Programming",
  description: "Get the latest news in web dev",
};

export default Meta;
