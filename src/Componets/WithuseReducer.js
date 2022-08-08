import React from "react";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Center, Input, TextInput, Button, Modal } from "@mantine/core";
import { BiSearch, BiTrash, BiPlus } from "react-icons/bi";

function WithuseStateAnduseRef() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        opened={modal}
        centered
        onClose={() => {
          setModal(false);
        }}
      >
        <Input.Wrapper>
          <TextInput></TextInput>
          <Button leftIcon={<BiPlus />} style={{ marginTop: "10px" }}>
            Add Todo
          </Button>
        </Input.Wrapper>
      </Modal>
      <Center
        style={{ padding: "20px", display: "flex", flexDirection: "column" }}
      >
        <h3>TODOS</h3>
        <div></div> <Input icon={<BiSearch />} /> <div />
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Button
            onClick={() => {
              setModal(true);
            }}
            leftIcon={<BiPlus />}
            style={{ marginTop: "10px" }}
          >
            Add Todos
          </Button>
          <Button
            leftIcon={<BiTrash />}
            color={"red"}
            style={{ marginTop: "10px" }}
          >
            Delete Todos
          </Button>
        </div>
      </Center>
    </>
  );
}

export default WithuseStateAnduseRef;
