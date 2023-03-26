import React from "react";
import { Route, Routes } from "react-router-dom";
import AddedWorkspace from "./components/AddedWorkspace/addedWorkspace";
import Main from "./components/Main/main";
import Workspace from "./components/Workspace/workspace";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/workspace" element={<Workspace />} /> */}
        <Route path="/:id" element={<AddedWorkspace />} />
      </Routes>
    </>
  );
};

export default App;
