import { List, Alert } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import ResultsListItem from "./ResultsListItem";

const ResultsArea: React.FC = () => {
  const { data, loading, searchOption } = useAppSelector((state) => state);
  const showError = useRef(false);

  return (
    <div>
      <List dense={true}>
        {data.map((item, key) => {
          return (
            <ResultsListItem
              key={key}
              item={item}
              searchOption={searchOption}
            />
          );
        })}
      </List>
      {!loading && data.length === 0 && !showError ? (
        <Alert severity="error">No search results :/</Alert>
      ) : null}
    </div>
  );
};

export default ResultsArea;
