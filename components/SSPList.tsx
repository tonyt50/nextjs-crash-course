import { FC } from "react";
import { IArticles } from "../types/index";
import GridStyles from "../styles/Grid.module.css";

const SSPList: FC<IArticles> = ({ articles }) => {
  return (
    <div className={GridStyles.grid}>
      {articles.map((article) => (
        <h2 key={article.id} className={GridStyles.card}>
          <h3>{article.title} &rarr;</h3>
          <br />
          <p>{article.body}</p>
        </h2>
      ))}
    </div>
  );
};

export default SSPList;
