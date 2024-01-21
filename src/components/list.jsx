import React from "react";
import s from "../style/list.module.css";

export default function List(props) {
  return (
    <div>
      <ul className={s.listBox}>
        <li style={{ color: props.textColor }}>java script</li>
        <li style={{ color: props.textColor }}>react</li>
        <li style={{ color: props.textColor }}>css</li>
        <li style={{ color: props.textColor }}>{props.textData}</li>
      </ul>
    </div>
  );
}
