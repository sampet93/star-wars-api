import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "@mui/icons-material/Google";
import { SearchData, SearchOptions } from "../store/types";

interface ListItemProps {
  key: number;
  item: SearchData;
  searchOption: SearchOptions;
}

export default function ResultsListItem(props: ListItemProps) {
  const { key, item, searchOption } = props;
  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  https: return (
    <ListItem key={key}>
      <ListItemIcon>
        <>
          {searchOption !== SearchOptions.PEOPLE || (
            <PersonIcon color="primary" />
          )}
          {searchOption !== SearchOptions.PLANET || (
            <PublicIcon color="primary" />
          )}
          {searchOption !== SearchOptions.STARSHIP || (
            <StarIcon color="primary" />
          )}
        </>
      </ListItemIcon>
      <ListItemText primary={item.name} />
      <Tooltip title="Google search">
        <IconButton
          onClick={() =>
            openInNewTab(
              `https://www.google.com/search?q=${item.name}&tbm=isch`
            )
          }
        >
          <GoogleIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}
