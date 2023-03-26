import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { workspace } from "../../utils/workspaces";
import Colums from "../Colums/colums";
import { WorkspaceTitle, Wrap } from "./style";

const AddedWorkspace = () => {
  const [selected, setSelected] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  let wrapper = document.getElementById("frame");
  useEffect(() => {
    let res = workspace?.filter(
      (wspace) => wspace.workspace === `${id}`.replace(":", "")
    );
    setSelected(res);
  }, [id]);

  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      wrapper.style.backgroundImage = `url(${reader.result})`;
    },
    false
  );

  const onFileInputChange = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    if (image) reader.readAsDataURL(image);
  };
  return (
    <Wrap
      id="frame"
      style={{
        backgroundImage: `url(
            https://unito.io/wp-content/uploads/2021/08/Blog_Header_BestTrelloPowerUps.jpeg
          )`,
      }}
    >
      <WorkspaceTitle>
        {
          selected.length
            ? selected?.map((workspace, idx) => {
                return <h1 key={idx}>{workspace.workspace}</h1>;
              })
            : navigate("/", { replace: true })
            // < h1 > No Workspaces Found</h1>
        }

        <div>
          <label>Change Background</label>
          <input onChange={onFileInputChange} type="file" />
        </div>
      </WorkspaceTitle>
      <Colums />
    </Wrap>
  );
};

export default AddedWorkspace;
