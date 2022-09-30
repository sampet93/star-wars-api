import React from "react";
import { useAppSelector } from "../hooks/useTypedSelector";

const ResultsArea: React.FC = () => {
  const { data } = useAppSelector((state) => state);
  return (
    <div>
      <ul>
        {data.map((item, key) => {
          return <li key={key}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResultsArea;
