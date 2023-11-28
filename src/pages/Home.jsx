import React from "react";
import AddForm from "../components/AddForm";
import List from "../components/List";

const Home = () => {
  const t = true;
  const f = false;
  return (
    <>
      <AddForm />
      <List />
    </>
  );
};

export default Home;
