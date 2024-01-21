//rfc
import React from "react";
import List from "../components/list";
import "../style/main.css";

export default function Main() {
  return (
    <div>
      <div>
        <List />
        <p
          className="text"
          style={{ color: "green", textTransform: "uppercase" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga facere,
          esse corrupti culpa suscipit maiores error nihil nulla, distinctio
          officia rerum hic non saepe adipisci, unde fugiat libero ad molestias!
        </p>
        <List textColor={"blue"} textData={"Test value"} />
      </div>
    </div>
  );
}
