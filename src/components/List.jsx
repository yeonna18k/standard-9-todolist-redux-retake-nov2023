import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../shared/todos";

function List() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onClickDoneBtn = (e) => {
    dispatch(switchTodo(e));
  };
  const onClickDeleteBtn = (e) => {
    dispatch(deleteTodo(e));
  };

  return (
    <Container>
      <ListTitle>TodoList</ListTitle>
      <CardWrapper>
        {todos
          .filter((item) => item.isDone == false)
          .map((todo) => {
            return (
              <ListCard>
                <CardTitle>{todo.title}</CardTitle>
                <CardContent>{todo.body}</CardContent>
                <DoneBtn onClick={onClickDoneBtn(todo.id)}>
                  {todo.isDone == false ? "Done" : "Undo"}
                </DoneBtn>
                <DeleteBtn onClick={onClickDeleteBtn(todo.id)}>
                  Delete
                </DeleteBtn>
              </ListCard>
            );
          })}
      </CardWrapper>
      <ListTitle>DoneList</ListTitle>
      <CardWrapper>
        {todos
          .filter((item) => item.isDone == true)
          .map((todo) => {
            return (
              <ListCard>
                <CardTitle>{todo.title}</CardTitle>
                <CardContent>{todo.body}</CardContent>
                <DoneBtn>{todo.isDone == false ? "Done" : "Undo"}</DoneBtn>
                <DeleteBtn>Delete</DeleteBtn>
              </ListCard>
            );
          })}
      </CardWrapper>
    </Container>
  );
}

export default List;

const Container = styled.div`
  padding: 20px;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ListTitle = styled.div`
  margin-top: 20px;
`;
const ListCard = styled.div`
  border: 2px solid pink;
  width: 250px;
  padding: 10px;
`;
const CardTitle = styled.p``;
const CardContent = styled.p``;
const DoneBtn = styled.button`
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  cursor: pointer;
`;
