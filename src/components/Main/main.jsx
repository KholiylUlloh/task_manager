import React, { useState } from "react";
import { CreateWorkSpcWrapper, Wrap } from "./main.style";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { workspace } from "../../utils/workspaces";

const Main = () => {
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const addWorkspace = () => {
    workspace.push({ workspace: value });
  };


  return (
    <Wrap>
      <img
        src="https://a.trellocdn.com/prgb/assets/a7fb768ffd0181cbfc63.svg"
        alt="main img"
      />
      <CreateWorkSpcWrapper>
        <div className="titles_wrap">
          <h1>Welcome to Trello!</h1>
          <h2>Let’s create your Workspace</h2>
          <p>
            Everyone and everything in one place. A space for teams to
            collaborate, organize, and share project boards.
          </p>
        </div>

        <label>Name your Workspace (Project or team name)</label>
        <input
          onChange={onInputChange}
          value={value}
          type="text"
          placeholder="Create a Workspace"
        />
        <Link onClick={addWorkspace} to={`/:${value}`} className="btn">
          Create Workspace <HiArrowRight size={20} />
        </Link>
      </CreateWorkSpcWrapper>
    </Wrap>
  );
};

export default Main;
