import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  gap: 40px;
`;

const CreateWorkSpcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  h2 {
    font-size: 26px;
  }
  h1 {
    font-size: 35px;
  }
  .titles_wrap {
    line-height: 40px;
    color: #172b4d;
    padding: 0px 0px 20px;
    word-break: break-word;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
  label {
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #172b4d;
    line-height: 16px;
    letter-spacing: -0.01px;
    margin-top: 0;
  }
  input {
    background: #ffffff;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    margin: 0 0 8px 0;
    outline: none;
    padding: 8px 12px;
    transition-duration: 85ms;
    transition-property: background-color, border-color, box-shadow;
    transition-timing-function: ease;
    line-height: 20px;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    border: 2px solid transparent;
    font-size: 14px;
  }
  input:focus {
    border: 2px solid blue;
  }
  .btn {
    margin-top: 16px;
    height: 42px;
    max-width: 273px;
    background-color: #0079bf;
    box-shadow: none;
    border: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    gap: 15px;
    font-size: 14px;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #172b4d;
  }
`;

export { Wrap, CreateWorkSpcWrapper };
