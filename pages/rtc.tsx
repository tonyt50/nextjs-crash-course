import { FC } from "react";
import { articles, IArticles } from "../types/index";
import Meta from "../components/Meta";
import RTCPage from "../components/RTCPage";

const RTC: FC = () => {
  return (
    <div>
      <Meta title={"RTC"} />
      <RTCPage />
    </div>
  );
};

export default RTC;
