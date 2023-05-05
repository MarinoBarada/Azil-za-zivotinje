import React from 'react'
import style from "./RadioInput.module.css";

function RadioInput({ value, checked, action ,filter}) {
    return (
      <div className={style["radio"]}>
        <input type="radio" value={value} checked={checked} onChange={action} />
        <label htmlFor={filter}>{filter}</label>
      </div>
    );
  }
  
  export default RadioInput;