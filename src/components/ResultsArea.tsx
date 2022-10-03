import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useAppSelector } from "../hooks/useTypedSelector";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

const ResultsArea: React.FC = () => {
  const { data } = useAppSelector((state) => state);
  return (
    <div>
      <List dense={true}>
        {data.map((item, key) => {
          return (
            <ListItem key={key}>
              <ListItemIcon>
                <PersonIcon />
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
