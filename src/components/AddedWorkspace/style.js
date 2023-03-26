import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding-top: 20px;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

const WorkspaceTitle = styled.div`
  width: 80%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  label {
    margin-right: 20px;
  }
  h1 {
    padding: 10px;
    background-color: #0000003d;
    color: antiquewhite;
  }
  div {
    padding: 10px;
    background-color: #0000003d;
    color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export { Wrap, WorkspaceTitle };
