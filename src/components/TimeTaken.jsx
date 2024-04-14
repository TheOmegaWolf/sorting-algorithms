import React from "react";
import { Button } from "react-bootstrap";
import { calcTime } from "../utils/sorting";
import style from './Sort.module.css'
const TimeTaken = (props) => {
    const {func, currArray, text}  = props;
  return (
    <>
      <Button onClick={()=>{(calcTime(func,currArray))}} variant="dark" className={style.sortButtonBig}>
        {text} - TimeTaken
      </Button>
    </>
  );
};

export default TimeTaken;
