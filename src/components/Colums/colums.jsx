import React from "react";
import { Wrap } from "./style";
import Cards from "../Cards/cards";
import {dataList} from '../../utils/cards'

const Colums = () => {
  return (
    <Wrap>
      {
        dataList.map(({id, title, cards}) => {
          return <Cards key={id} id={id} title={title} cards={cards} />
        })
      }
    </Wrap>
  );
};

export default Colums;
