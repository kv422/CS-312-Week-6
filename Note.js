import React from "react";
import notes from "../notess";

function Note(props) {
  const [keys, titleName, addedContent] = notes;

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
