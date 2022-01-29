import { FC } from "react";
import Link from "next/link";
import { IArticle } from "../types/index";
import GridStyles from "../styles/Grid.module.css";

const GSPItem: FC<IArticle> = ({ article }) => {
  const url = `/gsp/${article.id}`;
  return (
    <Link href="gsp/[id]" as={url}>
      <a className={GridStyles.card}>
        <h3 className="linkName">{article.title} &rarr;</h3>
      </a>
    </Link>
  );
};

export default GSPItem;
