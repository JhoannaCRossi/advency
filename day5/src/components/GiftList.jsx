import React from "react";
import Checkboxs from "./Checkboxs";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import "../App.css";

const GiftList = (props) => {
  const { list, setList } = props;
  const items = list.sort(function(a, b){return b.id - a.id});
  const onChangeStatus = (e) => {
    const { value, checked } = e.target;
    const updateListCheked = list.map((item) => ({
      ...item,
      done: item.id === value ? checked : item.done,
    }));
    const updateListDelete = updateListCheked.filter((item) => !item.done);
    setTimeout(() => {
      setList(updateListDelete);
    }, 250);
  };

  return (
    <Box
      overflow="auto"
      flex={1}
      flexDirection="column"
      display="flex"
      p={2}
      className="form-gift"
    >
      {list.length ? (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {items.map((value) => {
            return (
              <ListItem key={value.id} disablePadding>
                <ListItemText className="item-text">
                  <Checkboxs
                    name={value.id}
                    data={value}
                    key={value.id}
                    onChange={onChangeStatus}
                  />
                </ListItemText>
              </ListItem>
            );
          })}
          
        </List>

      ) : (
        "no tasks"
      )}
    </Box>
  );
};

export default GiftList;
