import { FC } from "react";
import { articles, IArticlesAndCount } from "../types/index";
import Meta from "../components/Meta";
import GSPList from "../components/GSPList";

const displayCount: number = 4;

const GSP: FC<IArticlesAndCount> = ({ articles, articlesCount }) => {
  return (
    <div>
      <Meta title={"Posts = " + articlesCount} />
      <h3>
        Showing {displayCount} of {articlesCount}{" "}
      </h3>
      <GSPList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/articles`);
  let articles: articles = await res.json();
  const articlesCount: number = articles.length;
  articles = articles.slice(0, displayCount);

  return {
    props: { articles, articlesCount },
    revalidate: 1,
  };
};

export default GSP;
