import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  defaultList: number[][];
};

const ListGeoOrganism = ({ defaultList }: Props) => {
  return (
    <Box
      id={"ListGeoOrganism.box"}
    >
      <List id={"ListGeoOrganism.box.list"} style={{maxHeight: '400px', overflow:'auto'}}>
        {defaultList.map((item, i) => (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <GpsFixedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={`${item[0]} , ${item[1]}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListGeoOrganism;
