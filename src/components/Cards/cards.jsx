import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { AddCard, AddCardInput, Column, TaskWrapper } from "./style";
import TextareaAutosize from "react-textarea-autosize";

const Cards = ({ id, title, cards }) => {
  const [showInputArea, setShowInputArea] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [sorted, setSorted] = useState([]);
  const addTaskHandler = () => {
    if (!inputValue) return;
    const newTask = {
      id,
      text: inputValue,
    };
    setShowInputArea(false);
    return cards.push(newTask);
  };

  const lists = cards.filter((c) => c.id === id);
  console.log(cards);
  return (
    <Column>
      <h2>{title}</h2>
      {lists?.map((l) => {
        return <TaskWrapper>{l.text}</TaskWrapper>;
      })}
      {!showInputArea ? (
        <AddCard onClick={() => setShowInputArea(true)}>
          <HiOutlinePlus />
          Add a card
        </AddCard>
      ) : (
        <AddCardInput>
          <TextareaAutosize
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a title for this card..."
            minRows={4}
            className={"textarea"}
          />
          <div className="add_btn-wrap">
            <button onClick={addTaskHandler} className="add_btn">
              Add card
            </button>
            <IoCloseOutline
              onClick={() => setShowInputArea(false)}
              id="closeIcon"
              color="#6b778c"
              size={27}
            />
          </div>
        </AddCardInput>
      )}
    </Column>
  );
};

export default Cards;
