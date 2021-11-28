import { FC } from "react";
import GSPItem from "./GSPItem";
import { IArticles } from "../types/index";
import articleStyles from "../styles/Article.module.css";

const GSPList: FC<IArticles> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <GSPItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default GSPList;
