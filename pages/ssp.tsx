import { FC } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { articles, IArticles } from "../types/index";
import Meta from "../components/Meta";
import SSPList from "../components/SSPList";

const SSP: FC<IArticles> = ({ articles }) => {
  return (
    <div>
      <Meta title={"Posts = " + articles.length} />
      <SSPList articles={articles} />
    </div>
  );
};

// basically do this on page load or page refresh in browser
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:8000/articles?_limit=3`);

  const articles: articles = await res.json();

  return {
    props: { articles },
  };
};

export default SSP;
