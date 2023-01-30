import {React} from "react";
import Checkboxs from "./Checkboxs";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "../App.css";

const GiftList = (props) => {
  const { list, setList } = props;
  const items = list.sort(function (a, b) {
    return b.id - a.id;
  });
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
      overflow="scroll"
      flex={"1 1 auto"}
      flexDirection="column"
      display="flex"
      p={2}
      className="form-gift"
      sx={{
        '&::-webkit-scrollbar':{
          display: "none"
      }
      }}
    >
      {list.length ? (
        <>
          <List sx={{ width: "100%" }}>
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

        </>
      ) : (
        "No hay regalos aún."
      )}

    </Box>
  );
};

export default GiftList;
