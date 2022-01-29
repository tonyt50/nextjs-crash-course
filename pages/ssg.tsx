import { FC } from "react";
import { articles, IArticles } from "../types/index";
import Meta from "../components/Meta";
import SSGList from "../components/SSGList";

const SSG: FC<IArticles> = ({ articles }) => {
  return (
    <div>
      <Meta title={"Posts = " + articles.length} />
      <SSGList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/articles?_limit=6`);
  const articles: articles = await res.json();

  return {
    props: { articles },
    revalidate: 1,
  };
};

export default SSG;
