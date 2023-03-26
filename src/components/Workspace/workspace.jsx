import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Workspace = () => {
  // const [selected, setSelected] = useState([]);
  // const [workspace, setWorkspace] = useState([]);
  // const { id } = useParams();
  // console.log(id);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/workspaces")
  //     .then((data) => setWorkspace(data.data[1]));
  //   let res = workspace.filter(
  //     (wspace) => wspace.work_space.replace(' ', '') == `${id}`.replace(":", "")
  //   );
  //   setSelected(res);
  // }, [id]);
  // console.log(workspace);
  return (
    <>
      <h1>Workspace</h1>
    </>
  );
};

export default Workspace;
