import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../shared/todos";

function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: shortid.generate(),
        title: title,
        body: content,
        isDone: false,
      })
    );
    setTitle("");
    setContent("");
  };

  return (
    <Container>
      <StForm onSubmit={onSubmitHandler}>
        <label>Title</label>
        <StInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></StInput>
        <label>Content</label>
        <StInput
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></StInput>
        <StButton>Add</StButton>
      </StForm>
    </Container>
  );
}

export default AddForm;

const Container = styled.div`
  padding: 20px;
`;
const StForm = styled.form``;
const StInput = styled.input``;
const StButton = styled.button``;
