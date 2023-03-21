import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/main";
import Workspace from "./components/Workspace/workspace";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/workspace:id" element={<Workspace />} />
      </Routes>
    </>
  );
};

export default App;
