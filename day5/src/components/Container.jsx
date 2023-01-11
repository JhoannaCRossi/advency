import { React, useState } from "react";
import Form from "./Form";
import GiftList from "./GiftList";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteSweep from "@mui/icons-material/DeleteSweep";

import "../App.css";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  function onRemovingAll() {
    setTimeout(() => {
      setList([]);
    }, 250);
  }

  return (
    <div className="container">
      <Form handleAddItem={handleAddItem} />
      <GiftList list={list} setList={setList} />
      {list.length ? (
        <>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={1}
          >
            <IconButton
              onClick={onRemovingAll}
              style={{
                marginTop: "5px",
                color: "#DDD",
              }}
            >
              <DeleteSweep />
            </IconButton>
          </Stack>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Container;
