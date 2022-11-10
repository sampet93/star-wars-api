import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { SearchOptions } from "../store/types";
import ResultsListItem from "./ResultsListItem";

const ResultsArea: React.FC = () => {
  const { data, loading, searchOption } = useAppSelector((state) => state);
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
    </div>
  );
};

export default ResultsArea;
