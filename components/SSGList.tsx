import { FC } from "react";
import { IArticles } from "../types/index";
import articleStyles from "../styles/Article.module.css";

const SSGList: FC<IArticles> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <h2 key={article.id} className={articleStyles.card}>
          <h3>{article.title} &rarr;</h3>
          <br />
          <p>{article.body}</p>
        </h2>
      ))}
    </div>
  );
};

export default SSGList;
