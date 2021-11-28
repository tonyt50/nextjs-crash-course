import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { IArticle, article } from "../../../types/index";

const Article: FC<IArticle> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/gsp">
        <a className="linkName">Go Back</a>
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
  );

  const article: article = await res.json();

  return {
    props: { article },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles: article[] = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
export default Article;
