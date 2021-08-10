import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import styled from "styled-components";

const ItemWrapper = styled(ListGroupItem)`
  .completed {
    text-decoration: line-through;
  }
`;

const Item = ({
  value: { title, completed },
  index,
  deleteTask,
  editTask,
  toggleCompleted,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);

  const save = () => {
    setIsEdit(false);
    editTask(value, index);
  };

  const cancel = () => {
    setIsEdit(false);
    setValue(title);
  };

  return (
    <ItemWrapper
      key={index}
      tag="a"
      href="#"
      action
      ondblclick={() => toggleCompleted(index)}
    ></ItemWrapper>
  );
};

export default Item;
