import { FC } from "react";
import GSPItem from "./GSPItem";
import { IArticles } from "../types/index";
import GridStyles from "../styles/Grid.module.css";

const GSPList: FC<IArticles> = ({ articles }) => {
  return (
    <div className={GridStyles.grid}>
      {articles.map((article) => (
        <GSPItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default GSPList;
