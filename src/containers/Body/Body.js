import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BodyWrapper from "./BodyWrapper";
import { SET_VALUE } from "../Todo/types";
import { ListGroup } from "reactstrap";
import Item from "../Todo/Item";

const Body = (props) => {
  // const dispatch = useDispatch();

  // const data = useSelector((state) => state.value);
  // const value = useSelector((state) => state.tasks);

  // const typing = (event) => {
  //   const action = { type: SET_VALUE, payload: event.target.value };
  //   dispatch(action);
  // };

  // const add = () => {
  //   const action = { type: SET_VALUE, payload: value };
  //   dispatch(action);
  // };

  // const deleteTask = (index) => {
  //   const action = { type: "DELETE_TASK", payload: index };
  //   dispatch(action);
  // };

  // const editTask = (value, index) => {
  //   const action = { type: "EDIT_TASK", payload: { value, index } };
  //   dispatch(action);
  // };

  // const toggleCompleted = (index) => {
  //   console.log(index, "toggleCompleted");

  //   const action = { type: "TOGGLE_COMPLETED", payload: index };
  //   dispatch(action);
  // };

  return (
    <BodyWrapper>
    {/* //   <ListGroup>
    //     {data?.map((value, index) => {
    //       return (
    //         <Item>
    //           value={value}
    //           index={index}
    //           deleteTask={deleteTask}
    //           editTask={editTask}
    //           toggleCompleted={toggleCompleted}
    //         </Item>
    //       );
    //     })}
    //   </ListGroup> */}
    </BodyWrapper>
  );
};

export default Body;
