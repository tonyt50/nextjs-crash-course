import useSWR from "swr";
import Meta from "../components/Meta";
import { todos, todo } from "../types";
import gridStyles from "../styles/Grid.module.css";

const fetcher = async () => {
  const responce = await fetch("http://localhost:8000/todos");
  const data = await responce.json();
  return data;
};

const SWR = () => {
  const { data, error } = useSWR<todos, any>("todos", fetcher);

  if (error) return <div>An error occured</div>;
  if (!data) return <div>loading</div>;

  return (
    <div>
      <Meta title={"SWR"} />
      <div className={gridStyles.grid}>
        {data.map((todo) => (
          <h2 key={todo.id} className={gridStyles.card}>
            <h3>{todo.id} &rarr;</h3>
            <br />
            <p>{todo.title}</p>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SWR;
