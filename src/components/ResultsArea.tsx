import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import { SearchOptions } from "../store/types";

const ResultsArea: React.FC = () => {
  const { data, searchOption } = useAppSelector((state) => state);
  return (
    <div>
      <List dense={true}>
        {data.map((item, key) => {
          return (
            <ListItem key={key}>
              <ListItemIcon>
                {searchOption !== SearchOptions.PEOPLE || <PersonIcon />}
                {searchOption !== SearchOptions.PLANET || <PublicIcon />}
                {searchOption !== SearchOptions.STARSHIP || <StarIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ResultsArea;
