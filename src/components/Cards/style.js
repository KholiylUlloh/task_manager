import styled from "styled-components";

const Column = styled.div`
  background-color: #ebecf0;
  padding: 7px;
  border-radius: 6px;
  h2 {
    font-size: 16px;
    color: #172b4d;
    padding: 5px;
  }
  width: 270px;
  height: fit-content;
`;

const AddCard = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  gap: 5px;
  border-radius: 3px;
  color: #5e6c84;
  flex: 1 0 auto;
  margin: 10px 0 8px 8px;
  padding: 5px 8px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #dfe1e6;
  }
`;

const AddCardInput = styled.div`
  margin-top: 10px;
  .textarea {
    width: 100%;
    padding: 5px;
    resize: none;
    outline: none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 3px;
    padding: 10px;
    font-size: 14px;
  }
  .add_btn {
    background-color: #0079bf;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 7px 12px;
    font-size: 14px;
    font-weight: 400;
    transition-duration: 85ms;
    transition-property: background-color, border-color, box-shadow;
    transition-timing-function: ease;
    border-radius: 3px;
    margin-top: 5px;
    border: none;
    cursor: pointer;
  }
  .add_btn:hover {
    background-color: #00235b;
  }
  .add_btn-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  #closeIcon {
    cursor: pointer;
  }
`;

const TaskWrapper = styled.div`
  padding: 8px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover {
    background-color: #dfe1e6;
  }
  cursor: pointer;
  margin-bottom: 7px;
  font-size: 14px;
  color: #172b4d;
`;

export { Column, AddCard, AddCardInput, TaskWrapper };
