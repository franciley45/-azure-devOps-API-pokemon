import React from "react";

export default function Pokemon({ hedleClickPages, title }) {
  return (
    <div>
      <button onClick={hedleClickPages}>{title}</button>
    </div>
  );
}
